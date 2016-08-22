var React = require('react');
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
        question: randomClue.question.toUpperCase(),
        answer: randomClue.answer
      })
      }
    )
  },

  //called to add the event listener once the clue has question in state
  componentDidUpdate: function() {
    bindToClick();
  },

  render() {
    let modalID = this.state.themeID + '-' + this.state.points
    let modalHref = '#' + modalID
    return (
      <div>
        <a className='col clues shadow l2 m4 btn modal-trigger' href={modalHref}>
          <div className='full-center'>{this.state.points}</div>
        </a>
        <div id={modalID} className='modal'>
          <div className='full-clue modal-content'>
            <div className='shadow'>{this.state.question}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Clue;
