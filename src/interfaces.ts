export interface Oracle {
  id: string;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  endsAt: number;
  closedAt: number;
  isFinished?: boolean;
}

export interface Bid {
  bid: number;
  scoreA: number;
  scoreB: number;
  idGame: string;
}

export interface Room {
  id: string;
  bid: number;
  oracle: Oracle;
  playersCount: number;
  roomPlayers?: Array<RoomPlayer>;
  createdAt?: number;
}

export interface RoomPlayer {
  id: string;
  scoreA: number;
  scoreB: number;
  idPlayer: string;
  winner: boolean;
  withdrew: boolean;
}
