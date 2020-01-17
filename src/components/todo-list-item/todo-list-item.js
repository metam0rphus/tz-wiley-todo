import React, {useState, useRef} from 'react';

const TodoListItem = ({
    label,
    completed,
    onItemDelete,
    onChangePropertyCompleted,
    onChangePropertyLabel
}) => {
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef(null);

    return !!(label) && (
        <li className={`collection-item todo-list__item ${completed ? 'todo-list__item_completed' : ''}`}>
            {!(editMode) && <span className="todo-list__item-label">{label}</span>}
            {editMode && <input
                defaultValue={label}
                ref={inputRef}
                className="todo-list__item-input todo-list__item-input_small"
            />}
            <div className="secondary-content todo-list__item-actions">
                <button
                    className="btn-small waves-effect waves-light todo-list__item-action"
                    onClick={() => {
                        if(!editMode) {
                            setEditMode(true);
                            return;
                        }

                        const labelEl = inputRef.current;

                        if(!labelEl) return;

                        labelEl.classList.remove("invalid");

                        if(labelEl.value) {
                            onChangePropertyLabel(labelEl.value);
                            setEditMode(false);
                        } else {
                            labelEl.classList.add("invalid");
                        }
                    }}
                >
                    <i className="material-icons">{editMode ? 'forward' : 'edit'}</i>
                </button>
                <button
                    className="btn-small waves-effect waves-light todo-list__item-action"
                    onClick={onChangePropertyCompleted}
                >
                    <i className="material-icons">{completed ? 'keyboard_return' : 'check'}</i>
                </button>
                <button
                    className="btn-small waves-effect waves-light todo-list__item-action"
                    onClick={onItemDelete}
                >
                    <i className="material-icons">delete</i>
                </button>
            </div>
        </li>
    );
};

TodoListItem.defaultProps = {
    label: '',
    completed: false,
    onItemDelete: () => {},
    onChangePropertyCompleted: () => {},
    onChangePropertyLabel: () => {}
};

export default TodoListItem;