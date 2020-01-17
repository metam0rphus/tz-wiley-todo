import React from 'react';

const TodoListItem = ({ label, onItemDelete }) => {
    return !!(label) && (
        <li className="collection-item todo-list__item">
            <span className="todo-list__item-label">{label}</span>
            <div className="secondary-content todo-list__item-actions">
                <button className="btn-small waves-effect waves-light todo-list__item-action">
                    <i className="material-icons">check</i>
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
    label: ''
};

export default TodoListItem;