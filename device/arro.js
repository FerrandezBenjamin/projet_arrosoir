var temperature = 30; // La valeur de la température ambiante
var donneesCapt = 31; // La valeur renvoyé du capteur d'humidité
var meteo = false; // False = SOLEIL, true = PLUIE
var caArrose = true; // false = PAS arrose, true = arrose
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  client.subscribe("campusnum/jardin/weather");
  client.subscribe("campusnum/jardin/hum");
});

client.on("message", function (topic, msg) {
  switch (topic) {
    case "campusnum/jardin/weather":
      if (msg != "rain") {
        meteo = false;
      } else meteo = true;
      jardinClean(meteo);
      break;
    case "campusnum/jardin/hum":
      donneesCapt = msg;
      jardinClean(meteo);
      break;
    default:
      break;
  }
});

jardinClean(meteo);

// ---- function principal arrosage du jardin ----//

function jardinClean() {
  if (meteo) {
    // Si il pleut, pas besoin d'arroser
    console.log("Il pleut, pas besoin d'arroser");
    client.publish("campusnum/jardin/arro", "0");
  } else if (donneesCapt <= 30) {
    client.publish("campusnum/jardin/arro", "1");
    console.log(caArrose);
  }
  // Si il pleut pas, prend en compte les données du capteur, puis arrose en conséquence
}

// ---- function arrosage du jardin ----//

//------- Je crois que j'en n'ai pas besoin -------//
// function arrosage(meteo) {
//   if (meteo) {
//     // Arrête la function si il se met à pleuvoir
//     console.log("STOP IL CE MET A PLEUVOIR");
//     client.publish("campusnum/jardin/arro", 0);
//   } else if (!meteo) {
//     // Il pleut pas, ça arrose
//     console.log("Doucement, ça arrose");
//     client.publish("campusnum/jardin/arro", 1);
//   }
// }
