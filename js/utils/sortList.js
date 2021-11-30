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

function getAll (recipes){
    getAllIngredient(recipes)
    getAllAppliance(recipes)
    getAllUstensils(recipes)  
}

console.log(ingredientArray)
console.log(ustensilesArray)
console.log(appareilArray )


export { ingredientArray , ustensilesArray, appareilArray , getAll }







