import PropTypes from 'prop-types';
import '../assets/styles/card.css';
import { ItemCard, Spinner } from '../components';
import { UseFetch } from '../hooks/';
import { useEffect, useState } from 'react';

export const Cards = ({ onAddInfoCategoriesForCard }) => {
	// hooks:
	const { gifts, isLoading } = UseFetch(onAddInfoCategoriesForCard);
	const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowTimeoutMessage(true);
		}, 10000); // 30 segundos

		// Limpia el temporizador si el componente se desmonta antes de que se agote el tiempo
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			{isLoading ? (
				<>
					{showTimeoutMessage ? (
						<p className="mt-4 text-indigo-500 font-bold text-center">
							No hay conexión con la API
						</p>
					) : (
						<Spinner />
					)}
				</>
			) : (
				<>
					<div className="flex justify-center items-center mb-4 min-h-0">
						<h1 className="text-indigo-500 text-5xl font-bold">
							{onAddInfoCategoriesForCard}
						</h1>
					</div>

					<div className="flex flex-wrap justify-around">
						{gifts.map((gif) => (
							<ItemCard
								key={gif.id}
								{...gif} /* exparsion de props */
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

Cards.propTypes = {
	onAddInfoCategoriesForCard: PropTypes.string.isRequired,
};
