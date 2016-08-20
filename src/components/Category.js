import React from 'react';
var $ = require('jquery');

var Category = React.createClass({
  render() {
    return(
      <div className="category">{this.props.category}</div>
    )
  }
});
