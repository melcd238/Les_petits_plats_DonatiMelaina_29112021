import { recipes } from '../data/recipes.js';

// Reccupération des tableaux pour pouvoir faire les listes.
let ingredientArray = [];
let ustensilesArray = [];
let appareilArray = [];

const getAllIngredient = function(recipes){
    let allIngredient = [];
    recipes.forEach((recipe) => {
       recipe.ingredients.forEach((ingredient) =>{
           allIngredient.push(ingredient.ingredient)
       })
    })
    ingredientArray =  Array.from(new Set(allIngredient))
    
}

const getAllUstensils = function (recipes){
    let allustensiles = [];
    recipes.forEach((recipe) =>{
        allustensiles.push(recipe.ustensils)
   })
   ustensilesArray = [...new Set([].concat(...allustensiles))]
   
}

const getAllAppliance = function(recipes){
    let allAppliance = [];
    recipes.forEach((recipe) =>{
        allAppliance.push(recipe.appliance)
   })
   appareilArray = Array.from(new Set(allAppliance))
   
}

getAllIngredient(recipes)
getAllAppliance(recipes)
getAllUstensils(recipes)


export { ingredientArray , ustensilesArray, appareilArray }







