import React from 'react';
import Clue from './Clue';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: null }
    this.handleClueClick = this.handleClueClick.bind(this)
  }

  handleClueClick(id) {
    this.setState({ selectedClueId: id });
  }

  render() {
    return (
      <Clue
        question="What is the answer to life, the universe, and everything?"
        answer="42"
        points="800" />
    );
  }
}

export default Game;
