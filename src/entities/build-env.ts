import { Environment } from "./environment";
import { Meta } from "./meta";

export interface BuildProcessEnv {
    BUILD_TIME: string;
    BUILD_VERSION: string;
    BUILD_NAME: string;
    BUILD_FEEDBACK: string;
}

export const BuildProcessEnvKeys: Array<keyof BuildProcessEnv> = [
    "BUILD_TIME",
    "BUILD_VERSION",
    "BUILD_NAME",
    "BUILD_FEEDBACK",
];

export function BuildProcessEnv(source: Environment | Meta): BuildProcessEnv {
    return {
        BUILD_VERSION: source.version,
        BUILD_NAME: source.name,
        BUILD_TIME: ("time" in source) ? source.time : (new Date).toISOString(),
        BUILD_FEEDBACK: source.feedback || "https://wearesho.com/",
    };
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Partial<BuildProcessEnv> {
        }
    }
}
