import { render } from '@testing-library/react';
import { Cards } from '../src/components'; // Asegúrate de tener la ruta correcta a tu componente

describe('Cards Component Snapshot', () => {
	it('should match the snapshot', () => {
		const mockProps = {
			onAddInfoCategoriesForCard: 'Hello',
		};

		const { asFragment } = render(<Cards {...mockProps} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
jest.mock('../src/hooks', () => ({
	UseFetch: jest.fn(() => ({ gifts: [], isLoading: true })),
}));

describe('Cards Component Loading State', () => {
	it('should not display timeout message initially when loading', () => {
		const mockProps = {
			onAddInfoCategoriesForCard: 'Hello',
		};

		const { queryByText } = render(<Cards {...mockProps} />);
		const timeoutMessage = queryByText('No hay conexión con la API');

		expect(timeoutMessage).toBeNull();
	});
});
