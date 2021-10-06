import React, {useState, useEffect} from 'react';
import {ModalWindow} from "../ModalWindowComponents/ModalWindow"

export const BoardTask = (props) => {
    return (
            <div className="board-column__item board-column__task">
                {props.task}
            </div>
    );
}