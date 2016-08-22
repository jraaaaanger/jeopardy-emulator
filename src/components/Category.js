import React from 'react';
var $ = require('jquery');

var Category = React.createClass({
  render() {
    return(
      <div className='col l2 m4 categories shadow'>
          <div className="full-center">{this.props.category}</div>
      </div>
    )
  }
});

module.exports = Category;
