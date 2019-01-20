module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/jest-configs/preprocessor.js',
  },
  setupTestFrameworkScriptFile: './jest-configs/mocks/index.js',
}
