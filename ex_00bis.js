function check_route(url) {
    fetch(url)
      .then(reponse => {
        if (reponse.ok) {
          console.log("all is good");
          return reponse.json();} 
        else {throw new Erreur('Network reponse was not ok.');} })
  
      .catch(erreur => {
        console.log("shit happens");
        console.erreur('Erreur:', erreur);});}
  
  check_route('https://sv443.net/jokeapi/v2/joke/Programming');