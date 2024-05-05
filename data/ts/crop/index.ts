import fs from "fs";
import sharp from "sharp";
import { PngFolder } from "../path.js";

const path = "../extracted/BundleFiles/Assets/_MX/UIs/Atlas";

export async function cropAtlas() {
  return await Promise.all(
    fs
      .readdirSync(path)
      .filter((fn) => fn.endsWith(".json"))
      .map((fn) => {
        const name = fn.slice(0, fn.length - 5);
        const output = PngFolder + "/" + name;
        if (!fs.existsSync(output)) fs.mkdirSync(output);

        return (
          JSON.parse(fs.readFileSync(`${path}/${fn}`, "utf-8"))
            .mSprites as any[]
        ).map((o) =>
          sharp(`${path}/${name}.png`)
            .extract({
              left: o.x,
              top: o.y,
              width: o.width,
              height: o.height,
            })
            .extend({
              top: o.borderTop,
              bottom: o.borderBottom,
              left: o.borderLeft,
              right: o.borderRight,
              background: { r: 0, g: 0, b: 0, alpha: 0 },
            })
            .toFile(`${output}/${o.name}.png`),
        );
      })
      .flat(1),
  );
}
