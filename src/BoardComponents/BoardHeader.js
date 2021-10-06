import React, {useState, useRef, useEffect} from 'react';
import {ReactComponent as ReactLogo} from '../edit_icon.svg';

export const BoardHeader = (props) => {
    const [editable, setEditable] = useState(false);
    const [focused, setFocus] = useState(false);
    const headerText = useRef(null);

    const handleEditClick = (e) => {
        setEditable(true);
        headerText.current.focus();
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setEditable(false);
        }
    }
    const handleBlur = (e) => {
        setEditable(false);
    }

    return (
        <div className="board__header">
            <div ref={headerText}
                 tabIndex={0}
                 onKeyDown={handleKeyDown}
                 onBlur={handleBlur}
                 contentEditable={editable}
                 className="board__name">{props.name}
            </div>

            <div className="board__edit-icon edit-icon">
                <ReactLogo
                    onClick={handleEditClick}
                />
            </div>
        </div>
    );
}