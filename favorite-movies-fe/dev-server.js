var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config.js');
var path             = require('path');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    progress: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true }
}).listen(8000, '0.0.0.0', function (err) {
    if (err) {
        return console.log(err);
    }
});
