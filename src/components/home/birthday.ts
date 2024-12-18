import { useStudents, type CStudent } from "@/components/student/student";
import { range } from "@/utils/misc";
import { Result, asResult } from "@/utils/result/result";

export const useNextBd = () =>
  asResult(
    useStudents(true).value.andThen((students) =>
      Result.all(students.map((s) => s.useBirthday())).map((bds) =>
        findNext(students, bds),
      ),
    ),
  );

function findNext(students: CStudent[], bds: (Date | undefined)[]) {
  const out = [];
  const date = new Date();
  for (const x of range(0, 365)) {
    for (let i = 0; i < bds.length; i++) {
      const bd = bds[i];
      if (date.getDate() === bd?.getDate() && date.getMonth() === bd.getMonth())
        out.push(students[i]);
    }
    date.setDate(date.getDate() + 1);
    if (x > 5 && out.length > 1) break;
  }
  return out;
}
