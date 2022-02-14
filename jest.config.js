// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
	testEnvironment: 'jsdom',
	testRegex: '/*.test.js$',
	collectCoverage: true,
	// coverageReporters: ['lcov', 'json', 'html'],
	coverageReporters: ['text', 'lcov', 'json'],
	// coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: -10,
		},
	},
	moduleDirectories: ['node_modules', 'src'],
};

module.exports = config;
