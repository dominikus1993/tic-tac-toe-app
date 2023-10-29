
export default function Cell(props: { onClick: () => void, value: string }) {
    return <button className="cell" onClick={props.onClick}>{props.value}</button>
}