import React from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import TodoListItemAddForm from '../todo-list-item-add-form';

function App() {
    const items = [
        // {label: 'test 1'},
        // {label: 'test 2'},
        // {label: 'test 3'},
    ];
    return (
        <div className="container">
            <Header title="Todo App"/>
            <TodoList items={items}/>
            <TodoListItemAddForm />
        </div>
    );
}

export default App;
