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
// Ne pas afficher de doublons (si un tag est déjà affiché, on ne peut pas l'afficher deux fois)
// utiliser data-filter dans li et tag (faire une fonction qui va remplacer les maj et caract spé à utiliser dans displaytList et dans le tag)
// recupérer tous les li plutôt que chaque li par liste
const liIngredient = document.querySelectorAll('.liIngredient');
const tagsContainer = document.querySelector('.tags');
const listIngredient = document.querySelector('.list-ingredient-hide');
liIngredient.forEach((li) => li.addEventListener('click',(e) =>{
  tagsArray.push(li.textContent)
  console.log(tagsArray);
  tagsContainer.innerHTML=`${tagsArray.map((tag)=>  
    ` <div class="col-sm-auto btn-primary tag">${tag} <img src="/img/cross.svg" alt="croix de fermeture du tag" class="crossTag"> </div>`
    ).join("")}`;
 // fermer la dropdown
 listIngredient.classList.add('hide');
 // filtrer les recettes 

 // Fermeture du tag et donc on filtre de nouveau l'affichage des recettes. 
  const crossTags = document.querySelectorAll('.crossTag');
  crossTags.forEach((cross) => cross.addEventListener('click', (e) =>{
    e.preventDefault();
    // On enlève le tag du tableau de tagsArray
    // on modifie la liste des recettes affichée en fonction 
   
  }))

}))






