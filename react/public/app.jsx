var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = "Kornel";
var message = "This is the dynamic message, yeah!";

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);
