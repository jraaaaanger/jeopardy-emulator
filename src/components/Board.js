import React from 'react';
import BoardRow from './BoardRow';
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
    var pointValues = [100, 200, 300, 400, 500]

    var categories = themeState.map(themeObj => {
      return (
        <Category category={themeObj.title.toUpperCase()} />
      )
    })

    var rows = pointValues.map(points => {
      return (
        <BoardRow themes={themeState} points={points} />
      )
    });

    return (
      <div>
        <div className="row">{categories}</div>
        {rows}
      </div>
    )
  }
})

module.exports = Board;
