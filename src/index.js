
import TodoManager from './todoManager';
import ProjectManager from './projectManager';
import Viewcontroller from './Viewcontroller';
import './style.css';


const todoManager = new TodoManager();
const projectManager = new ProjectManager();
//todoManager.saveTodos();
todoManager.loadTodos();
projectManager.loadProjects();

const vc = new Viewcontroller(projectManager, todoManager);

vc.reloadTodos();
vc.reloadProjects();

