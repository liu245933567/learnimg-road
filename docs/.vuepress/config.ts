import path from "path";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端文档",
  base: "/learning-road/",
  description: "专注于技术的分享和日常开发流程的记录",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  theme: defaultTheme({
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: [
            "/guide/README.md",
            "/guide/vue.md",
            "/guide/rem.md",
            "/guide/static.md",
          ],
        },
      ],
      "/css/": [
        {
          text: "css相关",
          children: [
            "/css/README.md",
            "/css/bem.md"
          ],
        },
      ],
    },
    navbar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
    ],
  }),
});
