import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import replace from '@rollup/plugin-replace';

const extensions = [".ts", ".tsx",];

export default () => {
    const {
        dependencies = {},
        peerDependencies = {},
        module,
        main,
        entry,
        name,
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
        }),
        replace({
            'process.env.PACKAGE_NAME': JSON.stringify(name),
            'process.env.PACKAGE_ENTRY_MAIN': JSON.stringify(entry.main),
            'process.env.PACKAGE_ENTRY_MODULE': JSON.stringify(entry.module),
        }),
    ];

    function bundle(input, output) {
        return { input, output, plugins, external, };
    }

    return [
        bundle('src/index.ts', [
            { file: module, format: 'es' },
            { file: main, format: 'cjs' },
        ]),
        bundle("src/entry.ts", [
            { file: entry.main, format: "cjs", },
            { file: entry.module, format: "es", },
        ]),
    ];
}
