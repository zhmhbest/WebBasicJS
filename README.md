# WebBasicJS

基于Webpack打包的前端基础库

## 使用

```html
<script src="https://zhmhbest.github.io/WebBasicJS/dist/1.0.0/index.min.js"></script>
```

```bash
npm -S i https://github.com/zhmhbest/WebBasicJS
```

## 创建

```bash
npm init -f
npm -D i webpack@4 webpack-cli@4
npm -D i babel-loader @babel/core @babel/preset-env
npm -D i @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-decorators
npm -S i @babel/polyfill
npm -D i typescript ts-loader
```

`package.json`

```json
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build.dev": "webpack  --config webpack/index.js --mode=development --env mode=development global=1",
    "build.mod": "webpack --config webpack/index.js --mode=production  --env mode=production global=0",
    "build.pro": "webpack --config webpack/index.js --mode=production  --env mode=production global=1"
  },
```
