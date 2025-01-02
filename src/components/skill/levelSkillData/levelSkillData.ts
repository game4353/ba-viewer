import { MapResult } from "@/utils/data/excel";
import { useRemoteLevelSkillData } from "@/utils/data/excel/remote";
import { cache } from "@/utils/misc";
import { TimeoutErr } from "@/utils/result/error";
import { asResult, Err } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import type { SkillLogicType } from "../skillLogic/schema";

const useLevelSkillMap = cache((name: string) => {
  const state = useRemoteLevelSkillData(name);
  return computed(() =>
    state.value?.map(
      (arr): MapResult<string, ReadonlyDeep<SkillLogicType>> =>
        new MapResult(arr.map((o) => [o.SkillDataKey, o]))
          .setTitle("LevelSkillData-" + name)
          .setKeyName("SkillDataKey"),
    ),
  );
});

function findKey(key: string, filename: string) {
  return asResult(
    useLevelSkillMap(filename).value.andThen((map) => map.getResult(key)),
  );
}

function tmp1(e: Error, key: string, name: string) {
  return e instanceof TimeoutErr ? Err(e) : findKey(key, name);
}

export function getLevelSkillData(key: string) {
  return findKey(key, "Student")
    .orElse2((e) => tmp1(e, key, "Enemy"))
    .orElse2((e) => tmp1(e, key, "TimeAttack"))
    .orElse2((e) => tmp1(e, key, "Challenge"))
    .orElse2((e) => tmp1(e, key, "Common"))
    .orElse2((e) => tmp1(e, key, "Manual"))
    .orElse2((e) => tmp1(e, key, "NPC"))
    .orElse2((e) => tmp1(e, key, "Ground"))
    .orElse2((e) => tmp1(e, key, "TSS"))
    .orElse2((e) => tmp1(e, key, "TestCharacter"));
}
