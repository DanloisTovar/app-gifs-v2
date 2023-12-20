import '../assets/styles/card.css';
export const Spinner = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center min-h-5 m-5">
				<div className="custom-loader"></div>
				<p className="mt-4 text-indigo-500 font-bold">Cargando...</p>
			</div>
		</>
	);
};
