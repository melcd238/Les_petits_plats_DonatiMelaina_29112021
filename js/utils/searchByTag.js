import { replace } from './replace.js'

function searchByTag(recettes , option){
  if(option.length > 0){
      let newRecettes = recettes;
      let newRecipes =[];
      newRecettes.forEach((newRecette )=> {
          // je récupère la liste des tag a tester
          let tagToTest = [];
          newRecette.ingredients.forEach((ingredient) =>{
              tagToTest.push(replace(ingredient.ingredient))
          });
              tagToTest.push(replace(newRecette.appliance));
          newRecette.ustensils.forEach((ustensil)=>{
              tagToTest.push(replace(ustensil))
          })
          if(typeof option === "string"){
              if(tagToTest.includes(option)){
                  newRecipes.push(newRecette)
              }
          } else {
              let test =[]
              option.forEach((elt) =>{
                  if(tagToTest.includes(elt)){
                      test.push(true)
                  }else {
                      test.push(false)
                  }
              });
              if(test.every((test) => test === true)){
                newRecipes.push(newRecette)
              }
          }
      });
      // on supprime les doublons avec un set 
      newRecipes = Array.from(new Set(newRecipes))
      console.log(newRecipes)
  } else {
      console.log("recherche à 0")
  }
}

export { searchByTag }