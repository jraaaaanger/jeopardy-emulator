import React from 'react';
import Grocery from './Grocery';
import {Card} from 'react-materialize';



class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedGroceryId: null }
    this.handleGroceryClick = this.handleGroceryClick.bind(this)
  }

  handleGroceryClick(id) {
    this.setState({ selectedGroceryId: id });
  }

  render() {
    let groceryList = this.props.groceries.map((grocery) => {
      let selected = "";

      if (grocery.id === this.state.selectedGroceryId) {
        selected = "SELECTED";
      }

      let onGroceryClick = () => this.handleGroceryClick(grocery.id);

      return (
        <Grocery
          key={grocery.id}
          name={grocery.name}
          selected={selected}
          handleClick={onGroceryClick} />
      )
    });

    return (
      <div className="card-panel teal lighten-2">
        <ul>{groceryList}</ul>
      </div>
    );
  }
}

export default GroceryList;
