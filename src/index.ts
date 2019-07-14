function importAll(contextLoader: __WebpackModuleApi.RequireContext) {
  contextLoader.keys().forEach(id => console.log(contextLoader(id)));
}

const contextLoader = require.context('./demos', true, /\.ts/);
importAll(contextLoader);
