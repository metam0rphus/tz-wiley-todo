import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import TasksService from './services/tasks-service';
import TasksServiceContext from './contexts/tasks-service-context';

const tasksService = new TasksService();

ReactDOM.render(<ErrorBoundary>
    <TasksServiceContext.Provider value={tasksService}>
        <App />
    </TasksServiceContext.Provider>
</ErrorBoundary>, document.getElementById('root'));
