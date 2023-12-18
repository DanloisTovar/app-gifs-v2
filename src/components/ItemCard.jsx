import PropTypes from 'prop-types';
export const ItemCard = ({ id, title, url }) => {
	return (
		<>
			<div
				key={id}
				className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col"
				/* style={{ height: '450px' }} tamaño de tarjeta*/
			>
				<div className="w-full h-64 overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src={url}
						alt="Imagen de la tarjeta"
					/>
				</div>
				<div className="px-6 py-4 flex-grow">
					<div className="font-bold text-xl mb-2">{title}</div>
				</div>
			</div>
		</>
	);
};
ItemCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
