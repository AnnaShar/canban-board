import './App.css';
import {BoardColumn} from "./BoardColumnComponents/BoardColumn";
import boardColumnsData from "./board-data.js";
import {Board} from "./BoardComponents/Board";

function App() {
    // const boards = boardData.map((board) =>
    //     <BoardColumn
    //         key={board.id}
    //         tasks={board.tasks}
    //         name={board.name}
    //     />
    // );

    return (
        <Board
            name="My board"
            columns={boardColumnsData}
        />
    );
}

export default App;
