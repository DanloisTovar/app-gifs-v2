import { useState } from 'react';
import './assets/styles/App.css';
// imagenes:

// components:
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';

function App() {
    const [categories, setCategories] = useState(['Goku']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <div>
            <Navbar />
            <Header />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-indigo-500 m-2">
                    App Gift
                </h1>

                <Cards getinfo={onAddCategory} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
