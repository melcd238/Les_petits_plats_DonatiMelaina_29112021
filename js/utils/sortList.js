import { recipes } from '../data/recipes.js';

// Reccupération des tableaux pour pouvoir faire les listes.
let ingredientArray = [];
let ustensilesArray = [];
let appareilArray = [];

const getAllIngredient = function(recipes){
    let allIngredient = [];
    recipes.forEach((recipe) =>{
        ingredientArray.push(recipe.ingredients[0].ingredient)
    })
    allIngredient = Array.from(new Set(ingredientArray))
    ingredientArray = allIngredient
    return ingredientArray

}

const getAllUstensils = function (recipes){
    let allustensiles = [];
    recipes.forEach((recipe) =>{
        ustensilesArray.push(recipe.ustensils)
   })
   allustensiles = [...new Set([].concat(...ustensilesArray))]
   ustensilesArray = allustensiles
   return  ustensilesArray
}

const getAllAppliance = function(recipes){
    let allAppliance = [];
    recipes.forEach((recipe) =>{
        appareilArray.push(recipe.appliance)
   })
   allAppliance = Array.from(new Set(appareilArray))
   appareilArray = allAppliance
   return appareilArray
}

getAllIngredient(recipes)
getAllAppliance(recipes)
getAllUstensils(recipes)

console.log(ingredientArray)
console.log(ustensilesArray)
console.log(appareilArray )


export { ingredientArray , ustensilesArray, appareilArray }







