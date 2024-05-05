// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

type Chara = {
  // 0~90
  lv: number;
  // 1~8
  star: number;
  // 0~50
  weapon: number;
  // 0~100
  bond: number;
  // 1~5
  skill0: number;
  // 1~10
  skill1: number;
  // 0~10
  skill2: number;
  // 0~10
  skill3: number;
  // 0~9
  gear1: number;
  // 0~65
  gear1lv: number;
  // 0~9
  gear2: number;
  // 0~65
  gear2lv: number;
  // 0~9
  gear3: number;
  // 0~65
  gear3lv: number;
  // 0~2
  gear0: number;
};

type Party = {
  name: string;
  // use chara ID, minus means friend
  striker: number[];
  support: number[];
};

type Items = Partial<Record<number, number>>;

export const usePersonalStore = defineStore("personal", () => {
  const charas = ref({} as Partial<Record<number, Chara>>);

  return {};
});
