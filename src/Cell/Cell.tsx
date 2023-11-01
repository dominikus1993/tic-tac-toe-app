
export default function Cell(props: { id: number, onClick: (id: number) => void, value: string }) {
    return <button className="cell" onClick={() => props.onClick(props.id)}>{props.value}</button>
}