import { existsSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { gdown } from "./gdown.mjs";
import { getId } from "./id.mjs";
import { unzip } from "./unzip.mjs";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.join(__filename), "../../../..");
const zip = path.join(root, "game.zip");

async function dl() {
  if (!existsSync(zip)) {
    const id = await getId();
    await gdown(id, zip);
  }
  rmSync(path.join(root, "public/assets"), { recursive: true, force: true });
  rmSync(path.join(root, "public/data"), { recursive: true, force: true });
  rmSync(path.join(root, "src/assets/game"), { recursive: true, force: true });
  await unzip(zip, root);
}

await dl();
