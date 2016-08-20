import React from 'react';
import Game from './Game';

const App = props => {
  return (
    <div>
      <Game
        categories={props.categories} />
    </div>
  )
}

export default App;
