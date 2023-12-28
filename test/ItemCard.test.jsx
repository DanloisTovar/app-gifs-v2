import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { ItemCard } from '../src/components'; // Asegúrate de importar el componente adecuadamente
/* Proptypes: */
describe('ItemCard component PropTypes', () => {
	test('verifica las PropTypes de ItemCard', () => {
		const consoleErrorSpy = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		const propTypesErrorId = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' },
			// Valores simulados para las pruebas
			'prop',
			'id',
		);

		const propTypesErrorTitle = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' }, // Valores simulados para las pruebas
			'prop',
			'title',
		);

		const propTypesErrorUrl = PropTypes.checkPropTypes(
			ItemCard.propTypes,
			{ id: '123', title: 'Title', url: 'https://example.com/image.jpg' }, // Valores simulados para las pruebas
			'prop',
			'url',
		);

		expect(propTypesErrorId).toBeUndefined();
		expect(propTypesErrorTitle).toBeUndefined();
		expect(propTypesErrorUrl).toBeUndefined();
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});
});

/* Snapshot: */
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
