import path from 'path';
import 'webpack-dev-server';
import { BuildWebpack } from "./config/buildWebpack";
export default (function (env) {
    var _a, _b, _c, _d;
    var paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        output: path.resolve(__dirname, "build"),
        src: path.resolve(__dirname, "src"),
    };
    var config = BuildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 8080,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : "development",
        paths: paths,
        analyzer: (_c = env.analyzer) !== null && _c !== void 0 ? _c : false,
        // npm run build:prod -- --env analyzer
        platform: (_d = env.platform) !== null && _d !== void 0 ? _d : 'desktop',
    });
    return config;
});
