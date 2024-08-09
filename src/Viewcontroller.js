
class Viewcontroller {

    constructor(todoManager) {
        this.todoManager = todoManager;
    }

    reloadProjects(todoManager) {
        let projectsDiv = document.querySelector('#project-list');
        let tasksDiv = document.querySelector('#todo-list');

        const todos = this.todoManager.getTodos();

        todos.map((todo) => {
            let todoDiv = document.createElement('div');
            todoDiv.innerHTML = todo.title;
            tasksDiv.appendChild(todoDiv);
        })
    }

}

export default Viewcontroller;