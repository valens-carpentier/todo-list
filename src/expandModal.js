import { displayTasks, myTasks } from './displayTasks.js';
import { format } from 'date-fns';

function expandModal(taskId) {
    if (taskId === undefined) {
        return;
    }

    const modal = document.getElementById('taskModal');
    const task = myTasks[taskId];
    const saveButton = document.getElementById('submitTask');
    
    if (!task) {
        return;
    }

    // Fill in the modal with task details
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDueDate').value = format(new Date(task.dueDate), 'yyyy-MM-dd');
    document.getElementById('taskCategory').value = task.category;
    document.getElementById('taskPriority').value = task.priority;
    document.getElementById('taskNotes').value = task.notes;

    // Set the taskId as a data attribute on the save button
    saveButton.dataset.taskId = taskId;

    modal.style.display = 'block';
}

function saveTaskChanges(taskId) {
    const task = myTasks[taskId];
    
    task.title = document.getElementById('taskTitle').value;
    task.description = document.getElementById('taskDescription').value;
    task.dueDate = document.getElementById('taskDueDate').value;
    task.category = document.getElementById('taskCategory').value;
    task.priority = document.getElementById('taskPriority').value;
    task.notes = document.getElementById('taskNotes').value;

    localStorage.setItem('tasks', JSON.stringify(myTasks));
    
    const modal = document.getElementById('taskModal');
    modal.style.display = 'none';
    
    // Refresh the task display
    displayTasks();
}

// Export the functions to be used in other files
export { expandModal, saveTaskChanges };