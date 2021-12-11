import { replace } from './replace.js';
import DisplayRecipes from './../class/displayRecipes.js';
import { getAllList } from './sortList.js';
import { DisplayList } from './../class/displayList.js';
import { displaytags } from './../index.js'


function searchByTag(recettes , option){
    let recipeSelector = document.querySelector('#recipes-container')
    let newRecettes = recettes;
      let newRecipes =[];
  if(option.length > 0){
      newRecettes.forEach((newRecette )=> {
          // je récupère la liste des tag a tester
          let tagToTest = [];
          newRecette.ingredients.forEach((ingredient) =>{
              tagToTest.push(replace(ingredient.ingredient))
          });
              tagToTest.push(replace(newRecette.appliance));
          newRecette.ustensils.forEach((ustensil)=>{
              tagToTest.push(replace(ustensil))
          })
          if(typeof option === "string"){
              if(tagToTest.includes(option)){
                  newRecipes.push(newRecette)
              }
          } else {
              let test =[]
              option.forEach((elt) =>{
                  if(tagToTest.includes(elt)){
                      test.push(true)
                  }else {
                      test.push(false)
                  }
              });
              if(test.every((test) => test === true)){
                newRecipes.push(newRecette)
              }
          }
      });
      // on supprime les doublons avec un set 
      newRecipes = Array.from(new Set(newRecipes))
      // on affiche les recettes
      // Affichage des recettes dans le Dom
     recipeSelector.innerHTML = '';
     newRecipes.forEach((recipe)=>{
        let article = new DisplayRecipes(recipe, recipeSelector);
        article.createCardRecipe();
     }) 
     // Affichage des listes 
    let arrayLi = getAllList(newRecipes);
     let listLi = new DisplayList(arrayLi[0], arrayLi[1] , arrayLi[2]);
     listLi.createListeLi(); 
     const lis = Array.from(document.querySelectorAll('.itemLi'));
     displaytags(lis)
    

  } else {
      newRecipes = recettes;
            // Affichage des recettes dans le Dom
    recipeSelector.innerHTML = '';
     newRecipes.forEach((recipe)=>{
        let article = new DisplayRecipes(recipe, recipeSelector);
        article.createCardRecipe();
     }) 
      // Affichage des listes
      let arrayLi = getAllList(newRecipes);
      const ulIngredient = document.querySelector('#dropdown-search-list-ingredients');
      const ulAppliance = document.querySelector('#dropdown-search-list-appareil');
      const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles')
      ulIngredient.innerHTML='';
      ulAppliance.innerHTML='';
      ulUstensil.innerHTML='';
      let listLi = new DisplayList(arrayLi[0], arrayLi[1] , arrayLi[2]);
      listLi.createListeLi(); 
      const lis = Array.from(document.querySelectorAll('.itemLi'));
      displaytags(lis)
     
      
  }
}

export { searchByTag }