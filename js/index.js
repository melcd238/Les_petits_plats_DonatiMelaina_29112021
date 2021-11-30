import { recipes } from "./data/recipes.js";
import DisplayRecipes from "./displayRecipes.js";
import DisplayList from "./displayList.js";

// Affichage des recettes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 

recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });

// Reccupération des tableaux pour pouvoir faire les listes.
let ingredientArray = [];
let ustensilesArray = [];
let appareilArray = [];

function getAllIngredient (){
    recipes.forEach((recipe) =>{
        ingredientArray.push(recipe.ingredients[0].ingredient)
    })
    let ignArray = Array.from(new Set(ingredientArray))
    ingredientArray = ignArray
    console.log(ingredientArray)
   
}
getAllIngredient()


function getAllUstensils (){
    recipes.forEach((recipe) =>{
        ustensilesArray.push(recipe.ustensils)
   })
   let ustensilArray = [...new Set([].concat(...ustensilesArray))]
   ustensilesArray = ustensilArray
   console.log(ustensilesArray)
}
getAllUstensils()

function getAllAppliance () { 
    recipes.forEach((recipe) =>{
        appareilArray.push(recipe.appliance)
   })
   let applianceArray = Array.from(new Set(appareilArray))
   appareilArray = applianceArray
   console.log(appareilArray)
 }

 getAllAppliance()