const myTasks = [
    {
        title: 'Work out',
        description: 'Go to the gym',
        dueDate: '2024-01-01',
        priority: '2',
        category: 'Fitness',
        notes: 'Notes 1'
    },
    {
        title: 'Work on code',
        description: 'Code each day at 7am',
        dueDate: '2024-01-02',
        priority: '1',
        category: 'Work',
        notes: 'Notes 2'
    }
];

function displayTasks() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
    
    myTasks.forEach(task => {
        if (!task.title && !task.description && !task.dueDate && !task.priority && !task.category && !task.notes) {
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
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const category = document.createElement('p');
        category.classList.add('category');

        title.textContent = task.title;
        dueDate.textContent = task.dueDate;
        priority.textContent = `Priority: ${task.priority}`;
        category.textContent = task.category;

        taskDetails.appendChild(title);
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

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskDiv.style.textDecoration = 'line-through';
            } else {
                taskDiv.style.textDecoration = 'none';
            }
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskDetails);
        taskDiv.appendChild(deleteButton);

        taskContainer.appendChild(taskDiv);
    });
}

export { displayTasks, myTasks };
