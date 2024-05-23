import { gdown } from "./gdown.mjs";
import { fileURLToPath } from "url";
import path from "path";
import { unzip } from "./unzip.mjs";
import { getId } from "./id.mjs";
import { rmSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.join(__filename), "../../../..");
const zip = path.join(root, "game.zip");

async function dl() {
  if (!existsSync(zip)) {
    const id = await getId();
    await gdown(id, zip);
  }
  rmSync(path.join(root, "public/game"), { recursive: true, force: true });
  rmSync(path.join(root, "src/assets/game"), { recursive: true, force: true });
  await unzip(zip, root);
}

await dl();
