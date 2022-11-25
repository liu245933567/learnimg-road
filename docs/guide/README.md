# 介绍

## 前提

[学习 html](https://www.runoob.com/html/html-tutorial.html) -> [学习 css](https://www.runoob.com/css/css-tutorial.html) -> [学习 js](https://www.runoob.com/js/js-tutorial.html)

[es6 语法使用](https://es6.ruanyifeng.com/)

## 前端工程化

### Node.js

[Node.js](http://nodejs.cn/)是一个 Javascript 运行环境(runtime environment)，发布于 2009 年 5 月，由 Ryan Dahl 开发，实质是对 Chrome V8 引擎进行了封装。Node.js 对一些特殊用例进行优化，提供替代的 API，使得 V8 在非浏览器环境下运行得更好。 V8 引擎执行 Javascript 的速度非常快，性能非常好。Node.js 是一个基于 Chrome JavaScript 运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。Node.js 使用事件驱动， 非阻塞 I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。

Node.js 是我们 web 端开发的基础，也是开发者必须掌握的技能

### 包管理工具

#### Npm

[npm](https://www.npmjs.cn/) 为你和你的团队打开了连接整个 JavaScript 天才世界的一扇大门。它是世界上最大的软件注册表，每星期大约有 30 亿次的下载量，包含超过 600000 个 包（package） （即，代码模块）。来自各大洲的开源软件开发者使用 npm 互相分享和借鉴。包的结构使您能够轻松跟踪依赖项和版本

> 我们通过 npm install xxx 安装包的过程会特别慢，或者安装半天突然报错。这是因为 npm 镜像地址在国外，所以访问会慢有的时候还访问不到, 我们可以通过设置淘宝镜像来解决问题, 淘宝镜像同步频率目前为 10 分钟一次以保证尽量与官方服务同步。

淘宝镜像源配置

```cmd
npm config set registry https://registry.npmmirror.com
```

#### Yarn

[Yarn](https://www.yarnpkg.cn/) 也是一个包管理工具，可以用来代替 npm。对比 npm 有如下区别：

- 速度方面：npm 是按照队列执行每个包，必须要等到当前包安装后才能继续安装后面的包。而 Yarn 则是同步执行所有任务，提高了性能。
- 安装版本统一：Yarn 默认会生成这样的锁文件，npm 要通过 shrinkwrap 命令生成 npm-shrinkwrap.json 文件，只有当这个文件存在的时候，软件包版本信息才会被记录和更新。
- 更简洁的输出：npm 的输出信息冗长，Yarn 则简洁很多。
  yarn 安装

#### Pnpm

[pnpm](https://pnpm.io/zh)作为一款包管理工具，与前两款相比 节约磁盘空间并提升安装速度

### 开发工具

#### Webpack

[webpack](https://webpack.docschina.org/concepts/)在本质上， 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。搭配 [webpack-dev-server](https://webpack.docschina.org/api/webpack-dev-server/#root) 可以作为一个开发服务器，进行快速模块化开发

> 视频教程

[从零搭建 Vue 脚手架，基于 webpack 5【我觉得我讲明白了系列】](https://www.bilibili.com/video/BV1234y1D7Bv/?share_source=copy_web&vd_source=53f433cff22461ff598466403daf833e)

[webpack DevServer 开发服务器：设置端口号、内网 IP 地址、自动用浏览器打开等](https://www.bilibili.com/video/BV1db4y1a7HA/?share_source=copy_web&vd_source=53f433cff22461ff598466403daf833e)

#### Vite

[Vite](https://cn.vitejs.dev/guide/) 是一种新型前端构建工具，能够显著提升前端开发体验。在作为一个开发服务器的同时，也包含一套构建指令， 可输出用于生产环境的高度优化过的静态资源

## IDE 设置

> Vscode 天下无敌！

### 插件安装

| 名称                          | 介绍                                     |
| ----------------------------- | ---------------------------------------- |
| Prettier                      | 代码格式化工具                           |
| ESLint                        | 代码规范工具                             |
| Auto Close Tag                | 自动补全结束标签                         |
| Auto Rename Tag               | 重命名一个开始标签时，会自动改写结束标签 |
| Chinese                       | 汉化插件                                 |
| Code Runner                   | 代码执行插件                             |
| DotENV                        | 解析.env 文件                            |
| Vue Language Features (Volar) | vue 项目必备插件                         |
| px2rem                        | 添加 px 转 rem 代码补全                  |
| Git History                   | git 历史查看                             |
| GitLens                       | git 工具包                               |
| git-commit-plugin             | git 提交插件                             |
| Live Server                   | 本地静态资源服务                         |
