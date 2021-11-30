export default class DisplayRecipes {
    constructor(recipe, selector) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.ingredients = recipe.ingredients;
        this.time = recipe.time;
        this.description = recipe.description;
        this.appliance = recipe.appliance;
        this.ustensils = recipe.ustensils;
        this.selector = selector;
      }
      createCardRecipe(){
          const cardContainer = document.createElement('div');
          cardContainer.setAttribute('class', 'col card-container')
          cardContainer.innerHTML= ` <div class="card">
          <div class="card-top"></div>
          <div class="card-body">
           <div class="title">
           <h2 class="card-title"> ${this.name}</h2>
           <div class= "time"> <img src="./img/clock.svg" alt="horloge"> <span class="time">${this.time} min</span></div>
          </div>
            <div class="description">
                <div class="list-ingredient">
                    <ul>
                        ${this.ingredients.map((ingredient) => {
                            if (!("quantity" in ingredient)) {
                                return `<li><span class="ingredient-bold">${ingredient.ingredient}</span></li>`;
                              } else if ( "quantity" in ingredient && !("unit" in ingredient)) {
                                return `<li><span class="ingredient-bold">${ingredient.ingredient}:</span> ${ingredient.quantity}</li>`;
                              } else {
                                return `<li><span class="ingredient-bold">${ingredient.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</li>`;
                              }
                        }).join("")}
                    </ul>
                </div>
                <div class="preparation">
                    <p> ${this.description.substring(0, 180)}... </p>
                </div>

            </div>
          </div>
        </div>`
        this.selector.appendChild(cardContainer);
      }  
}