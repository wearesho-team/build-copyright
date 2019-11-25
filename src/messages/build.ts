import { Environment } from "../entities";

export function build(
    env: Environment = Environment()
): string {
    return [
        `[app] Name: ` + env.name,
        `Version: ` + env.version,
        `Build Time: ` + env.time,
    ].join("\t");
}
