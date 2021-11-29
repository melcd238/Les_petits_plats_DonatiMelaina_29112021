export default class DisplayList {
    construtor(ustensils, appliances , ingredients){
       this.ustensils = ustensils;
       this.appliances = appliances;
       this.ingredients = ingredients;
    }
    createIngredientsList(){
       const listIngredient = document.querySelector('#dropdown-search-list-ingredients')
       listIngredient.innerHTML = `<input type="text" placeholder="Rechercher un ingrédient" aria-labelledby="dropdown-menu-ingredient" class="btn-primary">
       <img src="./img/up.svg" alt="flèche vers le haut" class="arrowUp">
       <ul>
       ${ingredients.map((ingredient)=>{
           return `<li> ${ingredient} </li>`
       })}
       </ul>`
    }

    createApplianceList(){
        const listAppliance = document.querySelector('#dropdown-search-list-appareil')
        listAppliance.innerHTML = `<input type="text" placeholder="Rechercher un ingrédient" aria-labelledby="dropdown-menu-ingredient" class="btn-primary">
        <img src="./img/up.svg" alt="flèche vers le haut" class="arrowUp">
        <ul>
        ${appliances.map((appliance)=>{
            return `<li> ${appliance} </li>`
        })}
        </ul>`

    }

    createUstensilsList(){
        const listUstensil = document.querySelector('#dropdown-search-list-appareil')
        listUstensil.innerHTML = `<input type="text" placeholder="Rechercher un ingrédient" aria-labelledby="dropdown-menu-ingredient" class="btn-primary">
        <img src="./img/up.svg" alt="flèche vers le haut" class="arrowUp">
        <ul>
        ${this.ustensils.map((ustensil)=>{
            return `<li> ${ustensil} </li>`
        })}
        </ul>`
    }
}