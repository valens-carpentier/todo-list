import { displayTasks } from './displayTasks.js';
import { myTasks } from './displayTasks.js';

function Task(title, description, dueDate, priority, category, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.notes = notes;
}

function addTasktoLibrary(title, description, dueDate, priority, category, notes) {
    const newTask = new Task(title, description, dueDate, priority, category, notes);
    myTasks.push(newTask);
    displayTasks();
}

export {addTasktoLibrary, Task };