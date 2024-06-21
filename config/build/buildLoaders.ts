import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/types";
import { ModuleOptions } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {babelLoader} from "./babel/buildBabelLoaders";


export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: { icon: true }
            }
        ]
    }

    const scssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev? '[path][name]__[local]': '[hash:base64:8]',
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            scssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    const tsLoader = {
        // ts-loader изначально умеет работать с JSX
        // если бы мы не использовали ts, то нам нужен был бы babel-loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                //     выключить проверку типов
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
    }
    const bableLoader = babelLoader(options)


    return [
        scssLoader,
        //tsLoader,
        bableLoader,
        assetLoader,
        svgLoader
    ]
}