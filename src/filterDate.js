import { myTasks } from './displayTasks.js';
import { format, isValid } from 'date-fns';

function filterDate() {
    const dateSelects = document.querySelectorAll('.date-select');
    
    dateSelects.forEach(dateSelect => {
        dateSelect.addEventListener('click', () => {
            const currentDate = format(new Date(), 'yyyy-MM-dd');

            const tasks = document.querySelectorAll('.task');

            tasks.forEach(task => {
                const dateElement = task.querySelector('.date');
                const taskDate = new Date(dateElement.textContent);
                
                if (isValid(taskDate)) {
                    const formattedTaskDate = format(taskDate, 'yyyy-MM-dd');

                    if (dateSelect.textContent === 'Today' && formattedTaskDate === currentDate) {
                        task.style.display = 'flex';
                    } else if (dateSelect.textContent === 'Upcoming' && formattedTaskDate > currentDate) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
                } else {
                    console.error('Invalid date:', dateElement.textContent);
                    task.style.display = 'none';
                }
            });
        });
    });
}

export { filterDate };