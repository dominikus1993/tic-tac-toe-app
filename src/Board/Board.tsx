import { useState } from "react";
import Cell from "../Cell/Cell";

const defaultBoard: { [x: number]: string } = {
    0: "X",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "X",
    7: "",
    8: "",
}

export default function Board() {
    let [squares, setSquares] = useState({ ...defaultBoard})

    function handleClick(id: number) {
        const newSquares = { ...squares }
        newSquares[id] = "X"
        setSquares(newSquares)
    }

    return <table>
    <tr>
      <td><Cell id={0} onClick={(id) => handleClick(id)} value={squares[0]}></Cell></td>
      <td><Cell id={1} onClick={(id) => handleClick(id)} value={squares[1]}></Cell></td>
      <td><Cell id={2} onClick={(id) => handleClick(id)} value={squares[2]}></Cell></td>
    </tr>
    <tr>
      <td><Cell id={3} onClick={(id) => handleClick(id)} value={squares[3]}></Cell></td>
      <td><Cell id={4} onClick={(id) => handleClick(id)} value={squares[4]}></Cell></td>
      <td><Cell id={5} onClick={(id) => handleClick(id)} value={squares[5]}></Cell></td>
    </tr>
    <tr>
      <td><Cell id={6} onClick={(id) => handleClick(id)} value={squares[6]}></Cell></td>
      <td><Cell id={7} onClick={(id) => handleClick(id)} value={squares[7]}></Cell></td>
      <td><Cell id={8} onClick={(id) => handleClick(id)} value={squares[8]}></Cell></td>
    </tr>
  </table>
}