import React from 'react';
import '../../App.css';

const InstructionBoard = ({isFirstGame, score, startGame}) => {
  const renderStartBoard = () => {
    return (
      <div className="start-board">
        <div className="gradient-button" onClick={startGame}>
          <div>START GAME</div>
        </div>
      </div>
    );
  };
  const renderGameOverBoard = () => {
    return (
      <div className="start-board">
        <div className="score-container">
          <div>{`SCORE - ${score}`}</div>
        </div>
        <div className="game-over-container">
          <div>GAME OVER</div>
        </div>
        <div className="gradient-button" onClick={startGame}>
          <div>RESTART GAME</div>
        </div>
      </div>
    );
  };

  return isFirstGame ? renderStartBoard() : renderGameOverBoard();
};

export default InstructionBoard;
