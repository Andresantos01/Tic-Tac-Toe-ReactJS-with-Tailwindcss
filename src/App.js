import { Board } from "./components/Board";
import { useState } from "react";
import './index.css';
function App() {

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];


  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="App">
       <div className="font-bold p-2 text-red-600 text-center text-2xl py-4">TIC-TAC-TOE IN REACT WITH TAILWINDCSS</div>
       
      <div className="h-100 w-100 flex justify-center">
        <div className="w-45">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        
      </div>
      <p className="text-center py-7 ">Created by André Santos</p>
    </div>
  );
}

export default App;
