
import TodoManager from './todoManager';
import ProjectManager from './projectManager';
import Viewcontroller from './Viewcontroller';
import './style.css';

const todoManager = new TodoManager();
const projectManager = new ProjectManager();

const addProjectButton = document.querySelector('.add-project');
const addTodoButton = document.querySelector('.add-todo');

const vc = new Viewcontroller(projectManager, todoManager);

addProjectButton.addEventListener("click", (e) => {
    vc.addProjectCreationMenu();
})

addTodoButton.addEventListener("click", (e) => {
    vc.addTodoDCreationMenu();
})

vc.reloadProjects();
vc.reloadTodos();



/*
Format date
README.md
deploy


*/
