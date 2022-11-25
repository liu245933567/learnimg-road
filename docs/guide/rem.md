# 单位适配

## rem 布局

`rem` 是 CSS3 新增的一个相对单位，它以 HTML 元素的 font-size 为比例：

```css
/* 设置html元素的字体大小为 75px，即 1rem = 75px */
html {
  font-size: 75px;
}
/* 设置box元素宽 750px，10rem = 750px */
.box {
  width: 10rem; /* 160px */
}
```

修改 HTML 元素的字体大小可以成比例的调整以 rem 为单位的属性，通过这一个特性，我们可以实现将视窗按一定比例划分为一份一份的，当页面内元素刚好分完所有的份数，页面内容即充满整个视窗且无横向滚动条。

以宽度 750 像素的设计稿为例，有两个元素，一个元素占 550 个像素，另一个占 750 个像素：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<div class="w-550px"></div>
<div class="full"></div>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .w-550px {
    width: 550rem;
    height: 100px;
    background-color: rgb(209, 255, 240);
  }
  .full {
    width: 750rem;
    height: 100px;
    background-color: rgb(195, 200, 199);
  }
</style>
<script>
  function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改
    const scale = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = scale + "px";
  }
  setRem();
  window.onresize = setRem;
</script>
```

页面伸缩，网页布局也会进行伸缩。运行结果如下：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5811a9addd414a3e93eb23cb804a4c4f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 项目设置

#### 安装 postcss-plugin-px2rem

```cmd
npm i postcss-pxtorem --save-dev
```

#### 使用 postcss-plugin-px2rem

```js
// /postcss.config.js
module.exports = {
  plugins: [
    require("postcss-plugin-px2rem")({
      rootValue: 37.5, // 换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
      // unitPrecision: 5, //允许REM单位增长到的十进制数字。
      // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
      // propBlackList: ['font-size', 'border'], //黑名单
      // exclude: /(src)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      // selectorBlackList: [], //要忽略并保留为px的选择器
      // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
      // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
      mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
      minPixelValue: 1, //设置要替换的最小像素值(3px会被转rem)。 默认 0
    }),
  ],
};
```

#### 动态设置 rem 的值

```js
(function (doc, win) {
  const docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = "37.5px";
      } else {
        docEl.style.fontSize = 75 * (clientWidth / 750) + "px";
      }
      if (doc.body.style.display != "block") {
        doc.body.style.display = "block";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  recalc();
})(document, window);
```

### rem 转换成 px

在 flycua-m 项目中，我们不再使用 rem 作为适配单位，输入 rem 数值 计算出 px 数值

<RemToPx />

## 相关资料

[移动端适配的 5 种方案](https://juejin.cn/post/6953091677838344199#heading-13)
