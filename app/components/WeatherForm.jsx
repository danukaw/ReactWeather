var React = require('react');
var WeatherForm = React.createClass({

  onFormSubmit : function (e) {
    console.log("inside the WeatherForm->onFormSubmit");

    e.preventDefault();

    var location = this.refs.location.value;
    console.log("wether location is -> "+ location);

    if(location.length > 0 ) {
      this.refs.location.value='';
      this.props.onSearch(location);
      console.log("wethere Location has been passed to Weather component");
    }

  },

  render : function () {
    return (
      <div>
        <p>Weather Form goes here !!</p>
        <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="text" ref="location" placeholder="Enter City Name"></input>
            </div>
            <div>
              <button>Get Weather</button>
            </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
