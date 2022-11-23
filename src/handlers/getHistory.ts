import { PublicKey } from "@solana/web3.js";
import response from "../response";
import { dejavu as dejavuProgram } from "../services/dejavu-program";
export async function handler(event) {
  const rooms = await dejavuProgram.getHistory(
    new PublicKey(event.pathParameters.id)
  );

  return response(rooms);
}
