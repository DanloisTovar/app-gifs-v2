import { useState, useEffect } from 'react';
import { getGifs } from '../helpers';

export const UseFetch = (value) => {
	const [gifts, setGifts] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	//    functions:
	const getNewGifs = async () => {
		const newGif = await getGifs(value);
		setGifts(newGif);
		setisLoading(false);
	};

	useEffect(() => {
		/* getGifs(onAddInfoCategoriesForCard).then(setGifts); */
		getNewGifs();
	}, []);

	return { gifts, isLoading };
};
