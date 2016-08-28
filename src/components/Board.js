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

  replaceIfDouble: function(clue) {
    let categoryID = clue.category.id
    let oddSource = 'http://jservice.io/api/clues?value=100&category=' + categoryID
    let serverRequest = $.get(oddSource, function (result) {
      if (result.length > 0 ) {
        this.addCategoryToBoard(clue)
      } else {
        this.pullRandomCategory()
      }
    }.bind(this));
  },

  addCategoryToBoard(clueObj) {
    let themesList = this.state.themes
    let themeID = clueObj.category.id
    let theme = clueObj.category.title
    themesList.push({'id': themeID, 'title': theme})
    this.setState({
      themes: themesList
    })
  },

  pullRandomCategory: function() {
    var source = 'http://jservice.io/api/random';
    let serverRequest = $.get(source, function (result) {
      let randClue = result[0]
      this.replaceIfDouble(randClue);
    }.bind(this));
  },

  componentDidMount: function() {
    var themeCount = this.state.themes.length
    while (themeCount < 6) {
      this.pullRandomCategory()
      themeCount = themeCount + 1
    }
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
