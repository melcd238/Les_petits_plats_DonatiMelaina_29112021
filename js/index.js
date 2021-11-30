import { recipes } from "./data/recipes.js";
import { ingredientArray , ustensilesArray, appareilArray } from './utils/sortList.js'
import DisplayRecipes from "./class/displayRecipes.js";
import DisplayList from "./class/displayList.js";

// Affichage des recettes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 

recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });

// Affichage des listes
let listLi = new DisplayList(ingredientArray , ustensilesArray, appareilArray);
listLi.createListLi();
