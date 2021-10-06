import {BoardTask} from "./BoardTask";
import {BoardColumnHeader} from "./BoardColumnHeader";
import {BoardAddTaskButton} from "./BoardAddTaskButton";
import {ModalWindow} from "../ModalWindowComponents/ModalWindow"
import React, {useState} from 'react';

export const BoardColumn = (props) => {
    const [tasks, setTasks] = useState(props.tasks);
    const columnTasks = tasks.map(task =>
        <BoardTask
            key={task.id}
            task={task.description}
        />
    );
    const addTask = (e) => {
        let newTasks = tasks;
        newTasks.push(
            <BoardTask
                key={10}
                task="Untitled"
            />
        )
        setTasks(newTasks);
    }
    return (
        <div className="board__board-column board-column">
            <BoardColumnHeader name={props.name}/>

            <div className="board_column__body">
                {columnTasks}
            </div>

            <BoardAddTaskButton
                onClick={addTask}
            />
        </div>
    );
}