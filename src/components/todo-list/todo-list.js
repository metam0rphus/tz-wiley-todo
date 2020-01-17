import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ items, onItemDelete, onChangeCompleted }) => {
    return items.length ? (<ul className="collection todo-list">
        {items.map((item) => <TodoListItem
            key={item.id}
            label={item.label}
            completed={item.completed}
            onItemDelete={() => onItemDelete(item.id)}
            onChangeCompleted={() => onChangeCompleted(item.id, !item.completed)}
        />)}
    </ul>) : "The list is empty!";
};

TodoList.defaultProps = {
    items: [],
    onItemDelete: () => {},
    onChangeCompleted: () => {}
};

export default TodoList;
