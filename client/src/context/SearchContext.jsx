import {createContext, useState} from 'react';

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [ingredients,setIngredients]=useState([]);

    const addIngredient = (ingredient)=>{
        if(!ingredient.trim()) return;
        setIngredients((prev)=>[...new Set([...prev,ingredient.trim().toLowerCase()])]);

    };
     const removeIngredient = (ingredient) => {
       setIngredients((prev) => prev.filter((i) => i !== ingredient));
     };
    return (
        <SearchContext.Provider 
        value={{
            ingredients,setIngredients,addIngredient
            ,removeIngredient}}>
                {children}
        </SearchContext.Provider>
    )
};
export default SearchProvider