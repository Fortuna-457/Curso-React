import { WINNER_COMBOS } from "./constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate, si no hay más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
}

export const resetGame = (setBoard, setTurn, setWinner, TURNS) => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
}