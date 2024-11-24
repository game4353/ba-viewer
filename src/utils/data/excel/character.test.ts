import {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from "vitest";
import { useExcelCharacter } from "./character";
import * as CharacterExcelTable from "@/../public/data/Excel/CharacterExcelTable.json";

const data: any = {
  "/data/Excel/CharacterExcelTable.json": CharacterExcelTable,
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
    while (state.value == null) await nextTick();
    expect(fetch).toHaveBeenCalledOnce();
    const res = state.value.andThen((map) => map.getResult(10000));
    expect(res.isErr()).toBeFalsy();
    const chara = res.unwrap();
    expect(chara).toBeDefined();
    expect(chara.DevName).toBe("Aru_default");
  });
});
