import { Square } from "../Square";

export function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


    return (
        <>
           
            <div className="font-bold text-2xl py-4 text-center text-blue-600">{status}</div>
            <div className="board-row grid grap-4 grid-cols-3 grid-rows-3">
                <Square value={squares[0]} onSquareClickPlayer={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClickPlayer={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClickPlayer={() => handleClick(2)} />
           
                <Square value={squares[3]} onSquareClickPlayer={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClickPlayer={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClickPlayer={() => handleClick(5)} />
          
                <Square value={squares[6]} onSquareClickPlayer={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClickPlayer={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClickPlayer={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}