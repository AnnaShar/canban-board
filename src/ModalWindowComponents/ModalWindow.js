export const ModalWindow = (props) =>{
    return (<div className="modal-window modal-window_edit">
        <div className="modal-window__header">
            <div className="modal-window__task-name">Make Misha laugh</div>
            <div className="modal-window__close-button">х</div>
        </div>

        <div className="modal-window__body">
            <div className="modal-window__item modal-window__description">
                <div className="modal-window__property-name">Description</div>
                <div className="modal-window__text-input ">
        <textarea>
        Make Misha laugh again and again
        </textarea>
                </div>
            </div>
            <div className="modal-window__item modal-window__expiration-date">
                <div className="modal-window__property-name">Expiration date</div>
                <div className="modal-window__date-input ">
                    <input type="date" value="09/09/2021"></input>
                </div>
            </div>
        </div>
    </div>);
}