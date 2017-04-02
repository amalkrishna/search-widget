var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            { test: /\.(scss|css)$/,
              loader: "style-loader!css-loader!sass-loader"
            },
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'url-loader',
              options: {
              limit: 25000,
              }
            }
        ]
    }
};

module.exports = config;
