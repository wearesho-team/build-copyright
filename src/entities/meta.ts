import { isMetaFile } from "../utils/is-meta-file";

export type Meta = Pick<MetaFile, "name" | "version" | "feedback">;

export type MetaFile = {
    name: string;
    version: string;
    feedback?: string;
    [ k: string ]: any;
}

export function Meta(file: MetaFile): Readonly<Meta> {
    if (!isMetaFile(file)) {
        throw new Error(`File is not valid MetaFile.`);
    }
    const meta: Meta = {
        name: file.name,
        version: file.version,
    };
    if ("feedback" in file) {
        meta.feedback = file.feedback;
    }
    return Object.freeze(meta);
}
