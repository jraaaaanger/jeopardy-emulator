import React from 'react';
import Category from './Category';
import Clue from './Clue';
var $ = require('jquery');

var Column = React.createClass({
  getInitialState: function() {
    theme: this.props.theme,
    themeID: this.props.themeID,
    clues: this.props.clues
  },

  render() {
    return(
    <Category category={this.state.theme}>
    let clues = this.state.clues
    for (i = 0; i < clues.length; i++) {
      <Clue
       question={clues[i].question},
       answer={clues[i].answer} />
    }
  )}
});

module.exports = Column;
