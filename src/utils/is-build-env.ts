import { BuildProcessEnv, BuildProcessEnvKeys } from "../entities/build-env";

export const isBuildProcessEnv = (
    env: NodeJS.ProcessEnv | BuildProcessEnv
): env is BuildProcessEnv => {
    for(const key of BuildProcessEnvKeys) {
        if (!(key in env) || ("string" !== typeof env[key])) {
            return false;
        }
    }
    return true;
};
