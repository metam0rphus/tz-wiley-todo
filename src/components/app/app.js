import React, { useState, useContext } from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import TodoListItemAddForm from '../todo-list-item-add-form';
import { sortByLabelReverse, changeItemProperty, getNextItemId } from '../../utils';
import TasksServiceContext from '../../contexts/tasks-service-context';

function App() {
    const tasksService = useContext(TasksServiceContext);
    const items = tasksService.get() || [];
    const nextItemId = getNextItemId(items);
    const [state, setState] = useState({
        items,
        nextItemId
    });
    const sortedItems = state.items.sort(sortByLabelReverse);

    const onItemAdd = (label) => {
        setState((state) => {
            const item = {
                id: state.nextItemId,
                label,
                completed: false
            };
            const items = [...state.items, item];

            tasksService.set(items);

            return {
                ...state,
                nextItemId: state.nextItemId + 1,
                items
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

            tasksService.set(items);

            return {
                ...state,
                items
            };
        });
    };

    const onChangePropertyCompleted = (id, value) => {
        setState((state) => {
            const items = changeItemProperty(state.items, id, 'completed', value);

            tasksService.set(items);

            return {
                ...state,
                items
            };
        });
    };

    const onChangePropertyLabel = (id, value) => {
        setState((state) => {
            const items = changeItemProperty(state.items, id, 'label', value);

            tasksService.set(items);

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
