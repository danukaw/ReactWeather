var React = require('react');

var About = (props) => {

  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React. I have built this for the Complete React Web App Developer Course</p>
        <p>Here are some of the tools i used</p>
        <ul>
          <li>
            <a href="http://www.facebook.com/github/">react</a> - This was the javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">OpenWeatherMap</a> - I used to OpenWeatherMap to search weather data by city name.
          </li>
        </ul>
    </div>
  );
}
module.exports= About;
