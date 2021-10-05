export const BoardHeader = (props) => {
    return (
        <div className="board__header">
            <div className="board__name">{props.name}</div>
        </div>
    );
}