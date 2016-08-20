import React from 'react';
import Game from './Game';

const App = props => {
  return (
    <div>
      <h1>Jeopardy</h1>
      <Game
        categories={props.categories} />
    </div>
  )
}

export default App;
