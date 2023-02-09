const app_dir = __dirname + '/src';

const config = {
    mode: 'development',
    entry: app_dir + '/electron.js',
    target: 'electron-main',
    output: {
        path: __dirname + '/build',
        filename: 'electron-app.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
};
module.exports = config;