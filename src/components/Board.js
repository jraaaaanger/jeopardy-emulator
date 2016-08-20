import React from 'react';
import Clue from './Clue';
import Column from './Column';
import Category from './Category';
var $ = require ('jquery');

var Board = React.createClass({
    getInitialState: function() {
      return {
        themes: [],
        score: 0
      };
    },

  componentDidMount: function() {
    var source = 'http://jservice.io/api/random?count=5';
    this.serverRequest = $.get(source, function (result) {
      let themesList = []
      for (var i = 0; i < 5; i++) {
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

    return (
        <div>
          {themeState.map((themeObj) => {
             return (<Column theme={themeObj.title} themeID={themeObj.id} />)
          })}
        </div>
     )
  }
})

module.exports = Board;
