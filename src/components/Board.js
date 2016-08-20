import React from 'react';
import Clue from './Clue';
var $ = require ('jquery');

var Board = React.createClass({

  getInitialState: function() {
    return {
      themes: [],
      clues: [],
      score: 0
    };
  },

  componentDidMount: function() {
    this.source = 'http://jservice.io/api/random?count=6';
    this.serverRequest = $.get(this.source, (result) => {
      let themesList = []
      var i = 0;
      for (i = 0; i < 6; i++) {
        let themeID = result[i].category.id
        themesList.push(themeID)
      }
      this.setState({
        themes: themesList
      })
    });
  },

  render() {
    return (
      <Clue
        question="What is the answer to life, the universe, and everything?"
        answer="42"
        points="800" />
    );
  }
})

module.exports = Board;
