# webpack-react

打造react项目的webpack环境最佳配置

## 步骤

### 一、初始化项目

```js
npm init -y
```

`webpack` 安装

```js
npm i webpack webpack-cli -D
```

根目录下新建 `build` 目录，主要是用来存放 `webpack` 相关的配置文件

```js
mkdir build
cd build && touch webpack.base.config.js webpack.config.js webpack.dev.config.js webpack.pro.config.js
```

`webpack.config.js` :  `webpack` 的入口配置文件，主要是用来合并不同环境下的配置

`webpack.base.config.js` :  `webpack` 的一些基础配置文件

`webpack.dev.config.js` :  `webpack` 的开发环境配置文件

`webpack.pro.config.js` :  `webpack` 的生产环境配置文件

根目录下新建 `src` 目录，主要是用来存放源代码

```js
mkdir src
```

以及在 `src` 目录下新建 `index.html` 和 `index.js`

```js
cd src && touch index.html
```

### 二、基础配置

`webpack.base.config.js` 基础配置
