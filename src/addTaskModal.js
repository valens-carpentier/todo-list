import { addTasktoLibrary } from './addTask.js';
import { format } from 'date-fns';
import { saveTaskChanges } from './expandModal.js';

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
        document.getElementById('taskDueDate').value = format(new Date(), 'yyyy-MM-dd');
        document.getElementById('taskPriority').value = '';
        document.getElementById('taskCategory').value = '';
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
    const taskId = submitButton.dataset.taskId;
    
    if (taskId) {
        // Editing existing task
        saveTaskChanges(taskId);
    } else {
        // Adding new task
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const rawDueDate = document.getElementById('taskDueDate').value;
        const dueDate = format(new Date(rawDueDate), 'yyyy-MM-dd');
        const priority = document.getElementById('taskPriority').value;
        const category = document.getElementById('taskCategory').value;
        const notes = document.getElementById('taskNotes').value;

        if (title && description && dueDate && priority && category && notes) {
            addTasktoLibrary(title, description, dueDate, priority, category, notes);
            modal.style.display = 'none';
            
            // Clear input fields
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
            document.getElementById('taskDueDate').value = format(new Date(), 'yyyy-MM-dd');
            document.getElementById('taskPriority').value = '';
            document.getElementById('taskCategory').value = '';
            document.getElementById('taskNotes').value = '';
        } else {
            alert('Please fill in all fields');
        }
    }
    
    // Clear the taskId from the save button
    submitButton.dataset.taskId = '';
});

}

export { addTaskModal };