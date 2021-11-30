export default class DisplayListLi {
    construtor(ingredients, appliances, ustensils){
        this.ingredients = ingredients;
        this.appliances = appliances;
        this.ustensils = ustensils;
    }
    createIngredientsList(){
       const ulIngredient = document.querySelector('#dropdown-search-list-ingredients')
       console.log(this.ingredients)
       ulIngredient.innerHTML=`${this.ingredients && this.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}`;
     
    }

    createApplianceList(){
        const ulAppliance = document.querySelector('#dropdown-search-list-appareil')
        console.log(this.appliances)
        ulAppliance.innerHTML=`${this.appliances && this.appliances.map((appliance) => `<li>${appliance}</li>`).join("")}`;
        
    }

    createUstensilsList(){
        const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles')
        console.log(this.ustensils)
        ulUstensil.innerHTML=`${this.ustensils && this.ustensils.map((ustensil)=> `<li>${ustensil}</li>` ).join("")}`;
      
    }

    createListeLi(){
       return(this.createIngredientsList() , this.createApplianceList() , this.createUstensilsList()) 
    }

}