import { Oracle, Room, RoomPlayer } from "../interfaces";
import { Program } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import * as idl from "../solana/idl/dejavu_football.json";
import { DejavuFootball } from "../solana/types/dejavu_football";
import * as bs58 from "bs58";

import * as anchor from "@project-serum/anchor";

export class Dejavu {
  DEJAVU_PROGRAM_ID = new PublicKey(process.env.DEJAVU_PROGRAM_ID as string);
  DEJAVU_AUTHORIZER = new PublicKey(
    process.env.DEJAVU_AUTHORIZER_ACCOUTN as string
  );

  async getOracles(): Promise<Oracle[]> {
    const oracles = await this.program.account.oracle.all([
      {
        memcmp: {
          offset: 8,
          bytes: this.DEJAVU_AUTHORIZER.toBase58(), // auth filter
        },
      },
      {
        memcmp: {
          offset: 60,
          bytes: bs58.encode(Uint8Array.from([0])),
        },
      },
    ]);

    return oracles.map((oracle) => ({
      id: oracle.publicKey.toString(),
      teamA: oracle.account.teamsIds[0].toString(),
      teamB: oracle.account.teamsIds[1].toString(),
      scoreA: oracle.account.results[0],
      scoreB: oracle.account.results[1],
      endsAt: oracle.account.finishedAt.toNumber(),
      closedAt: oracle.account.closedAt.toNumber(),
      isFinished: oracle.account.isFinished,
    }));
  }

  async getOracle(oracle: PublicKey): Promise<Oracle> {
    const data = await this.program.account.oracle.fetch(oracle);

    return {
      id: oracle.toString(),
      teamA: data.teamsIds[0].toString(),
      teamB: data.teamsIds[1].toString(),
      closedAt: data.closedAt.toNumber(),
      endsAt: data.finishedAt.toNumber(),
      isFinished: data.isFinished,
      scoreA: data.results[0],
      scoreB: data.results[1],
    };
  }

  async getRoom(room: PublicKey): Promise<Room> {
    const roomData = await this.program.account.room.fetch(room);
    const oracle = await this.getOracle(roomData.oracle);

    const [roomPlayersKey] = await anchor.web3.PublicKey.findProgramAddress(
      [room.toBuffer(), Buffer.from("players")],
      this.program.programId
    );

    const roomPlayersKeyData = await this.program.account.roomPlayers.fetch(
      roomPlayersKey
    );

    const players = await this.program.account.roomsHistory.all([
      {
        memcmp: {
          offset: 8,
          bytes: room.toBase58(),
        },
      },
    ]);

    const roomPlayers: RoomPlayer[] = players.map((player) => {
      const scoreA = (roomPlayersKeyData.list as number[][])[
        Number(player.account.key)
      ][0];
      const scoreB = (roomPlayersKeyData.list as number[][])[
        Number(player.account.key)
      ][1];

      return {
        id: player.publicKey.toString(),
        scoreA: scoreA,
        scoreB: scoreB,
        idPlayer: player.account.createdBy.toString(),
        winner: scoreA === oracle.scoreA && scoreB === oracle.scoreB,
        withdrew: player.account.withdrew,
      };
    });

    return {
      id: room.toString(),
      bid: roomData.initAmount.toNumber(),
      oracle: oracle,
      playersCount: roomPlayers.length,
      roomPlayers,
    };
  }

  async getRooms(oracle: PublicKey): Promise<Room[]> {
    const oracleData = await this.getOracle(oracle);

    const rooms = await this.program.account.room.all([
      {
        memcmp: {
          offset: 8,
          bytes: oracle.toBase58(),
        },
      },
    ]);

    return rooms.map((room) => ({
      id: room.publicKey.toString(),
      bid: room.account.initAmount.toNumber(),
      playersCount: room.account.playersCount,
      oracle: oracleData,
    }));
  }

  async getHistory(player: PublicKey): Promise<Room[]> {
    const oraclesCache = {};

    const roomPlayersMeta = await this.program.account.roomsHistory.all([
      {
        memcmp: {
          offset: 8 + 32,
          bytes: player.toBase58(),
        },
      },
      {
        memcmp: {
          offset: 8 + 32 + 32 + 32 + 1 + 1,
          bytes: bs58.encode(Uint8Array.from([0])),
        },
      },
    ]);

    const data = roomPlayersMeta.map((history) => history.account.room);

    return Promise.all(
      roomPlayersMeta.map(async (history) => {
        const room = await this.program.account.room.fetch(
          history.account.room
        );
        const oracle =
          oraclesCache[room.oracle.toString()] ||
          (await this.getOracle(room.oracle));
        oraclesCache[room.oracle.toString()] = oracle;

        return {
          id: history.account.room.toString(),
          bid: room.initAmount.toNumber(),
          playersCount: room.playersCount,
          oracle: oracle,
          createdAt: history.account.createdAt.toNumber(),
        };
      })
    );
  }

  get provider() {
    const connection = new Connection(
      process.env.ANCHOR_PROVIDER_URL as string,
      "confirmed"
    );

    return new anchor.AnchorProvider(connection, this.wallet, {});
  }

  get wallet(): anchor.Wallet {
    return new anchor.Wallet(
      Keypair.fromSecretKey(
        Buffer.from(JSON.parse(process.env.DEJAVU_WALLET_KEYPAIR as string))
      )
    );
  }

  get program() {
    return new Program<DejavuFootball>(
      idl as unknown as DejavuFootball,
      this.DEJAVU_PROGRAM_ID,
      this.provider
    );
  }
}

export const dejavu = new Dejavu();
