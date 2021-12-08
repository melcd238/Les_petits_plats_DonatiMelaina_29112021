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


// Filtrer par Tag
let tagsArray = [];
// Au click sur un li, on affiche le tag et on filtre la liste des recettes en fonction 

// utiliser data-value dans li et tag 
// recupérer tous les li plutôt que chaque li par liste
const lis = document.querySelectorAll('.itemLi');
const tagsContainer = document.querySelector('.tags');
const listIngredient = document.querySelector('.list-ingredient-hide');
const listAppareil =document.querySelector('.list-appareil-hide ');
const listUstensil = document.querySelector('.list-ustensils-hide');
lis.forEach((li) => li.addEventListener('click',(e) =>{
   // condition pour ne pas afficher le doublon
 if(!tagsArray.includes(e.target.dataset.value)){
  tagsArray.push(e.target.dataset.value)
  console.log(tagsArray);
     if(e.target.classList.contains('liIngredient')){
       tagsContainer.innerHTML = `${tagsArray.map((tag)=> 
        `<div class="col-sm-auto btn-primary tag" data-value='${tag}'>${tag} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ).join("")}`;
       // ferme la dropdown
       listIngredient.classList.add('hide');
     }
     if(e.target.classList.contains('liAppliance')){
      tagsContainer.innerHTML = `${tagsArray.map((tag)=> 
        `<div class="col-sm-auto btn-success tag" data-value='${tag}'>${tag} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ).join("")}`;
        // ferme la dropdown
        listAppareil.classList.add('hide');
     }
     if(e.target.classList.contains('liUstensil')){
      tagsContainer.innerHTML = `${tagsArray.map((tag)=> 
        `<div class="col-sm-auto btn-danger tag" data-value='${tag}'>${tag} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
        ).join("")}`;
        // ferme la dropdown
        listUstensil.classList.add('hide');
     }
 }
}))







