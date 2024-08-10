
import TodoManager from './todoManager';
import Viewcontroller from './Viewcontroller';

import './style.css';

const todoManager = new TodoManager();
//todoManager.saveTodos();
todoManager.loadTodos();

const vc = new Viewcontroller(todoManager);
vc.reloadTodos();

