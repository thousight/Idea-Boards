// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['jest-expo'],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|react-navigation|native-base|victory-*)/)',
    ],
  }
}
