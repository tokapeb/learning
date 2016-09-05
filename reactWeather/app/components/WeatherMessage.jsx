var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <div>
        <p>The temperature is {temp} degrees at {location}.</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
