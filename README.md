# Build Copyright

Purpose: for internal usage.

## Install
```bash
npm i @sho-js/build-copyright
```

## Usage
### Auto-configure Webpack

```js
import { withBuildCopyright } from "@sho-js/build-copyright/webpack"
// webpack.config.js

const config = {
    entry: ["./src/index.js"],
    plugins: [
        // your plugins here
    ],
};

return withBuildCopyright(
    config, // your webpack config 
    "meta.json" // module with application name, version and feedback link
);
```
### Manual set up
Add webpack.EnvironmentPlugin to set-up
```js
import * as bc from "@sho-js/build-copyright/webpack";

// webpack.config.js
return {
    entry: [bc.getEntry(), "./src/index.js"],
    plugins: [
        new bc.EnvironmentPlugin(
            "meta.json" // module with application name, version and feedback link
        ),
        // ... other plugins
    ]
};
```

## License
[MIT](./LICENSE)
