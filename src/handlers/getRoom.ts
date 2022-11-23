import { PublicKey } from "@solana/web3.js";
import response from "../response";
import { dejavu as dejavuProgram } from "../services/dejavu-program";

export async function handler (event) {
  const room = await dejavuProgram.getRoom(new PublicKey(event.pathParameters.id));
  
  return response(room);
}
