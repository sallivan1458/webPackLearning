import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(_a) {
    var mode = _a.mode;
    var isDev = mode === 'development';
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: { icon: true }
            }
        ]
    };
    var scssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            scssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ]
    };
    var tsLoader = {
        // ts-loader изначально умеет работать с JSX
        // если бы мы не использовали ts, то нам нужен был бы babel-loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    };
    return [scssLoader, tsLoader, assetLoader, svgLoader];
}
