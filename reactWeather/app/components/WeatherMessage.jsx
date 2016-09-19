var React = require('react');

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;
  return (
    <div>
      <p>The temperature is {temp} degrees at {location}. Great!</p>
    </div>
  );
}

module.exports = WeatherMessage;
