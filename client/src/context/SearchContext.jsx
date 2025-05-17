import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const addIngredient = (ingredient) => {
    if (!ingredient.trim()) return;
    setIngredients((prev) => [
      ...new Set([...prev, ingredient.trim().toLowerCase()]),
    ]);
  };

  const removeIngredient = (ingredient) => {
    setIngredients((prev) => prev.filter((i) => i !== ingredient));
  };

  const clearSearchData = () => {
    setIngredients([]);
    setRecipes([]);
  };

  const value = {
    ingredients,
    setIngredients,
    addIngredient,
    removeIngredient,
    recipes,
    setRecipes,
    clearSearchData,
  };
  return (
    <SearchContext.Provider
      value={value}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
