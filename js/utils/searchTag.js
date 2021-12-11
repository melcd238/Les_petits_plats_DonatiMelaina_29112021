
// fonction pour remplacer dans un tableau les caractères spé et les maj par des mins de chaque élément
// et filtrer le tableau en fonction de la recherche
function searchTag(array, recherche){
    return array.filter((elt)=>{
      elt.toLowerCase()
      .replace(/[àäâ]/g, "a")
      .replace(/[ç]/g, "c")
      .replace(/[éèêë]/g, "e")
      .replace(/[îï]/g, "i")
      .replace(/[ôö]/g, "o")
      .replace(/[ùûû]/g, "u")
      .includes(recherche)
    })
  }

  export { searchTag }