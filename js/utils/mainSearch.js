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
   const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles')
   let value = option;
   let searchItem = replace(value);
   let uniqueRecettes =[];
   if(value.length > 2){
     console.time()
     console.log(searchItem)
      for (let i = 0; i < recipes.length; i++) {
         if (replace(recipes[i].name).indexOf(searchItem)>= 0 || replace(recipes[i].description).indexOf(searchItem)>=0) {
                recettes.push(recipes[i]); 
            } 
        
       
         for(let i = 0; i < recipes.ingredients ; i++){
            if( replace(recipes.ingredients[i].ingredient).indexOf(searchItem) >=0){
              
               recettes.push(recipes[i]);
          }
         
    }
      }
      for(let i = 0; i < recettes.length; i++){
         if(uniqueRecettes.indexOf(recettes[i]) === -1){
            uniqueRecettes.push(recettes[i]);
         }
   }
     recettes = uniqueRecettes;
     // Affichage des recettes
     console.log(recettes);
     console.timeEnd()
   if(recettes.length> 0){
         recipeSelector.innerHTML = '';
         for (let i = 0; i < recettes.length ; i++){
            let article = new DisplayRecipes(recettes[i], recipeSelector);
            article.createCardRecipe();
         }
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
     for (let i = 0; i < recettes.length ; i++){
      let article = new DisplayRecipes(recettes[i], recipeSelector);
      article.createCardRecipe();
   }
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