import { recipes } from "./data/recipes.js";
import { ingredientArray , appareilArray , ustensilesArray, getAll } from './utils/sortList.js'
import DisplayRecipes from "./class/displayRecipes.js";
import DisplayListLi from "./class/displayList.js";


// Affichage des listes
let listLi = new DisplayListLi(ingredientArray, appareilArray , ustensilesArray);
console.log(listLi)
listLi.createListeLi();

// Affichage des recettes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 

recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });




