## Electron + React Hooks + TS 实战开发：从 0 到 1 实现简历平台

![](https://img.shields.io/badge/visResumeMook--resume-1.0.2-red.svg)
![](https://img.shields.io/badge/react-16.12.0-blue.svg)
![](https://img.shields.io/badge/electron-11.1.1-green.svg)
![](https://img.shields.io/badge/react_redux-7.1.3-orange.svg)
![](https://img.shields.io/badge/typescript-3.7.2-blue.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)

> 本小册从一个开发者角度，讲述技术选型到编码实现，点亮 Electron、TS 等技术点，逐步深入 React 开发，从 0 到 1 实现一款轻巧适用的简历平台桌面应用。

### 开发

```
npm install
npm run start:main
npm run start:render
```

### 打包

```
npm run build-app-mac
npm run build-app-win
```

## 作者介绍

彭道宽，就职于 CVTE，部门人称“彭于晏广州分晏”，掘金专栏作者，投身开源，[rc-redux-model](https://github.com/SugarTurboS/rc-redux-model) 库作者，SugarTurboS 开源组织推动者之一，坚持用心写文章

你可以在这里找到我：[github](https://github.com/PDKSophia)、[博客](https://github.com/PDKSophia/blog.io)、[掘金](https://juejin.im/user/594ca8a35188250d892f4139/posts)、[微博](https://weibo.com/u/2971991985)、[SugarTurboS](https://github.com/SugarTurboS)

## 小册须知

本小册共试读 8 章节，我希望你看完这 8 章节后，再决定是否购买。

可能有小伙伴会有所疑惑，**“我刚转 React 技术栈，会不会食用此小册时噎死？”、“我不会 Electron，学起来是否很难且费时？”、“我暂时不需要用 Electron 是否能食用？”、“我不想做成 PC 端，能不能做成 Web 端？”**，这些问题我将在 [🏆 500 米里程碑｜环境搭建篇完成](https://juejin.cn/book/6950646725295996940/section/6962898545577820198)进行解答。

**《无常经》载: 世事无相，相由心生**。我只能保证，每一章节，一定是用心去写的。

该小册侧重于实战，**强烈建议边读边实践**。相应代码也已开源，希望这本小册子能够给你带来一些帮助，扩充你的知识库，帮你集齐目前炽手可热的技能点，也能帮你从 0 到 1 完成一个实操项目。

## 小册介绍

### 为什么我不用脚手架？

鲁迅先生曾言：“世上本没有路，走的人多了便也成了路”，在刀耕火种时期，我们写前端代码并不需要所谓的脚手架，三件套 HTML+CSS+JS，再搭配一个 VSCode 就够了。随着 Web 的发展，页面越来越丰富，需要的技术栈越来越多，各种各样的脚手架腾空出世。

世间万物存在，必有其意义，我们得明白脚手架的出现，给我们带来了什么方便？脚手架是一个工具，通过输入一些简单指令，为我们快速搭建好一个基本环境，基于此快速开发，从而提高工作效率。很有意思的现象，随着脚手架市场不断丰富，在开新项目选型技术框架时，会有意识的去选择是采用 `vue-cli` 还是 `create-react-app`，久而久之成为脚手架的忠实使用者。

不知老板们大学是否有教前端的课程，如果我没记错，我们学校有门课程叫做：`Web基础`，教材内容极为“舒适”，可以说与现在的主流技术栈毫无关系，当然现在教材内容是否有变更就不为人知了。

我相信大部分学习前端的小伙伴，差不多都是这个流水线：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d5ce43747904c28bfeaa08121c7f335~tplv-k3u1fbpfcp-watermark.image)

记得我第一个仿站项目：Vue 开发去哪儿网从入门到实战，视频刚看前 3 节，我就放弃了，如果你问我为什么，我会很骄傲自豪的告诉你，搭建环境没成功，Webpack 老配置不对，项目跑不起来。

人们总是习惯性的呆在舒适圈中，我也一样，能用脚手架解决的事情，我为什么要自己去写，自己去做，渐渐地当我对脚手架产生依赖性之后，莫名有种恐慌，因为脚手架太香了，我基本用到的配置都已经帮我写好，我只需要坐享其成。

基于脚手架搭建项目，大部分人主要工作是：参与其中的“页面”开发，更多的对于前期配置与后期打包发布等问题，都处于相对空白状态；我曾想，该如何学习 Webpack，我上网去搜，很多教程，诸如 Webpack 傻瓜式指南、Webpack 入门体验、Webpack 花式入门教程，我都粗略看了一下，都不错，但没能找到属于自己学习 Webpack 的正确道路；`我去看文档，枯燥乏味，我去 B 站学习，有一股神秘的东方力量，将我的视频内容从 Webpack 变成 Lisa ，我去看优秀项目中的配置，又太复杂，各种操作秀上天，山舞银蛇，原驰蜡象，欲与天公试比高`，对于我这种初学 Webpack 的好同志来讲，简直就是造孽。

逃不掉的，你总得学，只是时间早晚问题，从零开始，抛弃脚手架去踩踩坑，从坑中爬出来配合文档查缺补漏，这才是可持续发展的最佳战略。

### Electron 跨平台桌面应用程序

**以前我们被称为切图仔，慢慢地，我们有了个头衔，叫做前端工程师**，大部分情况下，我们前端仔都是跟浏览器打交道，如果会点 Node，还能写点后端秀一把。但如果涉及到“禁区”：原生应用，那就无能为力、束手无策了。偶然得知，我们的吃饭工具 `VSCode` 是用 Electron 开发出来的。它自吹：“如果你可以建一个网站，你就可以建一个桌面应用程序 ”。简单来讲，就是允许你使用吃饭的家伙，去开发原生桌面端应用。

如 Atom、VSCode、迅雷、微信等都是采用 Electron 构建桌面客户端，足以说明 Electron 的强大。

同时部分前端岗位在招聘职位上也有明确描述：主要前端框架为 React、Electron。希望通过本小册能让你了解 Electron，并通过实战，体验一下开发桌面应用的快乐。

### React Hooks

对于 Hooks 的了解，你可以通过[官网](https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation)能找到答案，但实际上，还是有许多小伙伴并不敢下手实践。

作为一名程序员，我们很明确的清楚，对于复用的代码要抽离出来，但在 React 中，我们往往想复用一些状态逻辑是非常困难的，大部分情况下都是通过高阶组件、render props 等方式，重新组织代码结构（组件结构），以达到我们的目的——复用状态逻辑。

正因为想解决上述情况，Hooks 应运而生。希望通过本小册通过具体项目实践应用 React Hooks 新特性，我想这一定比干啃文档更补。

### TypeScript

想必 TS 的概念大家都知道，但真正上手 TS 的却少之又少。不仅 React，现在 Angular、Vue 都拥抱了 TS 生态，如前段时间很火的 Vue3 都刚用 TS 重构完毕。

不得不说， TS 是一个大趋势，掌握 TS 也是进阶必备技能。同时在求职过程中，它是你的亮点或者加分项，有些公司甚至已将其作为必备技能。掌握 TS 对你来讲是利大于弊。

## 核心思想

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e2c7ed6b54440cb9e9dfb570bfac439~tplv-k3u1fbpfcp-watermark.image)

本小册的写作思路：围绕简历平台，采用当前相对流行的技术栈，从零打造一个完整的实战项目。从最开始的技术选型到项目初始化，开发环境下的相关配置到功能的具体实现，功能点的设计及相关库的选型，以及最后的打包发布。

**纸上得来终觉浅，绝知此事要躬行**，试读章节是对 Webpack、Electron 核心知识的讲解，对整个应用功能设计，接下来在业务篇进行一一讲解，配套对应的分支代码，让你从头到尾把内容连贯起来。

## 关于建议

为了保证较好的阅读体验，不建议跳读，你要真的跳，那我也没办法。

还有这本小册，阿宽会根据知识点内容进行适当的拆分，能一节说完的东西，不会拆成两节，为了确保最佳阅读效果，我会尽最大能力，让语言幽默些，看起来轻松点，如果你看完觉得不够轻松，那去洗个澡冷静一下，再回来看。

## 关于解惑

> 古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣

如果大家在阅读小册时发现任何你有困惑的问题，可以对我提问，非学习上的问题，也可对我提出，我在力所能及的范围内尽力帮大家解答。

## 你会学到什么？

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f605eec2bbf6434a8d2e611deaaa5e7c~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc512134844347d38546f2500a438d04~tplv-k3u1fbpfcp-watermark.image)

小册目录共分为 28 章，每一章节的篇幅都相对较长，期望你能耐心去看，看完之后你将会获得下面技能：

- 点亮新技术点，了解 Electron ，掌握 Electron 开发 PC 端应用的基础知识和积累实战经验，你不仅仅只能做 Web 端，还能做 PC 端，相信我，这并不难
- 实战型教程，不只是讲理论知识、更要让你明白某个功能点从技术选型到设计再到实现
- 抛弃脚手架，从零搭建项目，不断踩坑，配合文档查缺补漏，了解一个完整项目的总体流程
- 熟练使用 React Hooks 新特性进行业务开发，思考 Hooks 为你带来的价值
- 聊聊公共组件，公共 Hooks 开发前的思考及过程，返璞归真，越简单的东西往往越难
- 手把手实操搭建平台，围绕`为什么`、`怎么做`进行配置代码解读，配套不同代码分支帮助理解，加强你对 Webpack、Babel 的认识。
- 无任何的 UI 框架，纯手工制作，让你脱离 UI 库，进而提升自己的 CSS 能力
- 了解 redux 原理，了解 redux 中间件的真面目，结合 rc-redux-model 中间件，让你开发 redux 中间件不再困难

## 适宜人群

- 掌握一些前端基础知识，但没做过项目，缺乏实战经验的在校大学生
- 转型技术栈，对学习和掌握 React 还未积累实战经验的同学们
- 期望了解一个从 0 到 1 完整项目的整套流水线，补全自己知识体系的小伙伴
- 期望通过前端技术，开发桌面客户端的小伙伴们
- 迟迟不敢探索新特性，对 React Hooks 感兴趣，但仅停留于理论文档，缺乏实战经验的前端小伙伴

### 更多分支

- 环境分支

  - [electron-init](https://github.com/PDKSophia/visResumeMook/tree/electron-init)：关于`Electron`相关的初始化配置代码，只涉及到 Electron
  - [electron-react-init](https://github.com/PDKSophia/visResumeMook/tree/electron-react-init)：将 `Electron + React` 结合起来的初始化配置代码

- 完整项目
  - [master](https://github.com/PDKSophia/visResumeMook)：简历平台应用完整项目地址
  - [init-cli](https://github.com/PDKSophia/visResumeMook/tree/init-cli)：完整配置的分支代码，可以基于此分支直接进行项目开发

> 支持配套学习分支，章节名对应分支名，如有疑问，请提 issues，同时欢迎提 Merge Request

### 小册章节

<img src="./cover.jpeg" width=200 />

- [x] [开篇-小册介绍](https://juejin.cn/book/6950646725295996940)
- [x] [开篇-技术选型和项目结构](https://juejin.cn/book/6950646725295996940/section/6962895331667230727)
- [x] [基础篇-Electron 初步认识并掌握基础知识](https://juejin.cn/book/6950646725295996940/section/6961585436967829516)
- [x] [设计篇-需求功能设计与数据存储方案设计](https://juejin.cn/book/6950646725295996940/section/6962435230061821952)
- [x] [环境篇-动手搭建我们的简历平台](https://juejin.cn/book/6950646725295996940/section/6961586491285831720)
- [x] [🏆 500 米里程碑｜环境搭建篇完成](https://juejin.cn/book/6950646725295996940/section/6962898545577820198)
- [x] [业务篇-首页开发，好的印象能加分](https://juejin.cn/book/6950646725295996940/section/6962938228357726241)
- [x] [业务篇-如何写我们的 Redux 与 jsonFile](https://juejin.cn/book/6950646725295996940/section/6962906314565484551)
- [x] [业务篇-简历制作之常用组件设计与简历数据设计](https://juejin.cn/book/6950646725295996940/section/6962895451875966989)
- [x] [业务篇-简历制作之入口页面开发](https://juejin.cn/book/6950646725295996940/section/6964550757375246366)
- [x] [业务篇-简历制作之工具条模块与简历模版之间通信](https://juejin.cn/book/6950646725295996940/section/6965876539833450503)
- [x] [业务篇-简历制作之数据的录入与展示](https://juejin.cn/book/6950646725295996940/section/6962940365221396511)
- [x] [业务篇-简历制作之导出 PDF](https://juejin.cn/book/6950646725295996940/section/6962940108383191048)
- [x] [🏆 1000 米里程碑 ｜简历主流程完成](https://juejin.cn/book/6950646725295996940/section/6962940484008280077)
- [x] [业务篇-首页主题换肤功能实现](https://juejin.cn/book/6950646725295996940/section/6962761759404851239)
- [x] [业务篇-简历模版列表实现与侧边栏交互效果](https://juejin.cn/book/6950646725295996940/section/6962940426999300109)
- [x] [业务篇-简历数据存档且自定义存储路径](https://juejin.cn/book/6950646725295996940/section/6962940676258398222)
- [x] [🏆 1500 米里程碑 ｜丰富功能](https://juejin.cn/book/6950646725295996940/section/6962939774650810380)
- [x] [优化篇-如何采用 Hooks 优化主题换肤逻辑](https://juejin.cn/book/6950646725295996940/section/6962940589528580132)
- [x] [优化篇-公共弹窗拆解优化，让职能更加单一](https://juejin.cn/book/6950646725295996940/section/6962941125426413599)
- [x] [优化篇-采用 Hooks 优化简历 Form 组件](https://juejin.cn/book/6950646725295996940/section/6962941213401939998)
- [x] [定制篇-自定义 Electron 原生应用菜单](https://juejin.cn/book/6950646725295996940/section/6962938070312157184)
- [x] [打包篇-Webpack 打包优化](https://juejin.cn/book/6950646725295996940/section/6962941321325576226)
- [x] [打包篇-Electron 打包体积优化](https://juejin.cn/book/6950646725295996940/section/6962941003858706436)
- [x] [🏆 到达目的地-应用程序发布](https://juejin.cn/book/6950646725295996940/section/6962941268389265415)
- [x] [结尾篇-行而不辍，未来可期](https://juejin.cn/book/6950646725295996940/section/6962941492159578143)
- [x] [彩蛋篇-Webpack 基础介绍与两大利器](https://juejin.cn/book/6950646725295996940/section/6962895331730620423)
- [x] [彩蛋篇-RcReduxModel 中间件开发设计](https://juejin.cn/book/6950646725295996940/section/6953057493043904549)
- [x] [期望篇-可视化自定义独特的简历模版](https://juejin.cn/editor/book/6950646725295996940/section/6953057711445671943)

### 效果

1. 首页

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922146a39661431aa8a5f9f053e8d747~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b27b764c0b274def99ce8d6f728955e0~tplv-k3u1fbpfcp-watermark.image)

2. 模版列表页

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b313159241145d2ad15dade1063ead1~tplv-k3u1fbpfcp-watermark.image)

3. 制作简历页

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3576e5eaf45b42c38429af364c51644d~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b3d5b58d9954914962fdd44b37be1b0~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c70eab719d2c4d6981717e23d6780be3~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9748987bac0b4f97913dd2b274cf87f1~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c92abf2246e64a13a9c0b9b7beb262f7~tplv-k3u1fbpfcp-watermark.image)

4. 导出简历信息

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02490b74bb564a27902d6cee051c7fdb~tplv-k3u1fbpfcp-watermark.image)

5. 导出 `名字+学校+职位` PDF

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7d7fdab52954dbfa6995b95b95deef3~tplv-k3u1fbpfcp-watermark.image" width=300 />

> 上述是部分截图，其中的布局、样式、交互均纯手工制作，未采用任何 UI 库，导出的简历并不模糊，可放心使用

### 疑问

有任何疑问可以提 issues 或者添加我微信 PPPengDK 哈，同时欢迎大家提 Merge Request