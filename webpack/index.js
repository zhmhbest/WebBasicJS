const WebpackConfigEnhance = require("./lib/WebpackConfig");
const FileSupport = require("./lib/FileSupport");

module.exports = function() {
    const argv = process.env;
    let state = {};
    state.packageInfo = require("../package.json");
    state.packageName = state.packageInfo.name.replace(/-/g, "_");
    state.outputPath = `dist/${state.packageInfo.version}`;
    //
    state.isProd = !!parseInt(argv["mode"]);
    state.isDev = !state.isProd;
    state.mode = state.isProd ? "production" : "development";
    state.isGlobal = !!parseInt(argv["global"]);
    //
    state.devPort = 9000;
    state.devPath = "test";
    state.devHtml = `${state.devPath}/index.html`;
    // console.log(state);


    /**
     * 当前工作目录为package.json所在目录
     */
    let config = new WebpackConfigEnhance();
    config.extend({
        devtool: "source-map",
        mode: state.mode,
        entry: {
            index: "./src/index.ts"
        },
        output: {
            path: FileSupport.subdir(state.outputPath),
            filename: (
                state.isDev ? "[name].dev.js" : (state.isGlobal ? "[name].min.js" : "[name].js")
            ),
            libraryTarget: state.isGlobal ? "var" : "commonjs",
            library: state.isGlobal ? state.packageName : undefined,
            globalObject: "this",
        }
    });

    if (state.isDev) {
        config.extend({
            devServer: {
                port: state.devPort,
                progress: true,
                contentBase: FileSupport.subdir(state.devPath),
                compress: true
            }
        });
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        config.addPlugin(new HtmlWebpackPlugin({
            template: state.devHtml, // 模板HTML文件路径
            filename: "index.html",  // 打包后HTML文件名称
            minify: {
                removeAttributeQuotes: state.isProd, // 删除多余的双引号
                collapseWhitespace: state.isProd, // 删除换行
                hash: state.isDev
            }
        }));
        const OpenBrowserPlugin = require('open-browser-webpack-plugin');
        config.addPlugin(new OpenBrowserPlugin({
            url: `http://localhost:${state.devPort}/`
        }));
    }

    require("./loader.js")(state, config);

    console.log(config.configuration);
    return config.configuration;
};