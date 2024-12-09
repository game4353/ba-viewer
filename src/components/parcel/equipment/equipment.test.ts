import * as EquipmentLevelExcelTable from "@/../public/data/Excel/EquipmentLevelExcelTable.json";
import { EquipmentCategory } from "@/assets/game/types/flatDataExcel";
import { TimeoutErr } from "@/utils/error";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from "vitest";
import { equipmentExp } from "./equipment";

const data: any = {
  "/data/Excel/EquipmentLevelExcelTable.json": EquipmentLevelExcelTable,
};

describe("equipmentExp", () => {
  beforeEach(() => {
    // Mock the fetch function before each test
    global.fetch = vi.fn();

    (fetch as Mock).mockImplementation((url) => {
      const mockData = data[url];
      if (mockData == null) return Promise.reject(new Error("404 Not Found"));
      else
        return Promise.resolve({
          ok: true,
          json: async () => mockData,
        });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return 2041 for (Shoes, 1, 1, 9, 65, 90)", async () => {
    const state = computed(() =>
      equipmentExp(EquipmentCategory.Shoes, 1, 1, 9, 65, 90),
    );
    while (state.value.isErr() && state.value.error instanceof TimeoutErr)
      await nextTick();

    expect(state.value.unwrap()).toBe(2041);
  });
  it("should return 2041 for (Bag, 1, 1, 9, 65, 90)", async () => {
    const state = computed(() =>
      equipmentExp(EquipmentCategory.Bag, 1, 1, 9, 65, 90),
    );
    while (state.value.isErr() && state.value.error instanceof TimeoutErr)
      await nextTick();

    expect(state.value.unwrap()).toBe(2041);
  });
  it("should return 2041 for (Hat, 1, 1, 9, 65, 90)", async () => {
    const state = computed(() =>
      equipmentExp(EquipmentCategory.Hat, 1, 1, 9, 65, 90),
    );
    while (state.value.isErr() && state.value.error instanceof TimeoutErr)
      await nextTick();

    expect(state.value.unwrap()).toBe(2041);
  });
});
