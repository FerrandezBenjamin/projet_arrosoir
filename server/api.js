const axios = require("axios");
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

// Make a request for a user with a given ID

function getWeather() {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=45.566669&lon=5.93333&exclude=%7Bpart%7D&appid=737999fa3e305ea2c2184c05d9953760`
    )
    .then(function (response) {
      let data = {
        temp: Math.floor(response.data.current.temp - 273.15),
        hum: response.data.current.humidity,
      };
      console.log(data);
      client.publish("campusnum/jardin", JSON.stringify(data));
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

getWeather();
