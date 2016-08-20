import React from 'react';
import Clue from './Clue';
import Column from './Column';
var $ = require ('jquery');

var Board = React.createClass({
    getInitialState: function() {
      return {
        themes: [],
        score: 0
      };
    },

  componentDidMount: function() {
    var source = 'http://jservice.io/api/random?count=6';
    this.serverRequest = $.get(source, function (result) {
      let themesList = []
      for (var i = 0; i < 6; i++) {
        let themeID = result[i].category.id
        let theme = result[i].category.title
        themesList.push({'id': themeID, 'title': theme})
      }
      this.setState({
        themes: themesList
      })
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    let themeState = this.state.themes

    if (themeState.length > 0){
      var themeNumber = themeState[0].id
      var themeName = themeState[0].title
    } else {
      var themeNumber = ""
      var themeName = ""
    }

    return (
      <Column theme={themeName} themeID={themeNumber} />
    )
  }
})

module.exports = Board;
