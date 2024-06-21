import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResollvers } from "./buildResollvers";
export function BuildWebpack(options) {
    var mode = options.mode, port = options.port, paths = options.paths;
    var isDev = options.mode === 'development';
    var isProd = options.mode === 'production';
    return {
        mode: mode !== null && mode !== void 0 ? mode : "development",
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
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
