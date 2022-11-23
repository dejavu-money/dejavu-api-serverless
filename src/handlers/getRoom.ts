import { PublicKey } from "@solana/web3.js";
import response from "../response";
import { dejavu as dejavuProgram } from "../services/dejavu-program";
import { sleep } from "../utils";

export async function handler(event) {
  let retry = 0;
  while (retry < 5) {
    try {
      const room = await dejavuProgram.getRoom(
        new PublicKey(event.pathParameters.id)
      );
      return response(room);
    } catch (_) {
      sleep(1000);
      retry++;
    }
  }

  return response({ message: "not found" }, 404);
}
