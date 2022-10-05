const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  bail: 10,
  coverageDirectory: 'testCoverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,}',
    '!**/*.d.{ts,}',
    '!**/test.{ts,}',
    '!**/spec.{ts,}',
    '!**/*.test.{ts,}',
    '!**/*.spec.{ts,}',
    '!src/**/__test__/**/*',
    '!src/**/__test__/*',
    '!src/**/__tests__/**/*',
    '!src/**/__tests__/*',
    '!src/**/__mock__/**/*',
    '!src/**/__mock__/*',
    '!src/**/__mocks__/*',
    '!src/**/__mocks__/**/*',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  maxWorkers: '1',
  moduleDirectories: ['node_modules', '<rootDir>/src/utils/tests'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'd.ts', 'tsx', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  clearMocks: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/configs/jest/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/setup.postenv.ts'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/setup.postenv.ts'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};