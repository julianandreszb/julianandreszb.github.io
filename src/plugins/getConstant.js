const constants = {
  SplashMessage: "Welcome to my page",
};

export default {
  install: (app) => {
    app.config.globalProperties.$getConstant = (key) => {
      return constants[key];
    };
  },
};
