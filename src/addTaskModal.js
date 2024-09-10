import { addTasktoLibrary } from './addTask.js';

function addTaskModal() {   
    const modal = document.getElementById('taskModal');
    const addTaskButtons = document.querySelectorAll('.add-task');
    const closeButton = document.querySelector('.close');
    const submitButton = document.getElementById('submitTask');

    addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';

        // Clear input fields
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskPriority').value = '1';
        document.getElementById('taskCategory').value = 'Work';
        document.getElementById('taskNotes').value = '';
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
    const notes = document.getElementById('taskNotes').value;

    if (title && description && dueDate && priority && category && notes) {
        addTasktoLibrary(title, description, dueDate, priority, category, notes);
        modal.style.display = 'none';
        
        // Clear input fields
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskPriority').value = '1';
        document.getElementById('taskCategory').value = 'Work';
        document.getElementById('taskNotes').value = '';

    } else {
        alert('Please fill in all fields');
    }
});

}

export { addTaskModal };