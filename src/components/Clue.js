var React = require('react');
var $ = require('jquery');
import {Button, Card, Row, Col} from 'react-materialize';


var Clue = React.createClass({
  getInitialState: function() {
    return {
      question: null,
      answer: null,
      points: this.props.points,
      themeID: this.props.themeID,
      selected: null
    };
  },

  componentDidMount: function() {
    this.source = 'http://jservice.io/api/clues?category=' + this.state.themeID + '&value='
    let getClues = $.get(this.source + this.state.points, (result) => {
      var randomClue = result[Math.floor(Math.random()*result.length)]
      this.setState({
        question: randomClue.question,
        answer: randomClue.answer
      })
      }
    )
  },

  render: function() {
    return (
      <Col>
        <Card className="teal lighten-4 black-text">
          Q: {this.state.question}
          A: {this.state.answer}
        </Card>
      </Col>
    );
  }
});

module.exports = Clue;
