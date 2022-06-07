import { createApp } from "vue";
import { createPinia } from "pinia";
import getConstant from "@/plugins/getConstant";
import "./index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(getConstant);
app.use(createPinia());
app.use(router);

app.mount("#app");
