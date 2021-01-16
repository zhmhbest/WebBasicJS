const WebpackConfiguration = JSON.stringify({
    mode: undefined,
    devtool: undefined,
    entry: {
        index: undefined
    },
    output: {
        path: undefined,
        filename: undefined,
        library: undefined,
        libraryTarget: undefined
    },
    module: {
        rules: [
            /*{
                test: undefined,
                exclude: undefined,
                include: undefined,
                use: [
                    {
                        loader: '',
                        options: {}
                    }
                ]
            },*/
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {}
    },
    plugins: [],
    externals: {},
    optimization: {},
});
// console.log(WebpackConfiguration);

class WebpackConfigEnhance {
    constructor() {
        this.options = JSON.parse(WebpackConfiguration);
        this.matchers = new Map();
    }

    /**
    * 获取配置
    */
    get configuration() {
        return this.options;
    }

    /**
     * 直接扩充配置
     * @param {object} options
     */
    extend(options) {
        this.options = { ...this.options, ...options };
    }

    /**
     *
     * @param {object} plugin
     */
    addPlugin(plugin) {
        this.options.plugins.push(plugin)
    }

    /**
     * @callback addLoader
     * @param {string} loader
     * @param {object} [options]
     */
    /**
     *
     * @param {RegExp} test
     * @param {Array} [include]
     * @param {Array} [exclude]
     * @returns {addLoader}
     */
    addMatcher(test, include, exclude) {
        const key = test.toString();
        if (this.matchers.has(key)) {
            return this.matchers.get(key);
        } else {
            const use = [];
            this.options.module.rules.push({
                test,
                use,
                include,
                exclude,
            });
            const addLoader = (loader, options) => {
                use.push({
                    loader,
                    options,
                });
            };
            this.matchers.set(key, addLoader);
            return addLoader;
        }
    }
}

module.exports = WebpackConfigEnhance;