import React, { Component } from 'react';


const Stars = (props) => {
  return (
    <div>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      ...
    </div>
  )
}

const Answer = (props) => {
  return (
    <div>
      ...
    </div>
  )
}

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play 9 Game</h3>
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
}

export default Game;