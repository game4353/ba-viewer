import {
  CharaData,
  getAllCharaDataV0,
  setAllCharaDataV0,
  setCharaDataV0,
} from "./character";
import { unreachable } from "@/utils/misc";
import { parseLoginSync } from "./schema/loginSync";

/*
class PartyData {
  name?: string;
  // use chara ID, minus means friend
  striker?: number[];
  support?: number[];
  constructor(name?: string, striker?: number[], support?: number[]) {
    this.name = name;
    this.striker = striker;
    this.support = support;
  }
}
type Items = Partial<Record<number, number>>;
*/

export function importLoginSync(json: string) {
  const obj = parseLoginSync(json);

  const weapons = new Map(
    obj.CharacterListResponse.WeaponDBs.map((d) => [
      d.BoundCharacterServerId,
      d,
    ]),
  );
  const gears = new Map(
    obj.CharacterGearListResponse.GearDBs.map((d) => [
      d.BoundCharacterServerId,
      d,
    ]),
  );
  const equips = new Map(
    obj.EquipmentItemListResponse.EquipmentDBs.map((d) => [
      d.ServerId ?? -1,
      d,
    ]),
  );

  obj.CharacterListResponse.CharacterDBs.forEach((d) => {
    const g = gears.get(d.ServerId);
    const w = weapons.get(d.ServerId);
    const c = CharaData.fromObj({
      lv: d.Level,
      star: d.StarGrade + (w?.StarGrade ?? 0),
      weapon: w?.Level ?? 0,
      bond: d.FavorRank,
      skill0: d.ExSkillLevel,
      skill1: d.PublicSkillLevel,
      skill2: d.PassiveSkillLevel,
      skill3: d.ExtraPassiveSkillLevel,
      gear1: equips.get(d.EquipmentServerIds[0])?.Tier ?? 0,
      gear1lv: equips.get(d.EquipmentServerIds[0])?.Level ?? 0,
      gear2: equips.get(d.EquipmentServerIds[1])?.Tier ?? 0,
      gear2lv: equips.get(d.EquipmentServerIds[1])?.Level ?? 0,
      gear3: equips.get(d.EquipmentServerIds[2])?.Tier ?? 0,
      gear3lv: equips.get(d.EquipmentServerIds[2])?.Level ?? 0,
      gear0: g?.Tier ?? 0,
      break1: d.PotentialStats["1"],
      break2: d.PotentialStats["2"],
      break3: d.PotentialStats["3"],
    });
    setCharaDataV0(d.UniqueId, "now", c);
  });
}

export function importJustin(json: string) {
  function dict2char(d: any) {
    return CharaData.fromObj({
      lv: d.level,
      star: d.star + d.ue,
      weapon: d.ue_level,
      bond: d.bond,
      skill0: d.ex,
      skill1: d.basic,
      skill2: d.passive,
      skill3: d.sub,
      gear1: d.gear1,
      gear2: d.gear2,
      gear3: d.gear3,
    });
  }

  const obj = JSON.parse(json);
  if (obj.exportVersion === 2) {
    obj.characters.forEach((o: any) => {
      setCharaDataV0(o.id, "now", dict2char(o.current));
      setCharaDataV0(o.id, "goal", dict2char(o.target));
    });
  } else {
    unreachable();
  }
}

export function importVx(json: string) {
  const obj = JSON.parse(json);
  if (obj.version === 0) return importV0(obj);
  unreachable();
}

function importV0(obj: any) {
  setAllCharaDataV0(obj.characters);
}

export function exportV0() {
  const data = {
    version: 0,
    characters: getAllCharaDataV0(),
  };
  return JSON.stringify(data);
}
