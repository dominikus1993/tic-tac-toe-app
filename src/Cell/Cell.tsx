
export default function Cell(props: { onClick: () => void, value: string }) {
    return <button onClick={props.onClick}>{props.value}</button>
}