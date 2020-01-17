import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({
    items,
    onItemDelete,
    onChangePropertyCompleted,
    onChangePropertyLabel
}) => {
    return items.length ? (<ul className="collection todo-list">
        {items.map((item) => <TodoListItem
            key={item.id}
            label={item.label}
            completed={item.completed}
            onItemDelete={() => onItemDelete(item.id)}
            onChangePropertyCompleted={() => onChangePropertyCompleted(item.id, !item.completed)}
            onChangePropertyLabel={(value) => onChangePropertyLabel(item.id, value)}
        />)}
    </ul>) : "The list is empty!";
};

TodoList.defaultProps = {
    items: [],
    onItemDelete: () => {},
    onChangePropertyCompleted: () => {},
    onChangePropertyLabel: () => {}
};

export default TodoList;
