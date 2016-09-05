var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    return (
      <div>
        <h3>Weather page</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
