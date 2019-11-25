import * as path from "path";

export function getEntry(): string {
    const pkg = require("../package.json");
    return path.join(pkg.name, pkg.bootstrapModule);
}
