
import TodoManager from './todoManager';
import ProjectManager from './projectManager';
import Viewcontroller from './Viewcontroller';
import './style.css';

const todoManager = new TodoManager();
const projectManager = new ProjectManager();

const projectCreateSection = document.querySelector('#project-create-menu');
const projectCreate = document.querySelector('#project-create-form');
const addProjectButton = document.querySelector('.add-project');


//todoManager.loadTodos();
projectManager.loadProjects();

const vc = new Viewcontroller(projectManager, todoManager);

addProjectButton.addEventListener("click", (e) => {
    //projectCreateSection.style.display = 'initial';
    vc.addProjectCreationMenu();
})



vc.reloadTodos();
vc.reloadProjects();

