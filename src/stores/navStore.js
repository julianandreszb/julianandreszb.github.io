import { defineStore } from "pinia";

export const useNavStore = defineStore({
  id: "navStore",
  state: () => ({
    navBarItemClass:
      "h-8 px-4 text-lg bg-dark-blue text-gray-custom-100 cursor-pointer hover:border-b-2 hover:border-b-green-cyan hover:text-green-cyan",
  }),
  getters: {},
  actions: {},
});
