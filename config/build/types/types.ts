export interface IBuildPath{
    entry: string,
    html: string,
    public:string
    output: string,
    src:string
}

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'desktop' | 'mobile';

export interface IBuildOptions{
    port:number,
    paths:IBuildPath,
    mode:BuildMode,
    analyzer?:boolean
    platform?:BuildPlatform,
}