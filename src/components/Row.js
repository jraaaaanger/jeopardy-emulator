import React from 'react';
import Clue from './Clue';
var $ = require('jquery');

var Row = React.createClass({
  getInitialState: function() {
    return {
      points: this.props.points,
      themes: this.props.themes,
      clues: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themes: nextProps.themes
    })
  },

  render() {
    let pointValue = this.state.points
    var themes = this.state.themes

    return (
      <div>
        {themes.map( themeObj => {
           return (<Clue points="200" themeID={themeObj.id} />)
        })}
      </div>
       )
  }
});

module.exports = Row;