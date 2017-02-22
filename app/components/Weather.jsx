var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

 getInitialState: function (){
     return {
         isLoading : false
     };
   },

 handleSearch : function (location) {

    console.log("inside the handleWether function "+ location);
    var that = this;

    this.setState({
      isLoading : true
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp : temp,
          isLoading : false
      });

    }, function(erroMessage) {
       alert(erroMessage);
       this.setState({
         isLoading : false
       });
    });
  },

 render : function () {
    var {isLoading, temp, location} = this.state;
    debugger;
    function renderMessage() {
      if( isLoading ) {
        return <h3 className="text-center">Fetching weather ....</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
