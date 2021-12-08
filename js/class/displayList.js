 class DisplayList {
    constructor(ingredients, appliances, ustensils){
        this.ingredients = ingredients;
        this.appliances = appliances;
        this.ustensils = ustensils;
    }

    replace (elt) {
        return elt
        .toLowerCase()
        .replace(/[àäâ]/g, "a")
        .replace(/[ç]/g, "c")
        .replace(/[éèêë]/g, "e")
        .replace(/[îï]/g, "i")
        .replace(/[ôö]/g, "o")
        .replace(/[ùûû]/g, "u");
    }

    createIngredientsList(){
       const ulIngredient = document.querySelector('#dropdown-search-list-ingredients')
       ulIngredient.innerHTML=`${this.ingredients && this.ingredients.map((ingredient) =>
         `<li class='itemLi liIngredient' data-value='${this.replace(ingredient)}' >${ingredient}</li>`).join("")}`;
     
    }

    createApplianceList(){
        const ulAppliance = document.querySelector('#dropdown-search-list-appareil')
        ulAppliance.innerHTML=`${this.appliances && this.appliances.map((appliance) =>
         `<li class='itemLi liAppliance' data-value='${this.replace(appliance)}'>${appliance}</li>`).join("")}`;
        
    }

    createUstensilsList(){
        const ulUstensil = document.querySelector('#dropdown-search-list-ustensiles')
        ulUstensil.innerHTML=`${this.ustensils && this.ustensils.map((ustensil)=>
         `<li class='itemLi liUstensil' data-value='${this.replace(ustensil)}'>${ustensil}</li>` ).join("")}`;
      
    }

    createListeLi(){
       return(this.createIngredientsList() , this.createApplianceList() , this.createUstensilsList()) 
    }

}

export  { DisplayList }