import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResollvers} from "./buildResollvers";
import {IBuildOptions} from "./types/types";




export function BuildWebpack(options:IBuildOptions):webpack.Configuration {
    const { mode, port, paths} = options

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';


    return{
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResollvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}

