module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigation: './src/navigation',
          routes: './src/routes',
          state: './src/state',
          styles: './src/styles',
          utils: './src/utils',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        root: './src',
      },
    ],
    'dynamic-import-node',
    'graphql-tag',
    'import-graphql',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
