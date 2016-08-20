import React from 'react';
import Clue from './Clue';
import Column from './Column';
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
        let theme = result[i].category.title
        themesList.push({'id': themeID, 'title': theme})
      }
      this.setState({
        themes: themesList
      })
    });
  },

  render() {
    return (
      <Column theme="test" themeID="42" />
    )
  }
})

module.exports = Board;
