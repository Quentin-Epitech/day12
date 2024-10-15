function my_fetch(url) {
    fetch(url)
     .then(reponse => reponse.json())
     .then(data => console.log(data))
     .catch(erreur => console.error('Erreur:', erreur));}
  my_fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528');