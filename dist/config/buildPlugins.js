import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export var buildPlugins = function (_a) {
    var mode = _a.mode, paths = _a.paths, analyzer = _a.analyzer, platform = _a.platform;
    var isDev = mode === 'development';
    var isProd = mode === 'production';
    var plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        })
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
};
