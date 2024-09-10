// index.js
import { addTasktoLibrary } from "./addTask.js";
import { displayTasks } from "./displayTasks.js";
import { addTaskModal } from "./addTaskModal.js";
import { filterCategory } from "./filterCategory.js";
import "./styles.css";

addTaskModal();
displayTasks();
addTasktoLibrary();
filterCategory();