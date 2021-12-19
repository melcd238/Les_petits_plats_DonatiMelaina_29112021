import { replace } from './replace.js';
import DisplayRecipes from './../class/displayRecipes.js';
import { getAllList } from './sortList.js';
import { DisplayList } from './../class/displayList.js';
import { displaytags } from './../index.js';
import { recipes } from './../data/recipes.js';

function mainSearch(recettes , option ){
   // La recherche se fait par le name, les ingrédients ou la description
   let recipeSelector = document.querySelector('#recipes-container')
   const searchInput = document.querySelector('#mainSearch');
   const ulIngredient = document.querySelector('#dropdown-search-list-ingredients');
   const ulAppliance = document.querySelector('#dropdown-search-list-appareil');
   const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles');
   let value = option;
   let searchItem = replace(value);
   if(value.length > 2){
        recettes = recipes.filter((recipe)=>{
        const testMatchNameOrDescriptio = replace(recipe.name).includes(searchItem) || replace(recipe.description).includes(searchItem);
        const testMatchIngredient = recipe.ingredients.some((ingredient) =>{
                      replace(ingredient.ingredient).includes(searchItem)
         });
         // some() renvoit un bouleen si au moins une des valeurs du tableau correspond au searchItem 
       if(testMatchNameOrDescriptio || testMatchIngredient){
         return true
       } else {
         return false
       }
     });
     // Affichage des recettes
     console.log(recettes);
   if(recettes.length> 0){
         recipeSelector.innerHTML = '';
         recettes.forEach((recipe)=>{
            let article = new DisplayRecipes(recipe, recipeSelector);
            article.createCardRecipe();
          })
     // Affichage des listes
        let arrayLi = getAllList(recettes);
        ulIngredient.innerHTML='';
        ulAppliance.innerHTML='';
        ulUstensil.innerHTML='';
       let listLi = new DisplayList(arrayLi[0], arrayLi[1] , arrayLi[2]);
       listLi.createListeLi();
       const lis = Array.from(document.querySelectorAll('.itemLi')); 
       displaytags (lis)
   } else {
     recipeSelector.innerHTML = '';
     recipeSelector.innerHTML = `<div> <p> Auncune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes", "poisson", etc </p></div>`;
   }
   } else if(value.length<=0){
     recettes = recipes;
     recipeSelector.innerHTML = '';
     recettes.forEach((recipe)=>{
       let article = new DisplayRecipes(recipe, recipeSelector);
       article.createCardRecipe();
     });
     let arrayLi = getAllList(recettes);
     ulIngredient.innerHTML='';
     ulAppliance.innerHTML='';
     ulUstensil.innerHTML='';
    let listLi = new DisplayList(arrayLi[0], arrayLi[1] , arrayLi[2]);
    listLi.createListeLi();
    const lis = Array.from(document.querySelectorAll('.itemLi')); 
    displaytags (lis)
    } 
    
}

export { mainSearch }