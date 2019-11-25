import { Environment } from "../entities";
import * as messages from "../messages";

export function publish(log: typeof console.log = console.log): void {
    const env = Environment();
    const message = [
        messages.build(env),
        messages.report(env),
    ].join("\t");
    log(message);
}
