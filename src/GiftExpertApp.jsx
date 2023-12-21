import { useState } from 'react';
import './assets/styles';

// imagenes:

// components:
import { Navbar, Header, Footer, Cards, Formulario } from './components';

function GiftExpertApp() {
	// hooks:
	const [categories, setCategories] = useState(['']);

	// events or Functions:
	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);

		console.log(newCategory);
	};

	return (
		<>
			<div
				className="h-screen￼￼Buscar
goku"
			>
				<Navbar />
				<Header />
				<div className="container mx-auto">
					{/* Titulo */}
					<h1
						id="card-fancy"
						className="text-4xl font-bold text-indigo-500 m-10"
					>
						¡Encuentra tu GIF perfecto aquí!
					</h1>

					{/* formulario: */}
					<Formulario onAddNewCategory={onAddCategory} />

					{/* Cards Gifts */}
					{categories.map((category) => (
						<Cards
							key={category}
							onAddInfoCategoriesForCard={category}
						/>
					))}
				</div>
				{/* Footer */}
				<Footer />
			</div>
		</>
	);
}

export default GiftExpertApp;

/* 



*/
