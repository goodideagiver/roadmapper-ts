const config = {
	verbose: true,
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.css$': 'jest-css-modules-transform',
	},
};

module.exports = config;
