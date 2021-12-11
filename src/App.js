import React from "react";
import { Axios } from "axios";
import "./key";
import "./App.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "4a5d8150";
  const YOUR_APP_KEY = "e19e2ba496f1dc507f0aad683d0f877e";

  var url = `https://api.edamam.com/search?q=&{query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Food Recipes</h1>
      <form className="app_form" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="Enter Recipe"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <div>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
