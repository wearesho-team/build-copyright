import * as webpack from "webpack";

function isSupportModules(resolve?: webpack.Resolve): boolean {
    return ("object" === typeof resolve)
        && Array.isArray(resolve.extensions)
        && resolve.extensions.includes(".mjs");
}

export function getEntry(config: webpack.Configuration = {}): string {
    const packageName = process.env.PACKAGE_NAME;
    const entryPoint = isSupportModules(config.resolve)
        ? process.env.PACKAGE_ENTRY_MAIN
        : process.env.PACKAGE_ENTRY_MODULE;
    return `${packageName}/${entryPoint}`;
}
