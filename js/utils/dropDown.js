
const openDropdown = function (){
    const btnDropdown = document.querySelectorAll('.btn-dropdown');
    const listIngredient = document.querySelector('.list-ingredient-hide');
    const listAppareil =document.querySelector('.list-appareil-hide ');
    const listUstensil = document.querySelector('.list-ustensils-hide');
    const btnAppareil = document.querySelector('.appareil');
    const btnUstensil = document.querySelector('.ustensiles')

    btnDropdown.forEach((btn)=> btn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(btn.classList.contains('btn-primary')) {
            listIngredient.classList.remove('hide');
            btnAppareil.classList.add('move');
            btnUstensil.classList.add('move');
        } else if(btn.classList.contains('btn-success')){
             listAppareil.classList.remove('hide');
             btnUstensil.classList.add('move');
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
    const btnAppareil = document.querySelector('.appareil');
    const btnUstensil = document.querySelector('.ustensiles')

    arrowUps.forEach((arrowUp) => arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        listIngredient.classList.add('hide');
        listAppareil.classList.add('hide');
        listUstensil.classList.add('hide');
        btnAppareil.classList.remove('move');
        btnUstensil.classList.remove('move');
    }))
}

export { openDropdown, closeDropdown };