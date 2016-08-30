var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Type Name" ref="name" />
        <br/>
        <textarea placeholder="Type Message" ref="message"/>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the Default message.'
    }
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }

});

var name = "Kornel";
var message = "This is the dynamic message, yeah!";

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);
