import React,{useState, useContext} from 'react'
import { SearchContext } from '../context/SearchContext'
const SearchBar = () => {

  const [input, setInput] = useState('');
  const {ingredients,setIngredients,addIngredient,removeIngredient}=useContext(SearchContext);

  const handleAdd = (e) =>{
    e.preventDefault();
    addIngredient(input);
    setInput('');
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an Ingredient"
          className="border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add
        </button>
      </form>

      <div className="flex gap-2 flex-wrap mt-4">
        {ingredients.map((ingredient, idx) => (
          <div
            key={idx}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-1"
          >
            {ingredient}
            <button onClick={()=>removeIngredient(ingredient)} className='text-red-600 hover:text-red-700'>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;