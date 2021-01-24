const WebpackConfigEnhance = require("./lib/WebpackConfig");
const FileSupport = require("./lib/FileSupport");

module.exports = function (argv) {
    let state = {};
    state.packageInfo = require("../package.json");
    state.packageName = state.packageInfo.name;
    state.outputPath = `dist/${state.packageInfo.version}`;

    state.isProd = !!parseInt(argv["mode"]);
    state.isDev = !state.isProd;
    state.mode = state.isProd ? "production" : "development";

    state.isGlobal = !!parseInt(argv["global"]);


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

    // 【Loader】
    require("./loader.js")(state, config);

    // console.log(config.configuration);
    return config.configuration;
};