export default class DisplayList {
    construtor(ustensils, appliances , ingredients){
       this.ustensils = ustensils;
       this.appliances = appliances;
       this.ingredients = ingredients;
    }
    createIngredientsList(){
       const ulIngredient = document.querySelector('#dropdown-search-list-ingredients')
       return(ulIngredient.innerHTML=`${this.ingredients.map((ingredient) => `<li class="ingredientItems li">${ingredient}</li>`).join("")}`);
     
    }

    createApplianceList(){
        const ulAppliance = document.querySelector('#dropdown-search-list-appareil')
        return(ulAppliance.innerHTML=`${this.appliances.map((appliance) => `<li class="ingredientItems li">${appliance}</li>`).join("")}`);
        
    }

    createUstensilsList(){
        const ulUstensil = document.querySelector('#dropdown-search-list-appareil')
        return(ulUstensil.innerHTML=`${this.ustensils.map((ustensil)=> `<li class="ingredientItems li">${ustensil}</li>` ).join("")}`);
      
    }

    createListLi(){
       return (this.createIngredientsList(),this.createApplianceList(),this.createUstensilsList())
    }
}