import { cache, Excel, fatal } from "../../util.js";

export class Localize {
  @cache
  static getLocalizeEtc(): Partial<Record<number, TLocalizeEtc>> {
    // const a: TLocalizeEtc[] = Excel.table("LocalizeEtcExcel");
    const b: TLocalizeEtcExcel[] = Excel.db("LocalizeEtcExcel");

    const o = Object.fromEntries(b.map((v) => [v.Key, v.Bytes]));
    // a.forEach((v) => {
    //   if (String(v.Key) in o) {
    //     assert.deepStrictEqual(v, o[String(v.Key)]);
    //   } else {
    //     o[String(v.Key)] = v;
    //   }
    // });
    return o;
  }

  static transEtc(id: number) {
    return this.getLocalizeEtc()[id] ?? fatal(`Unknown localize etc id: ${id}`);
  }
}
