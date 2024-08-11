
import TodoManager from './todoManager';
import ProjectManager from './projectManager';
import Viewcontroller from './Viewcontroller';
import './style.css';

const todoManager = new TodoManager();
const projectManager = new ProjectManager();

const projectCreateSection = document.querySelector('#project-create-menu');
const projectCreate = document.querySelector('#project-create-form');
const addProjectButton = document.querySelector('.add-project');

const projectName = document.querySelector('#project-name');
const projectDescription = document.querySelector('#project-description');

//todoManager.saveTodos();
todoManager.loadTodos();
projectManager.loadProjects();

const vc = new Viewcontroller(projectManager, todoManager);

projectCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMIT");

    const name = projectName.value;
    const description = projectDescription.value;

    projectManager.createProject(name, description);

    projectName.value = "";
    projectDescription.value = "";

    projectCreateSection.style.display = 'none';

    projectManager.saveProjects();
    vc.reloadProjects();
})

addProjectButton.addEventListener("click", (e) => {
    projectCreateSection.style.display = 'initial';
})



vc.reloadTodos();
vc.reloadProjects();

