import * as messages from "../messages";
import { BuildProcessEnv, Environment, Meta } from "../entities";

export function inject(metaFile: string = "meta.json"): string[] {
    const meta = Meta(require(process.cwd() + "/" + metaFile));
    const env = BuildProcessEnv(meta);
    console.log(messages.build(Environment(env)));
    Object.assign(process.env, env);
    return Object.keys(env);
}
