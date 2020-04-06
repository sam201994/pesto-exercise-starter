// import React, {Component, useState, useEffect } from 'react';
// import './App.css';
// import Snake from './components/Snake'
// import Food from './components/Food'


// const getRandomPosition = (max, min) => {
//   let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
//   let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
//   return [x,y]
// }

// function App() {
//   const [food, setFoodPosition] = useState(getRandomPosition(1, 98));
//   const [direction, setDirection] = useState('RIGHT');
//   const [snakeDots, updateSnakeDots] = useState([[0,0], [2,0]])
//   const [alive, isAlive] = useState(true)

//   useEffect(() => {
//     if (alive) {
//       setInterval(() => {
//         moveSnake()
//       }, 200)
//       isAlive(false)
//     }

//   }, [alive]);


//   const onKeyDown = (e) => {
//     e = e || window.event;
//     switch (e.keyCode) {
//       case 38:
//         setDirection('UP');
//         break;
//       case 40:
//         setDirection('DOWN');
//         break;
//       case 37:
//         setDirection('LEFT');
//         break;
//       case 39:
//         setDirection('RIGHT');
//         break;
//     }
//   }

//   const moveSnake = () => {
//     console.log("snakeDots: ", snakeDots)
//     let dots = [...snakeDots];
//     let head = dots[dots.length - 1];
//     console.log("head:" , head)
//     switch (direction) {
//       case 'RIGHT':
//         head = [head[0] + 2, head[1]];
//         break;
//       case 'LEFT':
//         head = [head[0] - 2, head[1]];
//         break;
//       case 'DOWN':
//         head = [head[0], head[1] + 2];
//         break;
//       case 'UP':
//         head = [head[0], head[1] - 2];
//         break;
//     }
//     dots.push(head);
//     dots.shift();
//     console.log("newdots: ", dots)
//     updateSnakeDots(dots)
//   }

//   const checkIfInsideCanvas = () => {
//     let head = snakeDots[snakeDots.length - 1];
//     if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
//       onGameOver();
//     }
//   }

//   const onGameOver = () => {
//     alert(`Game Over. Snake length is ${snakeDots.length}`);
//     // this.setState(initialState)
//   }

//   const ifEaten = () => {
//     let head = snakeDots[snakeDots.length - 1];
//     if (head[0] === food[0] && head[1] === food[1]) {
//       setFoodPosition(1, 98)
//       enlargeSnake();
//     }
//   }

//   const enlargeSnake = () => {
//     let newSnake = [...snakeDots];
//     newSnake.unshift([])
//     updateSnakeDots(newSnake)
//   }

//   useEffect(() => {
//       checkIfInsideCanvas()
//       ifEaten()
//   }, [snakeDots]);


//   return(

//     <div className="game-area">
//       <Snake snakeDots={snakeDots} />
//       <Food food={food}/>
//     </div>
    
//   )

// }

// export default App;