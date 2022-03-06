module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugin: [
      "module:react-native-dotenv",
      {
        "moduleName": "@env",
        "path": ".env",
      },
    ]
  };
};
