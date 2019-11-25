import { Environment } from "../entities";

export function report(
    env: Pick<Environment, "feedback"> = Environment()
): string {
    return `Report bugs and vulnerabilities at ` + env.feedback;
}
