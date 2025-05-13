import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext); // helpful shortcut

const SearchProvider = ({ children }) => {
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
    setIngredients([]); // ✅ reset ingredients to empty array
    setRecipes([]); // ✅ reset recipes to empty array
  };

  return (
    <SearchContext.Provider
      value={{
        ingredients,
        setIngredients,
        addIngredient,
        removeIngredient,
        recipes,
        setRecipes,
        clearSearchData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
