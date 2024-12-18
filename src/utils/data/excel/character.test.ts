import { default as LocalizeEtc } from "@/../public/data/DB/ExcelDB/LocalizeEtc.json";
import * as CharacterExcelTable from "@/../public/data/Excel/CharacterExcelTable.json";
import { TimeoutErr } from "@/utils/result/error";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from "vitest";
import { useExcelCharacter } from "./character";

const data: any = {
  "/data/Excel/CharacterExcelTable.json": CharacterExcelTable,
  "/data/DB/ExcelDB/LocalizeEtc.json": LocalizeEtc,
};

describe("useExcelCharacter", () => {
  beforeEach(() => {
    // Mock the fetch function before each test
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should map [10000].DevName to Aru_default", async () => {
    (fetch as Mock).mockImplementation((url) => {
      const mockData = data[url];
      if (mockData == null) return Promise.reject(new Error("404 Not Found"));
      else
        return Promise.resolve({
          ok: true,
          json: async () => mockData,
        });
    });

    const state = useExcelCharacter();
    while (state.value.isErr() && state.value.error instanceof TimeoutErr)
      await nextTick();
    expect(fetch).toHaveBeenCalledOnce();
    const res = state.value.andThen((map) => map.getResult(10000));
    expect(res.isErr()).toBeFalsy();
    const chara = res.unwrap();
    expect(chara).toBeDefined();
    expect(chara.DevName).toBe("Aru_default");
  });
});
