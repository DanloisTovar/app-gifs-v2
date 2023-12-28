/* eslint-disable no-undef */
module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/mocks/fileMock.js',
		'^/src/assets/img/giphy_logo.png$':
			'<rootDir>/src/assets/img/giphy_logo.png', // Añade esta línea para mapear específicamente la ruta del archivo de imagen
	},
};
