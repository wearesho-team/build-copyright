import * as webpack from "webpack";

import { getEntry } from "./get-entry";
import { EnvironmentPlugin } from "./environment-plugin";

export function append(
    configuration: webpack.Configuration,
    metaFile?: string
): webpack.Configuration {
    const entry = getEntry(configuration);
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
