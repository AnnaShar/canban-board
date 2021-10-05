import {BoardTask} from "./BoardTask";
import {BoardColumnHeader} from "./BoardColumnHeader";
import {BoardAddTaskButton} from "./BoardAddTaskButton";

export const BoardColumn = (props) => {
    const tasks = props.tasks;
    const columnTasks = tasks.map(task =>
        <BoardTask
            key={task.id}
            task={task.description}
        />
    );
    return (
        <div className="board__board-column board-column">
            <BoardColumnHeader name={props.name}/>

            <div className="board_column__body">
                {columnTasks}
            </div>

            <BoardAddTaskButton/>
        </div>
    );
}