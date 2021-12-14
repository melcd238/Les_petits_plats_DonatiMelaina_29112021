import { recipes } from "./data/recipes.js";
import { ingredientArray , appareilArray , ustensilesArray, getAllList } from './utils/sortList.js'
import DisplayRecipes from "./class/displayRecipes.js";
import { DisplayList } from './class/displayList.js';
import { openDropdown, closeDropdown  } from './utils/dropDown.js';
import { searchByTag } from './utils/searchByTag.js';
import { mainSearch } from './utils/mainSearch.js';
import { replace } from './utils/replace.js';




// Affichage des recettes  et des listes dans le Dom
let recipeSelector = document.querySelector('#recipes-container') 
recipes.forEach((recipe) => {
    let article = new DisplayRecipes(recipe, recipeSelector);
    article.createCardRecipe();
  });
let listLi = new DisplayList(ingredientArray, appareilArray , ustensilesArray);
listLi.createListeLi(); 




// Recherche principale
const searchInput = document.querySelector('#mainSearch');
searchInput.addEventListener('input',(e)=>{
    let value = e.target.value;
   let searchItem = replace(value);
    let recipesList = [];
    if(value.length > 2){
      recipesList = recipes.filter((recipe)=>{
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
     console.log(recipesList);
  
    }
      
})

// Filtrer par Tag
let tagsArray = [];

// Au click sur un li, on affiche le tag 
const lis = Array.from(document.querySelectorAll('.itemLi'));
const listIngredient = document.querySelector('.list-ingredient-hide');
const listAppareil = document.querySelector('.list-appareil-hide ');
const listUstensil = document.querySelector('.list-ustensils-hide');


// Filtre des listes avec l'input des dropdown 
const inputsdropdownSearch = document.querySelectorAll('.input-search')
inputsdropdownSearch.forEach((input) => input.addEventListener('input', (e) =>{
        if(e.target.classList.contains('input-search-ingredient')){
           let option = replace(e.target.value); 
           let liIng = document.querySelectorAll('.liIngredient');
           liIng.forEach((li)=>{
             let value = li.dataset.value;
             if(!value.includes(option)){
                  li.style.display = "none";
             } else {
               li.style.display ="block";
             }
            })
        }
        if(e.target.classList.contains('input-search-appareil')){
          let option = replace(e.target.value); 
          let liApp = document.querySelectorAll('.liAppliance');
          liApp.forEach((li)=>{
            let value = li.dataset.value;
            if(!value.includes(option)){
                 li.style.display = "none";
            } else {
              li.style.display ="block";
            }
          })
        }
        if(e.target.classList.contains('input-search-ustensil')){
          let option = replace(e.target.value); 
          let liUs = document.querySelectorAll('.liUstensil');
          liUs.forEach((li)=>{
            let value = li.dataset.value;
            if(!value.includes(option)){
                 li.style.display = "none";
            } else {
              li.style.display ="block";
            }
          })
        }
}))


// function qui affiche les tag et qui lance la recherche 
function displaytags (lis) {
  const tagsContainer = document.querySelector('.tags');
  lis.forEach((li) => li.addEventListener('click',(e) =>{
    // condition pour ne pas afficher le doublon
  if(!tagsArray.includes(e.target.dataset.value)){
       // tableau de tag
        tagsArray.push(e.target.dataset.value)
     if(e.target.classList.contains('liIngredient')){
        tagsContainer.innerHTML += 
         `<div class="col-sm-auto btn-primary tag tagIngredient" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        // ferme la dropdown
        listIngredient.classList.add('hide');
        // function searchByTag 
         searchByTag(recipes, tagsArray)
        // function pour fermer le tag qui entraine une nouvelle recherche
        closeTag()
      }
      if(e.target.classList.contains('liAppliance')){
       tagsContainer.innerHTML +=  
         `<div class="col-sm-auto btn-success tag tagAppliance" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ;
         listAppareil.classList.add('hide');
         searchByTag(recipes, tagsArray)
        closeTag()
      }
      if(e.target.classList.contains('liUstensil')){
       tagsContainer.innerHTML +=
         `<div class="col-sm-auto btn-danger tag tagUstensil" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ;
         listUstensil.classList.add('hide');
         searchByTag(recipes, tagsArray)
         closeTag()
      }

 } else {
   // au click sur le li dans la liste, on cherche l'index correspondant dans le tableau et on supprime la valeur du tableau  
   let filtered = tagsArray.filter(item => item !== e.target.dataset.value);
   tagsArray = filtered
   console.log(tagsArray)
   // on lance une nouvelle recherche
     searchByTag(recipes, tagsArray)
   // on remove le tag
  if(e.target.classList.contains('liIngredient')){
    let tags = document.querySelectorAll('.tagIngredient');
    tags.forEach((tag)=>{
       if(tag.dataset.value == e.target.dataset.value){
         tag.remove()
       }
    })
      listIngredient.classList.add('hide');
 }
   if(e.target.classList.contains('liAppliance')){
    let tags = document.querySelectorAll('.tagAppliance')
    tags.forEach((tag)=>{
      if(tag.dataset.value == e.target.dataset.value){
        tag.remove()
      }
   })
      listAppareil.classList.add('hide');
   }
   if(e.target.classList.contains('liUstensil')){
    let tags = document.querySelectorAll('.tagUstensil')
    tags.forEach((tag)=>{
      if(tag.dataset.value == e.target.dataset.value){
        tag.remove()
      }
   })
       listUstensil.classList.add('hide');
  }
 }
 }));

}

// function closeTag au click sur le tag
function closeTag(){
  let cross = document.querySelectorAll('.crossTag');
  cross.forEach((btn)=> btn.addEventListener('click', (e)=>{
    // je remets mon tableau à jour
    let div = btn.closest('.tag');
    let filtered = tagsArray.filter(item => item !== div.dataset.value);
     tagsArray = filtered
   // relancer une recherche par tag 
    searchByTag(recipes, tagsArray)
    // Je remove le tag 
     div.remove();
  }))
}


displaytags(lis);
closeTag();
openDropdown()
closeDropdown()

export { displaytags }