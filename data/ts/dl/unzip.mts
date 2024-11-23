import fs from "fs";
import path from "path";
import yauzl from "yauzl";

// Function to unzip a zip file without overwriting existing folders
export function unzip(zipFilePath: string, outputDir: string) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipFilePath, { lazyEntries: true }, (err, zipfile) => {
      if (err) {
        reject(err);
        return;
      }

      zipfile.on("entry", (entry) => {
        const extractPath = path.join(outputDir, entry.fileName);
        if (fs.existsSync(extractPath)) {
          // If the file already exists, skip extraction
          zipfile.readEntry();
          return;
        }

        if (/\/$/.test(entry.fileName)) {
          // Directory file names end with '/'
          fs.mkdirSync(extractPath, { recursive: true });
          zipfile.readEntry();
        } else {
          // Ensure parent directory exists
          const parentDir = path.dirname(extractPath);
          fs.mkdirSync(parentDir, { recursive: true });

          // Extract file
          zipfile.openReadStream(entry, (err, readStream) => {
            if (err) {
              reject(err);
              return;
            }
            readStream.on("end", () => zipfile.readEntry());
            readStream.pipe(fs.createWriteStream(extractPath));
          });
        }
      });

      zipfile.on("error", (err) => reject(err));
      zipfile.on("close", () => resolve(0));
      zipfile.readEntry();
    });
  });
}
