import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';


var Category = React.createClass({
  render() {
    return(
      <Col>
        {this.props.body}
      </Col>
    )
  }
});
