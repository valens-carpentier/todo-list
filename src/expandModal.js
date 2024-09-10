import { myTasks } from './displayTasks.js';

function expandModal(taskId) {
    if (taskId === undefined) {
        console.error('expandModal called with undefined taskId');
        return;
    }

    const modal = document.getElementById('taskModal');
    const task = myTasks[taskId];
    
    if (!task) {
        console.error(`Task with id ${taskId} not found`);
        return;
    }

    // Fill in the modal with task details
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDueDate').value = task.dueDate;
    document.getElementById('taskCategory').value = task.category;
    document.getElementById('taskPriority').value = task.priority;
    document.getElementById('taskNotes').value = task.notes;

    modal.style.display = 'block';
}

// Export the function to be used in other files
export { expandModal };