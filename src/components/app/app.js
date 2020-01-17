import React, { useState } from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import TodoListItemAddForm from '../todo-list-item-add-form';
import { sortByLabelReverse, changeItemProperty } from '../../utils'

function App() {
    const [state, setState] = useState({
        items: [],
        nextItemId: 1
    });

    const sortedItems = state.items.sort(sortByLabelReverse);

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

    const onChangePropertyCompleted = (id, value) => {
        setState((state) => {
            const items = changeItemProperty(state.items, id, 'completed', value);
            return {
                ...state,
                items
            };
        });
    };

    const onChangePropertyLabel = (id, value) => {
        setState((state) => {
            const items = changeItemProperty(state.items, id, 'label', value);
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
                items={sortedItems}
                onItemDelete={onItemDelete}
                onChangePropertyCompleted={onChangePropertyCompleted}
                onChangePropertyLabel={onChangePropertyLabel}
            />
            <TodoListItemAddForm onItemAdd={onItemAdd}/>
        </div>
    );
}

export default App;
