import { recipes } from "./data/recipes.js";
import { ingredientArray , appareilArray , ustensilesArray, getAll } from './utils/sortList.js'
import DisplayRecipes from "./class/displayRecipes.js";
import { DisplayList } from './class/displayList.js';
import { openDropdown, closeDropdown  } from './utils/dropDown.js';



// Affichage des recettes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 

recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });

 // Affichage des listes
let listLi = new DisplayList(ingredientArray, appareilArray , ustensilesArray);
console.log(listLi)
listLi.createListeLi(); 

// Ouvrir les dropDown
openDropdown()

// Fermer les dropDown
closeDropdown()




