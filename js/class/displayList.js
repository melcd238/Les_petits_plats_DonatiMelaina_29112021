export default class DisplayList {
    construtor(ingredients, appliances, ustensils){
        this.ingredients = ingredients;
        this.appliances = appliances;
        this.ustensils = ustensils;
    }
    createIngredientsList(){
       const ulIngredient = document.querySelector('#dropdown-search-list-ingredients')
       console.log(this.ingredients )
       return(ulIngredient.innerHTML=`${this.ingredients && this.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}`);
     
    }

    createApplianceList(){
        const ulAppliance = document.querySelector('#dropdown-search-list-appareil')
        return(ulAppliance.innerHTML=`${this.appliances && this.appliances.map((appliance) => `<li>${appliance}</li>`).join("")}`);
        
    }

    createUstensilsList(){
        const ulUstensil = document.querySelector('#dropdown-search-list-appareil')
        return(ulUstensil.innerHTML=`${this.ustensils && this.ustensils.map((ustensil)=> `<li>${ustensil}</li>` ).join("")}`);
      
    }

}