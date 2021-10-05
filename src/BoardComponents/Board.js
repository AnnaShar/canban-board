import {BoardHeader} from "./BoardHeader";
import {BoardBody} from "./BoardBody";

export const Board = (props) => {
    return(
        <div className="board">
            <BoardHeader name={props.name}/>
            <BoardBody columns = {props.columns}/>
        </div>
    );
}