import { gdown } from "./gdown.mjs";
import { fileURLToPath } from "url";
import path from "path";
import { unzip } from "./unzip.mjs";
import { getId } from "./id.mjs";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.join(__filename), "../../../..");
const zip = path.join(root, "game.zip");

async function dl() {
  const id = await getId();
  await gdown(id, zip);
  await unzip(zip, root);
}

await dl();
