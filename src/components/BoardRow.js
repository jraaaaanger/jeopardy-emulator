import React from 'react';
import Clue from './Clue';
import {Button, Card, Row, Col} from 'react-materialize';
var $ = require('jquery');

var BoardRow = React.createClass({
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
           return (<Clue points={pointValue} themeID={themeObj.id} />)
        })}
      </div>
       )
  }
});

module.exports = BoardRow;
