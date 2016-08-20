import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';
var $ = require('jquery');

var Category = React.createClass({
  render() {
    return(
      <div className="category">{this.props.category}</div>
    )
  }
});
