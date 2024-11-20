import {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from "vitest";
import { useExcelCharacterStat } from "./character";

describe("useExcelCharacterStat", () => {
  beforeEach(() => {
    // Mock the fetch function before each test
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should map [10000].MaxHP1 to 2236", async () => {
    const mockData = {
      DataList: [
        {
          CharacterId: 10000,
          MaxHP1: 2236,
        },
      ],
    };
    (fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const state = useExcelCharacterStat();
    while (state.value == null) await nextTick();
    expect(fetch).toHaveBeenCalledOnce();
    const res = state.value.andThen((map) => map.getResult(10000));
    expect(res.isErr()).toBeFalsy();
    expect(res.unwrap()).toBeDefined();
    expect(res.unwrap().MaxHP1).toBe(2236);
  });
});
