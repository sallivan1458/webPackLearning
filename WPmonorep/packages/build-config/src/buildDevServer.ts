import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {IBuildOptions} from "./types/types";

export function buildDevServer(options:IBuildOptions):DevServerConfiguration {
    return {
        // npm run dev -- --env port=8080
        port: options.port ?? 8080,
        open: true,
        //это только для devServer, если через ngins, то надо делать проксирование на index.html
        historyApiFallback:true,
        hot: true,
    }
}