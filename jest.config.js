// jest.config.js

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  transformIgnorePatterns: ['node_modules/(?!@ngrx | @ionic-native)']
}
