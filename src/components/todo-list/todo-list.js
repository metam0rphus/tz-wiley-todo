import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ items }) => {
    return items.length ? (<ul className="collection todo-list">
        {items.map((item) => <TodoListItem label={item.label}/>)}
    </ul>) : "The list is empty!";
};

TodoList.defaultProps = {
    items: []
};

export default TodoList;
