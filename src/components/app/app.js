import React, { useState } from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import TodoListItemAddForm from '../todo-list-item-add-form';

function App() {
    const [state, setState] = useState({
        items: [],
        nextItemId: 1
    });

    const onItemAdd = (label) => {
        setState((state) => {
            const item = {
                id: state.nextItemId,
                label,
                completed: false
            };

            return {
                ...state,
                nextItemId: state.nextItemId + 1,
                items: [...state.items, item]
            }
        });
    };

    const onItemDelete = (id) => {
        setState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx + 1)
            ];
            return {
                ...state,
                items
            };
        });
    };

    return (
        <div className="container">
            <Header title="Todo App"/>
            <TodoList
                items={state.items}
                onItemDelete={onItemDelete}
            />
            <TodoListItemAddForm onItemAdd={onItemAdd}/>
        </div>
    );
}

export default App;
