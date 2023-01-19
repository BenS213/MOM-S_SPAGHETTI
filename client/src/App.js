import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("http://localhost:5000/recipes");
      const fetchedRecipes = await response.json();
      setRecipes(fetchedRecipes);
    }
    getRecipes();
  }, [recipes]);

  const addRecipe = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/recipes", {
      method: "POST",
      body: JSON.stringify({
        title: input,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setInput("");
  };


  return (
    <div className="App">
      <div className=" container mx-auto bg-gray-500 flex justify-center text-white p-4 gap-4">
        <form onSubmit={addRecipe}>
          <label htmlFor="search" className="text-center">
            Search for recipes
          </label>
          <input
            id="search"
            value={input}
            className="content-center text-black"
            type="text"
            placeholder="mom's spaghetti"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <ul className="container mx-auto text-center">
        {recipes.map((recipe) => (
          <li>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
