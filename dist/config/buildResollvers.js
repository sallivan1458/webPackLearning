export function buildResollvers(options) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    };
}
