# fx-991CN X 简明使用说明

> 本项目是针对全体上海市高中生的一份计算器（fx-991 CN X）使用的简单手册，致力于帮助更多同学更好的压榨手中计算器的功能。
> 
> 如果各位有其他的hack方法欢迎提交issue或Pull Request。
>
> 所有出现的操作名、按键名、图标等全部优先使用卡西欧用户说明书中的称呼，后使用习惯称呼。

!> 本文仅摘录对于学习用途使用计算器有用的方法，不会接受如卡花屏、卡119模式等的操作方法。但会摘录部分对于解除花屏有效的行为。

## 我个人对使用计算器的一些看法

我周围一些同学有很多存在抵制使用计算器直接硬解题目的，担心计算器会让自己堕落。不容否认这种担心并不是多余的，比如我自己在三角函数学习期间过度依赖计算器的算力硬解题目以至于基础的知识点都没能很好的掌握。

我认为最好的计算器使用状态应该是只在考试等赶时间的情况下硬解，其他时间只用于算数的工具。

## 本项目中的书写格式

### 操作表示
按下按键XXX：#bXXX#

同时按下按键XXX与YYY：#bXXX#+#bYYY#

顺次按下按键XXX与YYY：#bXXX##bYYY# 或 #bXXX#、#bYYY#

## 浏览器兼容性问题

### 图像渲染

本项目中部分图像使用超低分辨率配合`Pixelated`图像渲染模式（如下图）

![测试图 (低分辨率)](assets/img/test.png)

上图渲染效果应该如下：

![效果图 (高分辨率)](assets/img/test2.png)

如果出现下图渲染效果则为了保证阅读质量建议更换浏览器。

<div style="text-align:center">
<img src="assets/img/test.png" alt="不兼容的渲染结果" style="width: 100%; image-rendering: auto;" class="medium-zoom-image">
<figcaption>关闭<code>Pixelated</code>渲染模式 (低分辨率)</figcaption>
</div>

### JavaScript

本项目暂未使用Bable或者Corejs对低版本浏览器进行兼容，故会有Js脚本的浏览器兼容性问题，如果页面中出现乱码、文件源码、代码等则为了保证阅读质量请更换浏览器。

如有大佬能帮忙重写编译、打包等代码并提交PR我们将不胜感激

!> 以下内容供有一定基础的同学借鉴使用

## Quick Start 快速部署

`Windows`、`Linux`、`MacOS`三操作系统通用。

### 使用`http-server`部署静态页面

?> 请确保您所使用的设备中已配置好可用的`npm`和`npx`

```bash
$ git clone https://github.com/Howardzhangdqs/fx-991CN-X-Usage.git
$ cd fx-991CN-X-Usage
$ npm run server
```
打开[localhost:3000](http://localhost:3000/)即可阅读

此过程会运行`npx http-server -p 3000 .`，将`http-server`下载到`node_cache`中，无需预先安装依赖。首次运行会自动下载依赖，故需要稍等片刻。

### 使用`docsify-cli`的即时刷新功能

?> 请确保您所使用的设备中已配置好可用的`Node.js`、`npm`与`git`

```bash
$ npm i docsify-cli -g
$ git clone https://github.com/Howardzhangdqs/fx-991CN-X-Usage.git
$ cd fx-991CN-X-Usage
$ npm start
```
打开[localhost:3000](http://localhost:3000/)即可阅读

### 编译`TypeScript`并使用`uglify-js`压缩

?> 请确保您所使用的设备中已配置好可用的`Node.js`与`npm`

```bash
$ git clone https://github.com/Howardzhangdqs/fx-991CN-X-Usage.git
$ cd fx-991CN-X-Usage
$ npm i
$ npm run compile
$ npm run compress
```

运行`npm run compile`将会在`assets`目录下创建一个`dist`目录，其中包含所需的全部`js`文件与编译好的`ts`文件。

### `npm`命令对照表

| `npm`命令 | 用途 |
| :--: | :--: |
| `start` | 调用`docsify s -p 3000`，使用`docsify-cli`的即时刷新功能 |
| `server` | 调用`npx http-server -p 3000 .`开启本地静态页面服务 |
| `build` | 压缩`HTML`文件、编译`TypeScript`、并打包（顺次调用`compress_html`、`compile`、`compress`命令） |
| `compile` | 调用`tsc`，根目录下的`tsconfig.json`作为配置文件对`TypeScript`进行编译 |
| `compress_html` | 调用`html-minifier`，将`assets/src/html/index.html`压缩为根目录下的`index.html` |
| `compress` | 调用`uglify-js`，将`assets/dist`下的所有文件合并、压缩为`assets/js/bundle.min.js`，并生成`sourceMap`文件 |

## TODO
1. 写完

2. 未来可能排版为$\LaTeX$和pdf发行版，具体做不做看工期和我心情

## Emulator 模拟器

可以直接从官网上下载 <https://edu.casio.com/freetrial/zh/download2.php?lang=1&file_no=20140>，可购买许可证或者使用还原软件防止免费试用许可证到期。

或者本项目Release中放置了一个[Windows 电脑端 fx-991CN X 模拟器](https://github.com/Howardzhangdqs/fx-991CN-X-Usage/releases/download/Emulator/fx-991CN.X.Emulator19.exe.tar)

!> **此模拟器为盗版，安全性未知！**如需使用建议下载后放入不重要的虚拟机或沙箱中删掉文件后缀名中的`.tar`后双击运行。如有安全可靠的模拟器破解版欢迎联系。

较为稳妥的使用方法：

![](./assets/img/Snipaste_2022-11-30_19-49-57.png)

!> 以上行为（除购买许可证外）都很不道德！强烈谴责（除我外）所有使用盗版软件的法外狂徒！禁止试用！