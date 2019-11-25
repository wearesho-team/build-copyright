# Build Copyright

Purpose: for internal usage.

## Install
```bash
npm i @sho-js/build-copyright@^1.1
```

## Usage
### Auto-configure Webpack

```js
import * as bc from "@sho-js/build-copyright/webpack";

// webpack.config.js
const configuration = {
    entry: ["./src/index.js"],
    plugins: [
        // your plugins here
    ],
};

return bc.webpack.append(
    configuration,
    /**
    * Module with application name, version and feedback link,
    * may be `package.json` etc.
    */
    "meta.json" 
);
```
### Manual set up
Add webpack.EnvironmentPlugin to set-up
```js
import * as bc from "@sho-js/build-copyright/webpack";

// webpack.config.js
return {
    entry: [bc.webpack.getEntry(), "./src/index.js"],
    plugins: [
        new bc.webpack.EnvironmentPlugin(
            "meta.json" // module with application name, version and feedback link
        ),
        // ... other plugins
    ]
};
```

## License
[MIT](./LICENSE)
