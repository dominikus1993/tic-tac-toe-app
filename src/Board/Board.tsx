import { useState } from "react";
import Cell from "../Cell/Cell";

type Board = { [x: number]: string }
type Player = "X" | "O"
const defaultBoard: Board = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
}

type BoardState = {
    board: Board,
    currentPlayer: Player,
    winner: Player | null
}

const possibleWinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]


function getBoardCell(state: BoardState, id: number): string {
    return state.board[id];
}

function calcWinner(state: BoardState): Player | null {
    for (const combination of possibleWinningCombinations) {
        const [a, b, c] = combination;
        if (state.board[a] !== "" && state.board[a] === state.board[b] && state.board[a] === state.board[c]) {
            return state.board[a] as Player;
        }
    }
    return null;
}

function canMove(state: BoardState, id: number): boolean {
    if (state.winner !== null) {
        return false;
    }

    if (getBoardCell(state, id) !== "") {
        return false;
    }
    return true;
}


export default function Board() {
    let [status, setStatus] = useState("Next player: X")
    let [board, setBoard] = useState({ board: { ...defaultBoard }, currentPlayer: "X", winner: null } as BoardState)

    function handleClick(id: number) {
        if (!canMove(board, id)) {
            return;
        }

        const newBoard = { ...board }
        newBoard.board[id] = board.currentPlayer;
        newBoard.currentPlayer = board.currentPlayer === "X" ? "O" : "X"

        newBoard.winner = calcWinner(newBoard);

        setBoard(newBoard)

        if (newBoard.winner !== null) {
            setStatus("Winner: " + newBoard.winner)
        } else {
            setStatus("Next player: " + newBoard.currentPlayer)
        }
    }

    return<>
        <div>{status}</div>
        <table>
            <tr>
                <td><Cell id={0} onClick={(id) => handleClick(id)} value={getBoardCell(board, 0)}></Cell></td>
                <td><Cell id={1} onClick={(id) => handleClick(id)} value={getBoardCell(board, 1)}></Cell></td>
                <td><Cell id={2} onClick={(id) => handleClick(id)} value={getBoardCell(board, 2)}></Cell></td>
            </tr>
            <tr>
                <td><Cell id={3} onClick={(id) => handleClick(id)} value={getBoardCell(board, 3)}></Cell></td>
                <td><Cell id={4} onClick={(id) => handleClick(id)} value={getBoardCell(board, 4)}></Cell></td>
                <td><Cell id={5} onClick={(id) => handleClick(id)} value={getBoardCell(board, 5)}></Cell></td>
            </tr>
            <tr>
                <td><Cell id={6} onClick={(id) => handleClick(id)} value={getBoardCell(board, 6)}></Cell></td>
                <td><Cell id={7} onClick={(id) => handleClick(id)} value={getBoardCell(board, 7)}></Cell></td>
                <td><Cell id={8} onClick={(id) => handleClick(id)} value={getBoardCell(board, 8)}></Cell></td>
            </tr>
        </table>
    </>
}