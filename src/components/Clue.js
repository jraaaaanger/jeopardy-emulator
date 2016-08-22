var React = require('react');
import {Button, Card, Row, Col} from 'react-materialize';
var $ = require('jquery');

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

  render() {
    return (
      <Col className='clues shadow' l='2' m='4'>
          <div className='full-center'>{this.state.points}</div>
      </Col>
    );
  }
});

module.exports = Clue;
