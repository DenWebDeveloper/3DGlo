const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'one.js',
        path: path.resolve(__dirname, 'dist')
    }
};