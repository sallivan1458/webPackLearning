export function buildDevServer(options) {
    var _a;
    return {
        // npm run dev -- --env port=8080
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 8080,
        open: true,
        //это только для devServer, если через ngins, то надо делать проксирование на index.html
        historyApiFallback: true
    };
}
