export default class TasksService {
    get = () => JSON.parse(localStorage.getItem('tasks'));

    set = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
}