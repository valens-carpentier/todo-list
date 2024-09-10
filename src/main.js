// index.js
import { addTasktoLibrary } from "./addTask.js";
import { displayTasks } from "./displayTasks.js";
import { addTaskModal } from "./addTaskModal.js";
import { filterCategory } from "./filterCategory.js";
import { expandModal } from "./expandModal.js";
import "./styles.css";

// Initial display of tasks
displayTasks();
addTaskModal();
addTasktoLibrary();
filterCategory();
expandModal();
