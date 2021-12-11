
const openDropdown = function (){
    const btnDropdown = document.querySelectorAll('.btn-dropdown');
    const listIngredient = document.querySelector('.list-ingredient-hide');
    const listAppareil =document.querySelector('.list-appareil-hide ');
    const listUstensil = document.querySelector('.list-ustensils-hide');

    btnDropdown.forEach((btn)=> btn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(btn.classList.contains('btn-primary')) {
            listIngredient.classList.remove('hide');
        } else if(btn.classList.contains('btn-success')){
             listAppareil.classList.remove('hide');
        } else if(btn.classList.contains('btn-danger')){
            listUstensil.classList.remove('hide');
         }
     }))
}

const closeDropdown = function (){
    const listIngredient = document.querySelector('.list-ingredient-hide');
    const listAppareil =document.querySelector('.list-appareil-hide ');
    const listUstensil = document.querySelector('.list-ustensils-hide');
    const arrowUps = document.querySelectorAll('.arrowUp');

    arrowUps.forEach((arrowUp) => arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        listIngredient.classList.add('hide');
        listAppareil.classList.add('hide');
        listUstensil.classList.add('hide');
    }))
}

export { openDropdown, closeDropdown };