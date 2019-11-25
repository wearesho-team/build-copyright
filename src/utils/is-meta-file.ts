import { MetaFile } from "../entities/meta";

export const isMetaFile = (file: MetaFile | any): file is MetaFile => {
    // noinspection SuspiciousTypeOfGuard
    return ("object" === typeof file)
        && ("string" === typeof file.version)
        && ("string" === typeof file.name);
};
