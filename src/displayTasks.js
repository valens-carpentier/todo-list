const myTasks = [];

function displayTasks() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
    
    myTasks.forEach(task => {
        if (!task.title && !task.description && !task.dueDate && !task.priority && !task.category) {
            return;
        }
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const category = document.createElement('p');

        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate;
        priority.textContent = `Priority: ${task.priority}`;
        category.textContent = task.category;

        taskDetails.appendChild(title);
        taskDetails.appendChild(description);
        taskDetails.appendChild(dueDate);
        taskDetails.appendChild(priority);
        taskDetails.appendChild(category);
        // Replace the SVG delete button with a text button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', () => {
            myTasks.splice(myTasks.indexOf(task), 1);
            displayTasks();
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskDetails);
        taskDiv.appendChild(deleteButton);

        taskContainer.appendChild(taskDiv);
    });
}

export { displayTasks, myTasks };
