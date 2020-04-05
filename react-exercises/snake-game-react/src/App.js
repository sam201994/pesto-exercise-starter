import React from 'react';
import './App.css';

import Snake from './components/Snake';
import Food from './components/Food';
import InstructionBoard from './components/InstructionBoard';

const DOT_SIZE = 4;

const MAX_SIZE = 100 - DOT_SIZE;

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
  food: getRandomPosition(1, MAX_SIZE),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [[0, 0], [DOT_SIZE, 0]],
  bestScore: 0,
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
    const {direction} = this.state;
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if (direction !== 'DOWN') {
          this.setState({direction: 'UP'});
        }
        break;
      case 40:
        if (direction !== 'UP') {
          this.setState({direction: 'DOWN'});
        }
        break;
      case 37:
        if (direction !== 'RIGHT') {
          this.setState({direction: 'LEFT'});
        }
        break;
      case 39:
        if (direction !== 'LEFT') {
          this.setState({direction: 'RIGHT'});
        }
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
    const {gameCount, snakeDots, bestScore} = this.state;
    const currentScore = (snakeDots.length - 2) * 5;
    this.setState({
      alive: false,
      gameCount: gameCount + 1,
      bestScore: currentScore > bestScore ? currentScore : bestScore,
    });
  }

  ifEaten() {
    const {snakeDots, food} = this.state;
    const head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomPosition(1, MAX_SIZE),
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
      direction: 'RIGHT',
      snakeDots: [[0, 0], [DOT_SIZE, 0]],
      alive: true,
    });
  };

  render() {
    const {alive, gameCount, snakeDots, food, bestScore} = this.state;
    if (!alive) {
      return (
        <InstructionBoard
          isFirstGame={!gameCount}
          score={(snakeDots.length - 2) * 5}
          startGame={this.startGame}
        />
      );
    }

    return (
      <>
        <div className="game-area">
          <Snake snakeDots={snakeDots} />
          <Food food={food} />
        </div>
        <div className="footer">
          <div className="score-board">{`CURRENT SCORE - ${(snakeDots.length -
            2) *
            5}`}</div>
          <div className="score-board">{`BEST SCORE - ${bestScore}`}</div>
        </div>
      </>
    );
  }
}

export default App;
