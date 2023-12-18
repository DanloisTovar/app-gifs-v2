import PropTypes from 'prop-types';
import { useState } from 'react';

export const Formulario = ({ onAddNewCategory }) => {
    // hooks:
    const [inputValue, setInputValue] = useState('');
    // events:
    const onHandleChange = ({ target }) => {
        setInputValue(target.value);
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onAddNewCategory(inputValue.trim());
        setInputValue('');
    };
    return (
        <div className="container flex items-center justify-center ">
            <form
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-sm p-5"
                onSubmit={onHandleSubmit}
            >
                <div className="flex items-center border-b-2 border-indigo-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        value={inputValue}
                        placeholder="¿Que gif deseas?"
                        onChange={onHandleChange}
                    />
                    <button
                        className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                        onClick={onHandleSubmit}
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
};
Formulario.propTypes = {
    onAddNewCategory: PropTypes.func.isRequired,
};
