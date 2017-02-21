var React = require('react');

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;
  return (
    <div>
      It's it {temp} in {location}.
    </div>
  );
}

module.exports = WeatherMessage;
