import { isBuildProcessEnv } from "../utils/is-build-env";
import { BuildProcessEnv } from "./build-env";

export interface Environment {
    time: string;
    version: string;
    name: string;
    feedback: string;
}

export function Environment(
    processEnv: NodeJS.ProcessEnv | BuildProcessEnv = process.env
): Readonly<Environment> {
    if (!isBuildProcessEnv(processEnv)) {
        throw new Error("Invalid process.env: missing build environment");
    }
    const time = processEnv.BUILD_TIME || "2011-04-11T21:00:00.000Z";
    const name = processEnv.BUILD_NAME || "app";
    const version = processEnv.BUILD_VERSION || "1.0.0";
    const feedback = processEnv.BUILD_FEEDBACK || "https://wearesho.com/";
    return Object.freeze({ time, name, version, feedback });
}
