import{_ as o,r as s,o as c,c as l,d as a,a as n,b as t,e as i}from"./app.b6fa9576.js";const u={},r=i(`<h1 id="单位适配" tabindex="-1"><a class="header-anchor" href="#单位适配" aria-hidden="true">#</a> 单位适配</h1><h2 id="rem-布局" tabindex="-1"><a class="header-anchor" href="#rem-布局" aria-hidden="true">#</a> rem 布局</h2><p><code>rem</code> 是 CSS3 新增的一个相对单位，它以 HTML 元素的 font-size 为比例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 设置html元素的字体大小为 75px，即 1rem = 75px */</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 75px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 设置box元素宽 750px，10rem = 750px */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span> <span class="token comment">/* 160px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 HTML 元素的字体大小可以成比例的调整以 rem 为单位的属性，通过这一个特性，我们可以实现将视窗按一定比例划分为一份一份的，当页面内元素刚好分完所有的份数，页面内容即充满整个视窗且无横向滚动条。</p><p>以宽度 750 像素的设计稿为例，有两个元素，一个元素占 550 个像素，另一个占 750 个像素：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-550px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.w-550px</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 550rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>209<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.full</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 750rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>195<span class="token punctuation">,</span> 200<span class="token punctuation">,</span> 199<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改</span>
    <span class="token keyword">const</span> scale <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> <span class="token number">750</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> scale <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> setRem<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面伸缩，网页布局也会进行伸缩。运行结果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5811a9addd414a3e93eb23cb804a4c4f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p><h3 id="项目设置" tabindex="-1"><a class="header-anchor" href="#项目设置" aria-hidden="true">#</a> 项目设置</h3><h4 id="安装-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#安装-postcss-plugin-px2rem" aria-hidden="true">#</a> 安装 postcss-plugin-px2rem</h4><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i postcss-pxtorem --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#使用-postcss-plugin-px2rem" aria-hidden="true">#</a> 使用 postcss-plugin-px2rem</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /postcss.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-plugin-px2rem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span> <span class="token comment">// 换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px</span>
      <span class="token comment">// unitPrecision: 5, //允许REM单位增长到的十进制数字。</span>
      <span class="token comment">// propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。</span>
      <span class="token comment">// propBlackList: [&#39;font-size&#39;, &#39;border&#39;], //黑名单</span>
      <span class="token comment">// exclude: /(src)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值</span>
      <span class="token comment">// selectorBlackList: [], //要忽略并保留为px的选择器</span>
      <span class="token comment">// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。</span>
      <span class="token comment">// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。</span>
      <span class="token literal-property property">mediaQuery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//（布尔值）允许在媒体查询中转换px。</span>
      <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//设置要替换的最小像素值(3px会被转rem)。 默认 0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态设置-rem-的值" tabindex="-1"><a class="header-anchor" href="#动态设置-rem-的值" aria-hidden="true">#</a> 动态设置 rem 的值</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span>
    resizeEvt <span class="token operator">=</span> <span class="token string">&quot;orientationchange&quot;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&quot;orientationchange&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> clientWidth <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientWidth<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">&gt;=</span> <span class="token number">640</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">&quot;37.5px&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">75</span> <span class="token operator">*</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> <span class="token number">750</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>doc<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">!=</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        doc<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>doc<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>resizeEvt<span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">recalc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rem-转换成-px" tabindex="-1"><a class="header-anchor" href="#rem-转换成-px" aria-hidden="true">#</a> rem 转换成 px</h3><p>在 flycua-m 项目中，我们不再使用 rem 作为适配单位，输入 rem 数值 计算出 px 数值</p>`,18),d=n("h2",{id:"相关资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关资料","aria-hidden":"true"},"#"),t(" 相关资料")],-1),k={href:"https://juejin.cn/post/6953091677838344199#heading-13",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const p=s("RemToPx"),e=s("ExternalLinkIcon");return c(),l("div",null,[r,a(p),d,n("p",null,[n("a",k,[t("移动端适配的 5 种方案"),a(e)])])])}const h=o(u,[["render",m],["__file","rem.html.vue"]]);export{h as default};