import { createContext, useState, useContext, useEffect } from "react";

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState(() => {
    const saved = localStorage.getItem("leftoverlyIngredients");
    return saved ? JSON.parse(saved) : [];
  });

  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("leftoverlyRecipes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever these states change
  useEffect(() => {
    localStorage.setItem("leftoverlyRecipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("leftoverlyIngredients", JSON.stringify(ingredients));
  }, [ingredients]);

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
    localStorage.removeItem("leftoverlyIngredients");
    localStorage.removeItem("leftoverlyRecipes");
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