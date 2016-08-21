import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';
var $ = require('jquery');

var Category = React.createClass({
  render() {
    return(
      <Col className='categories shadow' l='2' m='4'>
          <div className="full-center">{this.props.category}</div>
      </Col>
    )
  }
});

module.exports = Category;
