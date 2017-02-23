var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps : function() {
    return {
      title : 'Error'
    };
  },

  propTypes : {
    title : React.PropTypes.string,
    message : React.PropTypes.string.isRequired
  },

  componentDidMount : function () {
    var modal = new Foundation.Reveal($('#error-model'));
    modal.open();
  },
  render: function () {

  //{title, message} = this.props;

  var title = this.props.title;
  var message = this.props.message;

  debugger;
    return (
      <div id="error-model" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow"  data-close=""> Okey </button>
        </p>
      </div>
    );
  }

});

module.exports = ErrorModal;
