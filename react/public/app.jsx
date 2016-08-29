var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.msg;
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

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Type Name" ref="name" />
        <br/>
        <textarea placeholder="Type Message" />
        <br/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is the Default message.'
    }
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  render: function () {
    var name = this.state.name;
    var msg = this.props.msg;
    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>

        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }

});

var name = "Kornel";
var msg = "This is the dynamic message, yeah!";

ReactDOM.render(
  <Greeter name={name} msg={msg}/>,
  document.getElementById('app')
);
