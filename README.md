# 快速搭建基于Vue的SPA环境
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/WhiteRobe/QuickBoot-VueSPA/blob/master/LICENSE)
![](https://img.shields.io/github/repo-size/WhiteRobe/QuickBoot-VueSPA.svg)
![](https://img.shields.io/github/last-commit/WhiteRobe/QuickBoot-VueSPA.svg)
[![HitCount](http://hits.dwyl.io/WhiteRobe/QuickBoot-VueSPA.svg)](http://hits.dwyl.io/WhiteRobe/QuickBoot-VueSPA)
![](https://img.shields.io/github/forks/WhiteRobe/QuickBoot-VueSPA.svg?style=social)

![](https://img.shields.io/badge/Node.js-10+_LST-blue.svg)
![](https://img.shields.io/badge/Windows-7|10-blue.svg)
![](https://img.shields.io/badge/Vue.js-2.5-blue.svg)
![](https://img.shields.io/badge/webpack-4.26-blue.svg)
![](https://img.shields.io/badge/javascript-ES6-blue.svg)

## 项目介绍

**自动搭建、快速部署**基于Vue的SPA环境，依赖“webpack”完成项目的自动化构建。

已集成了基本的SPA常用包，如[axios](https://github.com/axios/axios)、[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)等。

前端采用[iview](https://www.iviewui.com/)作为UI组件库。

项目的入口`/dist/index.js`已完成基本的应用载入提示和浏览器兼容性检查：

<p align="center">
	<img src="/.github/pic/loading.gif" />
</p>

## 项目使用 Usage

### 项目依赖 Dependence

项目基于[Node.js](https://nodejs.org/en/)搭建。涵盖以下常用库依赖：

包名| 当前版本 | 主要用途
:-:|:-:|:-:
axios|^0.18.1| AJAX
iview| ^3.1.5 | UI视觉库
js-md5 | ^0.7.3 | MD5求值
jsonwebtoken|^8.5.1| JWT的js实现
vue|^2.5.17| 前端框架
vuex|^3.0.1| 全局状态管理
vue-router|^3.0.1| SPA路由现实库
webpack|^4.26.0| 自动化构建工具

同时，已集成`file-loader`、`url-loader`、`css-loader`、`vue-style-loader`等构建工具。

### 安装教程 Installation

**Step 1. 安装环境**

<p align="center">
	<img src="/.github/pic/install.png" />
</p>

Windows环境下，运行脚本 `初始化环境.bat`，即可完成环境搭建。

- 或执行命令行：
`start npm --registry https://registry.npm.taobao.org install`，从阿里的镜像库完成依赖包的下载。

> 如果出现`found 2 vulnerabilities`，可以尝试使用`npm audit fix`指令进行修复。

**Step 2. 打包项目**

<p align="center">
	<img src="/.github/pic/pack.png" />
</p>

Windows环境下，运行脚本 `快速打包.bat`，即可完成项目打包。

- 或执行命令行：`start npm run dev`，即可完成项目打包。
- 执行命令行：`start npm run release`，即可完成"生产环境"的项目打包。

完成项目打包后，用支持ES6的浏览器打开`/dist/index.html`可以观察到基本框架的显示效果：

<p align="center">
	<img src="/.github/pic/example.jpg/>
</p>

**Step 3. 发送项目**

![](https://img.shields.io/badge/robocopy-Only-orange.svg)

<p align="center">
	<img src="/.github/pic/send.png" />
</p>

- 在支持 `robocopy` 指令的Windows系统中，执行 `发送分发包.bat` 即可将`/dist`文件夹中的文件发送到指定的项目目录下。(需要修改 `$target_directory$` 为项目地址)

## 开发接口 Dev-Interface

**自动化构建工具**

根目录下的`webpack.config.js`已经完成主要的配置：

<p align="center">
	<img src="/.github/pic/webpack_config.png" />
</p>

- 在入口文件 `/src/main.js` 中已经部署了 `vuex` 和 `vue-router`、`iview`。

- 在SPA主页面文件 `/dict/index.html` 中，完成了基本的应用载入提示和浏览器兼容性检查，并基于`vue-router`实现了基本路由：(其中，`<window-frame>` 在 `main.js` 中定义)

<p align="center">
	<img src="/.github/pic/index_main.png" />
</p>


**源码目录**

目录 `/src` 是源码存放目录，下辖三个主要文件：

- `main.js` 项目前端程序入口，一般无改动需求；
- `router.js` 项目路由，控制 `<page_content>` 中的页面；
- `store.js` 项目全局状态管理；

子目录 `/src/components` 存放了一个样例`.vue`文件，定义了一个基本框架，你可以修改此页面以达到修改SPA主界面框架的效果，但需要包含：

<p align="center">
	<img src="/.github/pic/inner_page.png" />
</p>

以实现 `router.js` 中所定义的页面路由功能。
