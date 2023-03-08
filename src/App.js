import { useState } from "react";
import "./App.css";
const App = () => {
  return (
    <div className='app'>
      <h1>Color Generator</h1>
      <p>Click a square to generate a random color</p>
      <StateHandler />
    </div>
  );
};
export default App;

const arr = [];
for (let i = 0; i < 100; i++) {
  let x = { id: i, color: null };
  arr.push(x);
}
const StateHandler = () => {
  const [squares, setSquares] = useState(arr);
  console.log("🚀 ~ file: App.js:21 ~ StateHandler ~ squares:", squares)
  const [color, setColor]=useState(null)
  
 
  const [myColors, setMyColors] = useState([]);
  console.log("🚀 ~ file: App.js:25 ~ StateHandler ~ myColors:", myColors)
  

  const changeColor = (square) => {
    const changedSquare=square;
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    setColor(`rgb(${red},${green},${blue})`);
    square.color=color;
  
  };

  const addColor = (square) => {
    const tempSquare={id:Date.now(), color:square.color}
    console.log("🚀 ~ file: App.js:39 ~ addColor ~ tempSquare:", tempSquare)
    setMyColors((myColors) => [...myColors, tempSquare]);
    console.log("🚀 ~ file: App.js:41 ~ addColor ~ square:", square)
    };
    
    
  
  const squaresBoard = squares.map((square) => (
    <Square
      key={square.id}
      color={square.color}
      clickHandler={() => changeColor(square)}
      doubleClick={() => addColor(square)}
    />
  ));
  return (
    
    <>
      <Board squaresBoard={squaresBoard} />
      <h1>My Palette</h1>
      <MyPalette myColors={myColors}/>
    </>
  );
};


const Board = ({ squaresBoard }) => {
  return <div className='board'>{squaresBoard}</div>;
};


const Square = ({ clickHandler, doubleClick, color }) => {
  return (
    <button
      className='square'
      style={{ backgroundColor: color }}
      onMouseEnter={clickHandler}
      onClick={doubleClick}
    />
  );
};

const MyPalette = ({ myColors }) => {
  let myPalette;
  if (myColors !== undefined) {
    myPalette = myColors.map((myColor) => (
      <Square key={myColor.id} color={myColor.color} />
    ));
  }
  return <>{myPalette}</>;
};
