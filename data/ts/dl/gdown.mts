import fs from "fs";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

export async function gdown(id: string, outputPath: string) {
  const jar = new CookieJar();
  const client = wrapper(axios.create({ jar }));
  const user_agent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36";
  const url = "https://drive.google.com/uc?export=download";

  const res = await client.get(url, {
    params: { id },
  });
  const uuid = (res.data as string)
    .match(/<input type="hidden" name="uuid" value="([\w-]+)">/)
    ?.at(1);

  const res2 = await client.get(url, {
    params: { id, confirm: "t", uuid },
    headers: {
      "User-Agent": user_agent,
    },
    responseType: "stream",
  });
  const stream = fs.createWriteStream(outputPath, { flags: "w" });
  return await new Promise((resolve, reject) => {
    res2.data.pipe(stream);
    stream.on("error", reject);
    stream.on("finish", resolve);
  });
}
