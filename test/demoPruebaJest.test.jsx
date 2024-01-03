describe('Prueba de ambiente de Jest!', () => {
	test('should', () => {
		console.log('Corriendo test de prueba!');
	});

	// Comprobar que un número es mayor a cero
	const isPositive = (n) => n > 0;
	test('isPositive should return true when the value is positive', () => {
		expect(isPositive(-1)).toBeTruthy(); // El resultado se
		// comprueba con toBeTruth
		// y devuelve true si el valor es verdadero, false en caso contr
		//ario
	});
});
