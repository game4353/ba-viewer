import { defineStore } from "pinia";

export const useStudentFilterStore = defineStore("studentFilter", {
  state: () => ({
    search: "",
  }),
});

export const useFurnitureFilterStore = defineStore("furnitureFilter", {
  state: () => ({
    search: "",
  }),
});

export const useCharacterFilterStore = defineStore("characterFilter", {
  state: () => ({
    search: "",
  }),
});
