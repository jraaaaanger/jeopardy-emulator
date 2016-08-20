var React = require('react');

var Clue = React.createClass({
  getInitialState: function() {
    return {
      question: this.props.question,
      answer: this.props.answer,
      points: this.props.points,
      selected: null
    };
  },
  render: function() {
    return (
      <div className="clue-card">
        {this.state.question}
      </div>
    );
  }
});

module.exports = Clue;
