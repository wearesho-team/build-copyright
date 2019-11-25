import * as webpack from "webpack";
import * as path from "path";
import * as utils from "./utils";

export class EnvironmentPlugin extends webpack.EnvironmentPlugin {
    constructor(metaFile: string = "meta.json") {
        const environmentKeys = utils.inject(metaFile);
        super(environmentKeys);
    }
}

export function getEntry(): string {
    const pkg = require("../package.json");
    return path.join(pkg.name, pkg.bootstrapModule);
}

export function withBuildCopyright(
    configuration: webpack.Configuration,
    metaFile?: string
): webpack.Configuration {
    const entry = getEntry();
    const plugin = new EnvironmentPlugin(metaFile);

    if ("string" === typeof configuration.entry) {
        configuration.entry = [ entry, configuration.entry ];
    } else if (Array.isArray(configuration.entry)) {
        configuration.entry.unshift(entry);
    }

    if (!Array.isArray(configuration.plugins)) {
        configuration.plugins = [ plugin ];
    } else {
        configuration.plugins.push(plugin);
    }
    return configuration;
}
