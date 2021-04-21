import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [playerTurns, setPlayerTurns] = useState({ x: [], o: [] });
  const [isXTurn, setIsXTurn] = useState(true);
  const [playState, setPlayState] = useState({});
  const [winner, setWinner] = useState(null);
  const winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const resetState = () => {
    setPlayerTurns({ x: [], o: [] });
    setIsXTurn(true);
    setPlayState({});
    setWinner(null);
  };

  const fillSquare = (squareNum) => {
    if (playState[squareNum]) return;

    setPlayState({ ...playState, [squareNum]: isXTurn ? "x" : "o" });
    setPlayerTurns({
      ...playerTurns,
      [isXTurn ? "x" : "o"]: [...playerTurns[isXTurn ? "x" : "o"], squareNum],
    });
    setIsXTurn(!isXTurn);
  };

  useEffect(() => {
    const lastPlayer = isXTurn ? "o" : "x";
    playerTurns[lastPlayer].length >= 3 &&
      winningCombinations.some((combination) =>
        combination.every((val) => playerTurns[lastPlayer].includes(val))
      ) &&
      setWinner(lastPlayer);
  }, [playerTurns]);

  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} won.`);
      resetState();
    }
  }, [winner]);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetState}>Reset</button>
      <br />
      <div>
        {[1, 3, 5].map((e, i) => (
          <div className="squareRowWrapper">
            {Array(3)
              .fill(0)
              .map((_, j) => (
                <div className="square" onClick={() => fillSquare(e + i + j)}>
                  {playState[e + i + j] || ""}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
