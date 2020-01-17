import React from 'react';

const TodoListItem = ({ label, completed, onItemDelete, onChangeCompleted }) => {
    return !!(label) && (
        <li className={`collection-item todo-list__item ${completed ? 'todo-list__item_completed' : ''}`}>
            <span className="todo-list__item-label">{label}</span>
            <div className="secondary-content todo-list__item-actions">
                <button
                    className="btn-small waves-effect waves-light todo-list__item-action"
                    onClick={onChangeCompleted}
                >
                    <i className="material-icons">{completed ? 'keyboard_return' : 'check'}</i>
                </button>
                <button className="btn-small waves-effect waves-light todo-list__item-action">
                    <i className="material-icons">edit</i>
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
    onChangeCompleted: () => {}
};

export default TodoListItem;