import React from 'react';
import './App.css';

import Snake from './components/Snake';
import Food from './components/Food';
import InstructionBoard from './components/InstructionBoard';

const DOT_SIZE = 2;

const getRandomPosition = (max, min) => {
  const x =
    Math.floor((Math.random() * (max - min + 1) + min) / DOT_SIZE) * DOT_SIZE;
  const y =
    Math.floor((Math.random() * (max - min + 1) + min) / DOT_SIZE) * DOT_SIZE;
  return [x, y];
};

const initialState = {
  alive: false,
  gameCount: 0,
  food: getRandomPosition(1, 98),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [[0, 0], [DOT_SIZE, 0]],
};

class App extends React.PureComponent {
  state = initialState;
  intervalID = 0;

  componentDidUpdate(prevProps, prevState) {
    const {alive} = this.state;
    if (this.state.alive !== prevState.alive && alive) {
      this.intervalID = setInterval(this.moveSnake, 200);
      document.onkeydown = this.onKeyDown;
    }
    if (alive) {
      this.checkIfInsideCanvas();
      this.checkIfCollapsed();
      this.ifEaten();
    }
    if (!alive) {
      clearInterval(this.intervalID);
    }
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
      default:
        return;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + DOT_SIZE, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - DOT_SIZE, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + DOT_SIZE];
        break;
      case 'UP':
        head = [head[0], head[1] - DOT_SIZE];
        break;
      default:
        return;
    }

    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  checkIfInsideCanvas() {
    const {snakeDots} = this.state;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  onGameOver() {
    const {gameCount} = this.state;
    this.setState({
      alive: false,
      gameCount: gameCount + 1,
    });
  }

  ifEaten() {
    const {snakeDots, food} = this.state;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomPosition(1, 98),
      });
      this.enlargeSnake();
    }
  }

  enlargeSnake() {
    const {snakeDots} = this.state;
    let snake = [...snakeDots];
    snake.unshift([]);
    this.setState({
      snakeDots: snake,
    });
  }

  checkIfCollapsed() {
    const {snakeDots} = this.state;
    let snake = [...snakeDots];
    const head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    });
  }

  startGame = () => {
    this.setState({
      ...initialState,
      alive: true,
    });
  };

  render() {
    const {alive, gameCount, snakeDots, food} = this.state;
    if (!alive) {
      return (
        <InstructionBoard
          isFirstGame={!gameCount}
          score={snakeDots.length - 2}
          startGame={this.startGame}
        />
      );
    }

    return (
      <div className="game-area">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
      </div>
    );
  }
}

export default App;
