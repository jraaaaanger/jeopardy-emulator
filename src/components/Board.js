import React from 'react';
import Clue from './Clue';
import BoardRow from './BoardRow';
import {Button, Card, Row, Col} from 'react-materialize';

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

  render() {
    var themeState = this.state.themes
    var pointValues =[100, 200, 300, 400, 500]

    var row = <BoardRow themes={themeState} points="200" />

    return (
      <div>
      {row}
      </div>
    )
  }
})

module.exports = Board;
