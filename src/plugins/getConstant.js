import constants from "@/assets/constants";

export default {
  install: (app) => {
    app.config.globalProperties.$getConstant = (key) => {
      return constants[key];
    };
  },
};
