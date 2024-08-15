import { Square } from "./Square.jsx"
import { TURNS } from "../logic/constants.js"
import confetti from "canvas-confetti"
import { checkWinnerFrom, checkEndGame } from "../logic/board.js"
import { saveGameToStorage } from "../logic/storage.js"

export const Board = ({ board, setBoard, turn, setTurn, setWinner, winner }) => {

    const updateBoard = (index) => {

        // No actualizamos esta posición, si ya contiene algo
        if (board[index] || winner) return

        // Actualizar el tablero
        const newBoard = [...board] // Copia del array board con spread operator, para no mutar el estado
        newBoard[index] = turn
        setBoard(newBoard)

        // Cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        // Revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
            confetti({
                particleCount: 200
            })
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false) // Empate
        } else {
            // Guardar partida
            saveGameToStorage({
                board: newBoard,
                turn: newTurn
            })
        }
    }

    return (
        <section className="game">
            {
                board.map((_, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard} // Le pasamos la función, no la ejecución
                        >
                            {board[index]}
                        </Square>
                    )
                })
            }
        </section>
    )
}