const axios = require("axios");

function getWeather(city) {
  axios
    .get(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf94187fd3db1977675ee17f9f04a4ea`
    )
    .then(function (response) {
      // handle success
      console.log(response.main.temp);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
getWeather("chambéry");
