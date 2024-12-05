import { dataStudentGoal, dataStudentNow } from "./student";

export function useCharaStore(cid: number) {
  return {
    now: () => dataStudentNow.use(cid),
    goal: () => dataStudentGoal.use(cid),
  };
}
