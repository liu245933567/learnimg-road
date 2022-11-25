import * as ElIcons from "@element-plus/icons-vue";
import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus);
    Object.keys(ElIcons).forEach((key) => {
      app.component(key, ElIcons[key]);
    });
  },
  rootComponents: [],
});
