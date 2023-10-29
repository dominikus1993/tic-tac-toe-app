import Cell from "../Cell/Cell";


export default function Board() {
    return <Cell onClick={() => console.log("test")} value="X"></Cell>
}