import { copyFileSync, cpSync, lstatSync } from "fs";
import { cropAtlas } from "./crop/index.js";
import path from "path";
import { AssetFolder, PngFolder } from "./path.js";

function copyPaste(fromThis: string, toThisFolder: string) {
  const s = lstatSync(fromThis);
  const fn = path.basename(fromThis);
  const dest = path.resolve(toThisFolder, fn);
  if (s.isFile()) {
    copyFileSync(fromThis, dest);
  } else if (s.isDirectory()) {
    cpSync(fromThis, dest, { recursive: true });
  } else {
    throw new Error(fromThis);
  }
}

async function main() {
  await cropAtlas();
  copyPaste(PngFolder + `/Combat`, AssetFolder + "/Atlas");
  copyPaste(PngFolder + `/Common`, AssetFolder + "/Atlas");
  copyPaste(PngFolder + `/Event`, AssetFolder + "/Atlas");
}

function test() {}

main()
  .then(() => {
    console.log("done");
  })
  .catch((e) => {
    console.log(e);
  });
test();
