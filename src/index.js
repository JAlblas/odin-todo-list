
import TodoManager from './todoManager';
import ProjectManager from './projectManager';
import Viewcontroller from './Viewcontroller';
import './style.css';

const todoManager = new TodoManager();
const projectManager = new ProjectManager();

const addProjectButton = document.querySelector('.add-project');
const addTodoButton = document.querySelector('.add-todo');

//todoManager.loadTodos();
projectManager.loadProjects();

const vc = new Viewcontroller(projectManager, todoManager);

addProjectButton.addEventListener("click", (e) => {
    vc.addProjectCreationMenu();
})

addTodoButton.addEventListener("click", (e) => {
    vc.addTodoDCreationMenu();
})


vc.reloadTodos();
vc.reloadProjects();



/*
TODO:

Delte Project
Delete Todo
Toggle Todo
Toggle Projects
Edit Project
Edit Todo
Format date

*/
