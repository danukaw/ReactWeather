var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading : true,
      errorMsg : undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp : temp,
        isLoading : false
      });

    }, function(erroMessage) {

       that.setState({
         isLoading : false,
         errorMsg : erroMessage.message
       });
    });
  },

 render : function () {
    var {isLoading, temp, location, errorMsg} = this.state;
    debugger;
    function renderMessage() {
      if( isLoading ) {
        return <h3 className="text-center">Fetching weather ....</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {

      if (typeof errorMsg === "string" ) {
        return <ErrorModal/>
      }

    }

    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
