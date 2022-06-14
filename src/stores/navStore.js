import { defineStore } from "pinia";

export const useNavStore = defineStore({
  id: "navStore",
  state: () => ({
    navBarItemClass:
      "h-8 px-2 text-2xl bg-dark-blue text-slate-300 cursor-pointer hover:border-b-2 hover:border-b-emerald-400 hover:text-emerald-400",
  }),
  getters: {},
  actions: {},
});
