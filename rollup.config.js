import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".ts", ".tsx",];

export default () => {
    const {
        dependencies = {},
        peerDependencies = {},
        module = "dist/index.esm.js",
        main = "dist/index.cjs.js",
        webpackModule = "dist/webpack.mjs",
        bootstrapModule = "dist/bootstrap.mjs",
    } = require(`./package.json`);
    const external = Object.keys(dependencies).concat(Object.keys(peerDependencies));
    const plugins = [
        resolve({ extensions, dedupe: ['webpack',], preferBuiltins: true, }),
        babel({
            exclude: ['node_modules/**'],
            extensions,
            "presets": [
                [
                    "@babel/env",
                    {
                        "targets": {
                            "browsers": [
                                "last 2 Chrome versions",
                                "last 1 Safari versions"
                            ]
                        },
                        "modules": false
                    }
                ],
                "@babel/typescript",
                "@babel/react",
            ]
        })
    ];

    function bundle(input, output, additionalExternal = []) {
        return {
            input,
            output,
            plugins,
            external: [...additionalExternal, ...external],
        };
    }

    return [
        bundle('src/index.ts', [
            { file: module, format: 'es' },
            { file: main, format: 'cjs' },
        ]),
        bundle("src/webpack.ts", [
            { file: webpackModule, format: "es", },
        ], ["path"]),
        bundle("src/bootstrap.ts", [
            { file: bootstrapModule, format: "es", },
        ]),
    ];
}
