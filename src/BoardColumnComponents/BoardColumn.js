import {BoardTask} from "./BoardTask";
import {BoardColumnHeader} from "./BoardColumnHeader";

export const BoardColumn = (props) => {
    const tasks = props.tasks;
    const columnTasks = tasks.map(task =>
        <BoardTask
            key={task.id}
            task={task.description}
        />
    );
    return (
        <div className="board-column">
            <BoardColumnHeader name={props.name}/>

            <div className="board_column__body">
                {columnTasks}
            </div>
        </div>
    );
}