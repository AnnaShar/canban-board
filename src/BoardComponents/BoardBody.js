import {BoardColumn} from "../BoardColumnComponents/BoardColumn";

export const BoardBody = (props) => {
    const columns = props.columns.map(column=>
        <BoardColumn
            key={column.id}
            name={column.name}
            tasks={column.tasks}
        />
    );
    return(
        <div className="board__body">
            {columns}
        </div>
    );
}