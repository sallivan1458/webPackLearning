import {Configuration} from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/types";

export function buildResollvers(options: IBuildOptions):Configuration['resolve'] {
    return{
        extensions: ['.tsx', '.ts', '.js'],
        alias:{
            '@': options.paths.src
        }
    }
}