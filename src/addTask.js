import { displayTasks } from './displayTasks.js';
import { myTasks } from './displayTasks.js';

function Task(title, description, dueDate, priority, category) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
}

function addTasktoLibrary(title, description, dueDate, priority, category) {
    const newTask = new Task(title, description, dueDate, priority, category);
    myTasks.push(newTask);
    displayTasks();
}

function addTaskModal() {   
    const modal = document.getElementById('taskModal');
    const addTaskButtons = document.querySelectorAll('.add-task');
    const closeButton = document.querySelector('.close');
    const submitButton = document.getElementById('submitTask');

    addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

submitButton.addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;
    const category = document.getElementById('taskCategory').value;
    if (title && description && dueDate && priority) {
        addTasktoLibrary(title, description, dueDate, priority, category);
        modal.style.display = 'none';
        
        // Clear input fields
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskPriority').value = '1';
        document.getElementById('taskCategory').value = 'Work';
    } else {
        alert('Please fill in all fields');
    }
});

}

export { addTaskModal, addTasktoLibrary };