import React from 'react';
import Clue from './Clue';
var $ = require('jquery');
import {Button, Card, Row, Col} from 'react-materialize';

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
      <Clue
      themeID={this.state.themeID}
      points ="100" />
      <Clue
      themeID={this.state.themeID}
      points ="200" />
      <Clue
      themeID={this.state.themeID}
      points ="300" />
      <Clue
      themeID={this.state.themeID}
      points ="400" />
      <Clue
      themeID={this.state.themeID}
      points ="500" />
      </div>
    )
  }
});

module.exports = Column;
