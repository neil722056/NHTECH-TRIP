
import { callAPI } from "./api.js";

export async function loadState() {
  return await callAPI("?path=state");
}
