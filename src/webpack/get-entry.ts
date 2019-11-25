import * as webpack from "webpack";

function isSupportModules(resolve?: webpack.Resolve): boolean {
    return ("object" === typeof resolve)
        && Array.isArray(resolve.extensions)
        && resolve.extensions.includes(".mjs");
}

export function getEntry(config: webpack.Configuration = {}): string {
    const fs = require("fs");
    const path = require("path");
    const { name, entry } = <{
        name: string;
        entry: { module: string, main: string };
    }>require(fs.existsSync("../package.json") ? "../package.json" : "../../package.json");
    return path.join(name, isSupportModules(config.resolve) ? entry.module : entry.main);
}
