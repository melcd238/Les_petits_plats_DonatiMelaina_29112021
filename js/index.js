import { recipes } from "./data/recipes.js";
import DisplayRecipes from "./displayRecipes.js";
import DisplayList from "./displayList.js";

// Affichage des recettes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 

recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });

// Affichage des listes des dropdown 
let ingredientArray = [];
let ustensilesArray = [];
let appareilArray = [];


