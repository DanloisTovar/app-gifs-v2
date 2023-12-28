## Pruebas de PropTypes para el componente ItemCard

### Descripción

Estas pruebas verifican si las PropTypes del componente `ItemCard` están configuradas correctamente para las propiedades `id`, `title`, y `url`. Se utilizan valores simulados para asegurarse de que las PropTypes se comporten según lo esperado cuando se pasan propiedades válidas.

### Código de Prueba

```javascript
describe('ItemCard component PropTypes', () => {
	test('verifica las PropTypes de ItemCard', () => {
		const consoleErrorSpy = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		const propTypesErrorId = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' },
			'prop',
			'id',
		);

		const propTypesErrorTitle = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' },
			'prop',
			'title',
		);

		const propTypesErrorUrl = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' },
			'prop',
			'url',
		);

		expect(propTypesErrorId).toBeUndefined();
		expect(propTypesErrorTitle).toBeUndefined();
		expect(propTypesErrorUrl).toBeUndefined();
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});
});
```

### Resultados Esperados

## propTypesErrorId: Se espera que sea undefined si la PropTypes para id está configurada correctamente.

## propTypesErrorTitle: Se espera que sea undefined si la PropTypes para title está configurada correctamente.

## propTypesErrorUrl: Se espera que sea undefined si la PropTypes para url está configurada correctamente.

## consoleErrorSpy: Se espera que no se haya llamado a console.error() indicando errores en las PropTypes.

## Observaciones

Los valores simulados proporcionados para id, title, y url representan propiedades válidas para las PropTypes del componente ItemCard.
Estas pruebas deben ejecutarse sin errores si las PropTypes están correctamente configuradas para el componente.

## Test de Snapshot para el componente ItemCard

### Descripción

Este test de snapshot garantiza que la representación visual del componente `ItemCard` coincida con la última versión capturada en el snapshot. Captura la estructura y la apariencia del componente en un estado específico y lo compara con una versión previamente guardada para detectar cambios inesperados.

### Código de Prueba

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import { ItemCard } from './ItemCard'; // Asegúrate de importar el componente adecuadamente

describe('ItemCard component Snapshot', () => {
	test('snapshot del componente ItemCard coincide con la última versión', () => {
		const { asFragment } = render(
			<ItemCard
				id="123"
				title="Title"
				url="https://example.com/image.jpg"
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
```

### Resultados Esperados

El test de snapshot crea o actualiza un archivo que contiene la representación visual del componente ItemCard en un estado específico. En ejecuciones futuras, comparará esta representación con el snapshot previamente guardado para detectar cambios.

### Observaciones

Los snapshots se guardan automáticamente en un archivo. Cualquier cambio intencional en la estructura o apariencia del componente requerirá una actualización del snapshot guardado.
Para actualizar el snapshot, ejecuta las pruebas con la opción -u o --updateSnapshot (jest -u) para confirmar los cambios y sobrescribir el snapshot existente si los cambios son válidos.
