import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { dataStudentGoal, dataStudentNow } from "./student";

describe("dataStudent", () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("should have correct default value", async () => {
    const now = dataStudentNow.use(0);
    const goal = dataStudentGoal.use(0);

    expect(now.lv).toBe(0);
    expect(now.star).toBe(1);
    expect(goal.lv).toBe(90);
    expect(goal.star).toBe(8);
  });

  it("should modify the value", async () => {
    const now = dataStudentNow.use(0);

    now.bond = 10;
    await nextTick();
    expect(now.bond).toBe(10);
  });
  it("... and save the value", async () => {
    const now = dataStudentNow.use(0);

    now.bond = 10;
  });
  it("... and change the export output", async () => {
    const res = dataStudentNow.export(1);
    expect(res.isOk()).toBeTruthy();
    const data = JSON.parse(res.unwrap());
    expect(data["0"]["bond"]).toBe(10);
  });

  it("should import correctly", async () => {
    const now = dataStudentNow.use(0);
    const res = dataStudentNow.export(1);
    expect(res.isOk()).toBeTruthy();
    const data = JSON.parse(res.unwrap());
    data["0"]["bond"] = 3;
    const json = JSON.stringify(data);
    const res2 = dataStudentNow.import(1, json);
    expect(res2.isOk()).toBeTruthy();
    res2.unwrap().perform();
    await nextTick();
    expect(now.bond).toBe(3);
  });

  localStorage.removeItem("[now]0");
  localStorage.removeItem("[goal]0");
});
