# WebBasicJS

基于Webpack打包的前端基础库

## 使用

### Html

```html
<script src="https://zhmhbest.github.io/WebBasicJS/dist/1.0.0/index.min.js"></script>
```

### Module

```bash
npm -S i https://github.com/zhmhbest/WebBasicJS
```

```js
const WebBasicJS = require("zhmh-webbasicjs");
```

## 创建过程

```bash
npm init -f
npm -D i cross-env

# for src
npm -D i webpack@4 webpack-cli@3
npm -D i babel-loader @babel/core @babel/preset-env
npm -D i @babel/plugin-proposal-class-properties
npm -D i @babel/plugin-proposal-object-rest-spread
npm -D i @babel/plugin-proposal-decorators
# npm -S i @babel/polyfill
npm -D i typescript ts-loader

# for test
npm -D i webpack-dev-server@3
npm -D i html-webpack-plugin@4
npm -D i open-browser-webpack-plugin
```
