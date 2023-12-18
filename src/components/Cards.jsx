import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import '../assets/styles/card.css';
import { ItemCard } from './ItemCard';

export const Cards = ({ onAddInfoCategoriesForCard }) => {
	// hooks:
	const [gifts, setGifts] = useState([]);

	//    functions:

	const getNewGifs = async () => {
		const newGif = await getGifs(onAddInfoCategoriesForCard);
		setGifts(newGif);
	};

	useEffect(() => {
		/* getGifs(onAddInfoCategoriesForCard).then(setGifts); */
		getNewGifs();
	}, []);

	return (
		<>
			<div className="flex justify-center items-center min-h-screen mb-4 min-h-0">
				<h1 className="text-indigo-500 text-5xl font-bold">
					{onAddInfoCategoriesForCard}
				</h1>
			</div>

			<div className="flex flex-wrap justify-around">
				{gifts.map((gif) => (
					<ItemCard key={gif.id} {...gif} /* exparsion de props */ />
				))}
			</div>
		</>
	);
};

Cards.propTypes = {
	onAddInfoCategoriesForCard: PropTypes.string.isRequired,
};
