var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=70edc172380eb6902bba1ed3d82a368f&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to get weather, city can not be found');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to get weather, city can not be found');
    });
  }
};
