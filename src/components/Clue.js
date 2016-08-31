import React, { Component } from 'react';
var $ = require('jquery');

class Clue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: null,
      answer: null,
      points: this.props.points,
      themeID: this.props.themeID,
      answered: false
    }

    this.onClueClick = this.onClueClick.bind(this)
  }

  onClueClick() {
    this.setState({answered: true})
  }

  modifyString(string) {
    let result = string.toLowerCase()
    result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    return result
  }

  componentDidMount() {
    this.source = 'http://jservice.io/api/clues?category=' + this.state.themeID + '&value='
    let getClues = $.get(this.source + this.state.points, (result) => {
      let randomClue = result[Math.floor(Math.random()*result.length)]
      let clueAnswer = randomClue.answer
      clueAnswer = this.modifyString(clueAnswer)
      this.setState({
        question: randomClue.question.toUpperCase(),
        answer: clueAnswer
      })
      }
    )
  }

  componentDidUpdate() {
    let theme = this.state.themeID
    let points = this.state.points
    if (this.state.answered) {
      removeClick(theme, points)
    } else {
      bindToClick(theme, points)
    }
  }

  render() {
    let modalID = 'm' + this.state.themeID + '-' + this.state.points
    let modalTriggerID = 't' + modalID
    let modalHref = '#' + modalID
    let display
    let modalClass = 'col clues shadow l2 m4 btn modal-trigger'

    if (this.state.answered) {
      display = ''
    } else {
      display = this.state.points
    }
    return (
      <div>
        <a id={modalTriggerID} onClick={this.onClueClick} className={modalClass} href={modalHref}>
          <div className='full-center'>{display}</div>
        </a>
        <div id={modalID} className='modal'>
          <div className='full-clue modal-content'>
            <div className='shadow'>{this.state.question}</div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Clue;
