import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import {BuildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPlatform, IBuildPath} from "./config/build/types/types";



interface IEnvValue{
    mode?: BuildMode,
    port?: number,
    analyzer?: boolean,
    platform?:BuildPlatform,
}



export default(env:IEnvValue) =>  {

    const paths:IBuildPath ={
        entry: path.resolve(__dirname, "src","index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        public: path.resolve(__dirname,'public'),
        output: path.resolve(__dirname, "build"),
        src: path.resolve(__dirname, "src"),
    }
    const config: webpack.Configuration = BuildWebpack({
        port: env.port ?? 8080,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer ?? false,
        // npm run build:prod -- --env analyzer
        platform: env.platform ?? 'desktop',
})
    return config
};