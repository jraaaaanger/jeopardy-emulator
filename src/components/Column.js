import React from 'react';
import Category from './Category';
import Clue from './Clue';
var $ = require('jquery');

var Column = React.createClass({
  getInitialState: function() {
    return {
      theme: this.props.theme,
      themeID: this.props.themeID,
      clues: null
    }
  },

  render() {
    let clues = this.state.clues

    return(
      <div>
      {this.state.theme}
      <Clue
      themeID={this.state.themeID}
      points ="200" />
      </div>
    )
  }
});

module.exports = Column;
