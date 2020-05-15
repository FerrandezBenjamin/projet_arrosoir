var temperature = 30; // La valeur de la température ambiante
var donneesCapt = 31; // La valeur renvoyé du capteur d'humidité
var meteo = false; // False = SOLEIL, true = PLUIE
var caArrose = true; // Variable pour renvoyer quand ça arrose

jardinClean(meteo);

// ---- function principal arrosage du jardin ----//

function jardinClean(meteo) {
  if (meteo == true) {
    // Si il pleut, pas besoin d'arroser.
    console.log("Il pleut, pas besoin d'arroser");
  } else if (meteo == false) {
    // Si il pleut pas, prend en compte les données du capteur, puis arrose en conséquence
    if (donneesCapt >= 30) {
      arrosage(meteo);
      console.log(caArrose);
    }
  } else {
    jardinClean(meteo); // Redémarre en boucle la fonction principal;
    console.log(caArrose);
  }
}

// ---- function arrosage du jardin ----//
function arrosage(meteo) {
  if (meteo == true) {
    // Arrête la function si il se met à pleuvoir
    console.log("STOP IL PLEUT");
  } else if (meteo == false) {
    // Il pleut pas, ça arrose
    console.log("Doucement, ça arrose");
    caArrose = false; // Permet de renvoyer la valeur pour savoir quand ça arrose ou non
  }
}

function prevision(chezpo) {}
