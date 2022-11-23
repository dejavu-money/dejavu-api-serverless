import response from "../response";
import { dejavu as dejavuProgram } from "../services/dejavu-program";

export async function handler(event) {
  const oracles = await dejavuProgram.getOracles();

  return response(oracles);
}
