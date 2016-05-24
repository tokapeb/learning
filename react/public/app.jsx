var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is the Default message.'
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;

    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
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
        <h1>Hello {name}!</h1>
        <p>{msg}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
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
