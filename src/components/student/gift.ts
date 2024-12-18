import type {
  ItemExcel,
  ItemExcelTable,
  Tag,
} from "@/assets/game/types/flatDataExcel";
import { MapResult, useExcel } from "@/utils/data/excel";
import { useExcelCharacterAcademyTags } from "@/utils/data/excel/character";
import { cache, range } from "@/utils/misc";
import { NotImplementErr } from "@/utils/result/error";
import { Err, Ok, Result, asResult } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";

const useExcelItemTag = cache(() => {
  const table = useExcel<ItemExcelTable>("ItemExcelTable");
  return computed(() =>
    asResult(
      table.value.map((table) => {
        const map = new Map<Tag, ItemExcel[]>();
        table.DataList.forEach((o) => {
          o.Tags.forEach((t) => {
            if (!map.has(t)) map.set(t, []);
            map.get(t)!.push(o);
          });
        });

        const map2 = new MapResult<Tag, ReadonlyDeep<ItemExcel[]>>()
          .setTitle("ItemExcelTable")
          .setKeyName("Tag");
        for (const [k, v] of map.entries()) {
          map2.set(k, readonly(v));
        }
        return map2;
      }),
    ),
  );
});

function countFavor() {
  const map1 = useExcelCharacterAcademyTags().value;
  const map2 = useExcelItemTag().value;
  return Result.all([map1, map2]).map(([map1, map2]) => {
    const studentMap = new MapResult<number, MapResult<number, number>>()
      .setTitle("student-map")
      .setKeyName("student");
    const giftMap = new MapResult<number, MapResult<number, number>>()
      .setTitle("gift-map")
      .setKeyName("gift");

    for (const [sid, v] of map1.entries()) {
      studentMap.set(
        sid,
        new MapResult<number, number>()
          .setTitle("student-gift-map")
          .setKeyName("gift"),
      );
      const tags = v.FavorItemTags.concat(v.FavorItemUniqueTags);
      for (const tag of tags) {
        map2.get(tag)?.forEach((item) => {
          const gid = item.Id;
          giftMap.trySet(
            gid,
            new MapResult<number, number>()
              .setTitle("gift-student-map")
              .setKeyName("student"),
          );
          const g = giftMap.get(gid)!.get(sid) ?? 0;
          giftMap.get(gid)!.set(sid, g + 1);
          const s = studentMap.get(sid)!.get(gid) ?? 0;
          studentMap.get(sid)!.set(gid, s + 1);
        });
      }
    }
    return { studentMap, giftMap };
  });
}
const useFavor = cache(() => computed(countFavor));

export const useGiftFavor = cache((gid: number) =>
  computed(() =>
    asResult(
      useFavor()
        .value.andThen(({ giftMap }) => giftMap.getResult(gid))
        .map((map) => [...map.keys()]),
    ),
  ),
);
export const useStudentFavor = cache((studentId: number) =>
  computed(() =>
    asResult(
      useFavor()
        .value.andThen(({ studentMap }) => studentMap.getResult(studentId))
        .map((map) => [...map.keys()]),
    ),
  ),
);

export const useStudentGiftFavor = cache((studentId: number, giftId: number) =>
  computed(() =>
    asResult(
      useFavor()
        .value.andThen(({ studentMap }) => studentMap.getResult(studentId))
        .andThen((giftMap) => {
          const lv = Math.min(2, giftMap.get(giftId) ?? 0);
          if (5998 <= giftId && giftId <= 5999) return Ok(60);
          if (5996 <= giftId && giftId <= 5997) return Ok(240);
          if (5100 <= giftId && giftId <= 5112) return Ok([120, 180, 240][lv]);
          if (5000 <= giftId && giftId <= 5034) return Ok([20, 40, 60][lv]);
          return Err(NotImplementErr.from(`Gift ${giftId}`));
        }),
    ),
  ),
);

export function getGiftIds() {
  return [...range(5000, 5035), ...range(5100, 5113), ...range(5996, 6000)];
}
