import path from 'path';
import webpack from 'webpack';
import {IBuildPath,IBuildOptions,BuildPlatform,BuildMode,BuildWebpack} from "@packages/build-config/src/index"
import packageJson from './package.json'


interface IEnvValue{
    mode?: BuildMode,
    port?: number,
    analyzer?: boolean,
    platform?:BuildPlatform,
    SHOP_REMOTE_URL?:string,
    ADMIN_REMOTE_URL?:string,
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
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer ?? false,
        // npm run build:prod -- --env analyzer
        platform: env.platform ?? 'desktop',
    })

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'

    config.plugins.push( new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                // requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))


    return config
};