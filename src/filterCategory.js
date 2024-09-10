import { myTasks } from './displayTasks.js';

function filterCategory() {
    const categorySelects = document.querySelectorAll('.category-text');
    
    categorySelects.forEach(categorySelect => {
        categorySelect.addEventListener('click', () => {
            const category = categorySelect.getAttribute('value');

            const tasks = document.querySelectorAll('.task');

            tasks.forEach(task => {
                const taskCategory = task.querySelector('.category').textContent;

                if (category === 'All' || taskCategory === category) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
            });
        });
    });
}

export { filterCategory };