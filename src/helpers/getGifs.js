export const getGifs = async (value) => {
	// url:
	/*
!aca se debe cambiar el nombre de la variable "onAddInfoCategoriesForCard" al prop o variable que se va usar en el componente!!
*/
	const url = `https://api.giphy.com/v1/gifs/search?api_key=1I5mQGrImzz5wRXT8OQBMZksvdBF2bLe&q=${value}&limit=20`;

	const response = await fetch(url);
	const { data = [] } = await response.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));

	// console.log(gifs);

	return gifs;
};
