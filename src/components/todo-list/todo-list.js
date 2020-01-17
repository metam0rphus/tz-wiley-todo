import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ items, onItemDelete }) => {
    return items.length ? (<ul className="collection todo-list">
        {items.map((item) => <TodoListItem
            key={item.id}
            label={item.label}
            onItemDelete={() => onItemDelete(item.id)}
        />)}
    </ul>) : "The list is empty!";
};

TodoList.defaultProps = {
    items: []
};

export default TodoList;
