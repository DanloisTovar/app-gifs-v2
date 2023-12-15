import { useEffect, useState } from 'react';

export const Cards = () => {
    // url:
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1I5mQGrImzz5wRXT8OQBMZksvdBF2bLe&q=GOKU&limit=50`;
    const [gifts, setGifts] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGifts(data.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            {gifts.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm rounded overflow-hidden shadow-lg m-4"
                >
                    <img
                        className="w-full"
                        src={item.image}
                        alt="Imagen de la tarjeta"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {item.title}
                        </div>
                        <p className="text-gray-700 text-base">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
