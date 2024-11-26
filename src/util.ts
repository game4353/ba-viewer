// @ts-ignore
import solver from "javascript-lp-solver";

export class StageDrop {
  stamina: number;
  item1: number;
  item2: number;
  item3: number;

  constructor(stamina: number, item1: number, item2: number, item3: number) {
    this.stamina = stamina;
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
  }

  toObj() {
    return {
      stamina: Math.abs(this.stamina),
      item1: this.item1,
      item2: this.item2,
      item3: this.item3,
    };
  }
}

// TODO: /** place the preferred stage the first */ binary search
export function calc<T extends Record<string, StageDrop>>(
  stages: T,
  target1: number,
  target2: number,
  target3: number,
): Partial<Record<keyof T, number>> & {
  bounded: boolean;
  feasible: boolean;
  isIntegral: boolean;
  result: number;
} {
  const constraints = {
    item1: { min: target1 },
    item2: { min: target2 },
    item3: { min: target3 },
  };
  const variables = Object.fromEntries(
    Object.entries(stages).map(([k, v]) => [k, v.toObj()]),
  );
  const ints = Object.fromEntries(Object.keys(stages).map((k) => [k, 1]));
  const model = {
    optimize: "stamina",
    opType: "min",
    constraints,
    variables,
    ints,
  };
  return solver.Solve(model);
}

// const stages = {
//   Q9: new StageDrop(20, 8, 33, 34),
//   Q10: new StageDrop(20, 10, 54, 11),
//   Q11: new StageDrop(20, 10, 11, 55),
//   Q12: new StageDrop(20, 69, 0, 0),
// };
// const res = calc(stages, 30960, 10295, 12850);
// console.log(res);
