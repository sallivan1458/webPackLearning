import path from 'path';
import webpack from 'webpack';
import {IBuildPath,IBuildOptions,BuildPlatform,BuildMode,BuildWebpack} from "@packages/build-config/src/index"
import packageJson from "./package.json";


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
        port: env.port ?? 3001,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer ?? false,
        // npm run build:prod -- --env analyzer
        platform: env.platform ?? 'desktop',
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))
    return config
};