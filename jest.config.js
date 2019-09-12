//const { pathsToModuleNameMapper } = require('ts-jest/utils');
//const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest',
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    mapCoverage: true,
    moduleNameMapper: {
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1'
    }
};
