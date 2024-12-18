import { Ok, err2 } from "@/utils/result/result";
import { z } from "zod";
import { importAll } from "../all";

const ItemDB = z.object({
  Type: z.number(),
  ServerId: z.number(),
  UniqueId: z.number(),
  StackCount: z.number(),
});
const ItemList = z.object({
  ItemDBs: ItemDB.array(),
});

function parseItemList(packet: string) {
  try {
    const obj = JSON.parse(packet);
    const list = ItemList.parse(obj); // Throws if validation fails
    const map = new Map();
    list.ItemDBs.forEach((o) => {
      map.set(`${o.Type},${o.UniqueId}`, { amount: o.StackCount });
    });
    const parcel = JSON.stringify(Object.fromEntries(map));

    return Ok(JSON.stringify({ version: 1, parcel }));
  } catch (e) {
    return err2(e);
  }
}
export function importItemList(packet: string) {
  return parseItemList(packet).andThen(importAll);
}
