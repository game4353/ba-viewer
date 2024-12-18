import { Result } from "@/utils/result/result";
import { dataParcel } from "./parcel";
import { dataParty } from "./party";
import { dataStudentGoal, dataStudentNow } from "./student";

export function exportAll() {
  const version = 1;
  return Result.all([
    dataStudentNow.export(version),
    dataStudentGoal.export(version),
    dataParcel.export(version),
    dataParty.export(version),
  ]).map(([now, goal, parcel, party]) =>
    JSON.stringify({
      version,
      now,
      goal,
      parcel,
      party,
    }),
  );
}

export function importAll(json: string) {
  const obj = JSON.parse(json);
  const version = obj["version"];

  const res = [];
  if ("now" in obj) res.push(dataStudentNow.import(version, obj["now"]));
  if ("goal" in obj) res.push(dataStudentGoal.import(version, obj["goal"]));
  if ("parcel" in obj) res.push(dataParcel.import(version, obj["parcel"]));
  if ("party" in obj) res.push(dataParty.import(version, obj["party"]));
  return Result.all(res).map((arr) => arr.forEach(({ perform }) => perform()));
}
