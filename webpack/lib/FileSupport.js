const fs = require('fs');
const path = require('path');
const root = path.resolve('.');
const currentDirectory = path.resolve('.');

/**
 * 文件是否存在且可读
 * @param {string} filename
 * @returns {boolean}
 */
const isReadEnable = (filename) => {
    try {
        fs.accessSync(filename, fs.constants.R_OK);
        return true;
    } catch (err) {
        return false;
    }
}

/**
 * 新建JSON文件
 * @param {string} filename
 * @param {object} options
 * @param {boolean} [force]
 */
const writeJSON = (filename, options, force) => {
    // if (null === filename.match(/\.json$/)) {
    //     filename = `${filename}.json`;
    // }
    if (force || !isReadEnable(filename)) {
        fs.writeFileSync(
            filename,
            JSON.stringify(options, undefined, '    ')
        );
    }
}

module.exports = {
    isReadEnable,
    writeJSON,
    join: path.join,
    currentDirectory,
    relative: (pathname) => path.relative(currentDirectory, pathname),
    subdir: (pathname) => path.join(currentDirectory, pathname),
};
