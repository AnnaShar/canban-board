import './App.css';
import {BoardColumn} from "./BoardColumnComponents/BoardColumn";
import boardData from "./board-data.js";

function App() {
    const boards = boardData.map((board) =>
        <BoardColumn
            key={board.id}
            tasks={board.tasks}
            name={board.name}
        />
    );

    return (
        <div>
            {boards}
        </div>
    );
}

export default App;
