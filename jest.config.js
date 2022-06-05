module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '^[@./a-zA-Z0-9$_-]+\\.(png|jpg|wav|mp4)$':
      '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
    'assets/icons/(.*)': '<rootDir>/jest/svgMock.ts',
  },
  modulePaths: ['<rootDir>/src/'],
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest/common-mocks.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/', '__generated__'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native-community|@react-native.*|react-native.*|@?react-navigation.*)/)',
  ],
};
