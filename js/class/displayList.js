 class DisplayList {
    constructor(ingredients, appliances, ustensils){
        this.ingredients = ingredients;
        this.appliances = appliances;
        this.ustensils = ustensils;
    }
    createIngredientsList(){
       const ulIngredient = document.querySelector('#dropdown-search-list-ingredients')
       ulIngredient.innerHTML=`${this.ingredients && this.ingredients.map((ingredient) =>
         `<li class='itemLi liIngredient'>${ingredient}</li>`).join("")}`;
     
    }

    createApplianceList(){
        const ulAppliance = document.querySelector('#dropdown-search-list-appareil')
        ulAppliance.innerHTML=`${this.appliances && this.appliances.map((appliance) =>
         `<li class='itemLi liAppliance'>${appliance}</li>`).join("")}`;
        
    }

    createUstensilsList(){
        const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles')
        ulUstensil.innerHTML=`${this.ustensils && this.ustensils.map((ustensil)=>
         `<li class='itemLi liUstensil'>${ustensil}</li>` ).join("")}`;
      
    }

    createListeLi(){
       return(this.createIngredientsList() , this.createApplianceList() , this.createUstensilsList()) 
    }

}

export  { DisplayList }