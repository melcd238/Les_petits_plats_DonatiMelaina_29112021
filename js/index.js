import { recipes } from "./data/recipes.js";
import { ingredientArray , appareilArray , ustensilesArray, getAllList } from './utils/sortList.js'
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
listLi.createListeLi(); 

// Ouvrir les dropDown
openDropdown()

// Fermer les dropDown
closeDropdown()

// variable pour stocker le tableau de recette
let firstRecipes = recipes;
console.log(firstRecipes)

// Filtrer par Tag
let tagsArray = [];

// Au click sur un li, on affiche le tag 
const lis = Array.from(document.querySelectorAll('.itemLi'));
const listIngredient = document.querySelector('.list-ingredient-hide');
const listAppareil = document.querySelector('.list-appareil-hide ');
const listUstensil = document.querySelector('.list-ustensils-hide');





function displaytags () {
  const tagsContainer = document.querySelector('.tags');
  lis.forEach((li) => li.addEventListener('click',(e) =>{
    // condition pour ne pas afficher le doublon
  if(!tagsArray.includes(e.target.dataset.value)){
     if(e.target.classList.contains('liIngredient')){
        tagsContainer.innerHTML += 
         `<div class="col-sm-auto btn-primary tag tagIngredient" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        // ferme la dropdown
        listIngredient.classList.add('hide');
        // function searchByTag
        closeTag()
      }
      if(e.target.classList.contains('liAppliance')){
       tagsContainer.innerHTML +=  
         `<div class="col-sm-auto btn-success tag tagAppliance" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ;
         // ferme la dropdown
         listAppareil.classList.add('hide');
         // function searchByTag
        closeTag()
      }
      if(e.target.classList.contains('liUstensil')){
       tagsContainer.innerHTML +=
         `<div class="col-sm-auto btn-danger tag tagUstensil" data-value='${e.target.dataset.value}'>${e.target.textContent} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ;
         // ferme la dropdown
         listUstensil.classList.add('hide');
         // function searchByTag
         closeTag()
      }
      // tableau de tag
      tagsArray.push(e.target.dataset.value)
      console.log(tagsArray)
 } else {
   // au click sur le li dans la liste, on cherche l'index correspondant dans le tableau et on supprime la valeur du tableau  
   let filtered = tagsArray.filter(item => item !== e.target.dataset.value);
   tagsArray = filtered
   console.log(tagsArray)
   // on lance une nouvelle recherche

   // on remove le tag
  if(e.target.classList.contains('liIngredient')){
    let tags = document.querySelectorAll('.tagIngredient');
    tags.forEach((tag)=>{
       if(tag.dataset.value == e.target.dataset.value){
         tag.remove()
       }
    })
      // ferme la dropdown
      listIngredient.classList.add('hide');
 }
   if(e.target.classList.contains('liAppliance')){
    let tags = document.querySelectorAll('.tagAppliance')
    tags.forEach((tag)=>{
      if(tag.dataset.value == e.target.dataset.value){
        tag.remove()
      }
   })
      // ferme la dropdown
      listAppareil.classList.add('hide');
   }
   if(e.target.classList.contains('liUstensil')){
    let tags = document.querySelectorAll('.tagUstensil')
    tags.forEach((tag)=>{
      if(tag.dataset.value == e.target.dataset.value){
        tag.remove()
      }
   })
       // ferme la dropdown
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
     console.log(tagsArray)
    // Je remove le tag 
     div.remove();
  }))
  // relancer une recherche par tag 
  
}


displaytags();
closeTag();













 











