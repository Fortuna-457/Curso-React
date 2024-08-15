import './assets/css/App.css'
import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { Board } from "./components/Board.jsx"
import { TURNS } from "./logic/constants.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { resetGame } from "./logic/board.js"
import { resetGameStorage } from "./logic/storage.js"

function App() {

	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board')
		return boardFromStorage
			? JSON.parse(boardFromStorage)
			: Array(9).fill(null)
	})

	// Null es que no hay ganador, y false empate
	const [winner, setWinner] = useState(null)

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ?? TURNS.X
	})

	const handleResetGame = () => {
		resetGame(setBoard, setTurn, setWinner, TURNS)
		resetGameStorage()
	}

	return (
		<main className="board">
			<h1>Tic tac toe</h1>
			<button onClick={handleResetGame}>Reset Game</button>

			<Board
				board={board}
				setBoard={setBoard}
				turn={turn}
				setTurn={setTurn}
				setWinner={setWinner}
				winner={winner}
			/>

			<section className="turn">
				<Square isSelected={turn === TURNS.X}>
					{TURNS.X}
				</Square>
				<Square isSelected={turn === TURNS.O}>
					{TURNS.O}
				</Square>
			</section>

			<WinnerModal resetGame={handleResetGame} winner={winner} />
		</main>
	)
}

export default App
