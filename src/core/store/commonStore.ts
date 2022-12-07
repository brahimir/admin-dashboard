import { defineStore } from "pinia";

export const useCommonStore = defineStore("culture", {
  // ! State
  state: () => ({
    sampleValue: "",
  }),

  // * Getters
  getters: {
    getSampleValue: (state) => state.sampleValue,
  },

  // * Actions
  actions: {
    setSampleValue(newValue: string) {
      if (!newValue || this.sampleValue === newValue) return;
    },
  },
});
