import React, { useState } from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import TodoListItemAddForm from '../todo-list-item-add-form';

function App() {
    const [state, setState] = useState({
        items: [],
        nextItemId: 1
    });

    const createItem = (label) => {
        return {
            id: state.nextItemId,
            label,
            completed: false
        };
    };

    const onItemAdd = (label) => {
        const item = createItem(label);
        setState({
            nextItemId: state.nextItemId + 1,
            items: [...state.items, item]
        });
    };

    return (
        <div className="container">
            <Header title="Todo App"/>
            <TodoList
                items={state.items}
            />
            <TodoListItemAddForm onItemAdd={onItemAdd}/>
        </div>
    );
}

export default App;
