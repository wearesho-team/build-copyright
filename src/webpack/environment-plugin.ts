import * as webpack from "webpack";
import * as utils from "../utils";

export class EnvironmentPlugin extends webpack.EnvironmentPlugin {
    constructor(metaFile: string = "meta.json") {
        const environmentKeys = utils.inject(metaFile);
        super(environmentKeys);
    }
}
