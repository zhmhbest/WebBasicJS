# WebBasicJS

基于Webpack打包的前端基础库

## 创建项目

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
  "main": "src/index.ts",
  "scripts": {
    "build.dev": "webpack  --config webpack/index.js --mode=development --env mode=development",
    "build.prod": "webpack --config webpack/index.js --mode=production  --env mode=production"
  },
```
