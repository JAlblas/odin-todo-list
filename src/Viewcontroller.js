
class Viewcontroller {

    constructor(projectManager, todoManager) {
        this.projectManager = projectManager;
        this.todoManager = todoManager;
    }

    reloadTodos() {
        const tasksDiv = document.querySelector('#todo-list');

        const todos = this.todoManager.getTodos();

        todos.map((todo) => {
            const todoDiv = document.createElement('div');
            todoDiv.className = "todo";

            const info = document.createElement('div');
            info.className = "todo-info";

            const title = document.createElement('div');
            title.innerHTML = todo.title;
            title.className = "todo-title";
            info.append(title);

            const date = document.createElement('div');
            date.innerHTML = todo.dueDate;
            date.className = "todo-date";
            info.append(date);

            todoDiv.append(info);

            const buttons = document.createElement('div');
            buttons.className = "todo-buttons";

            const editButton = document.createElement('button');
            editButton.innerHTML = "Edit";
            editButton.className = "todo-edit";
            buttons.append(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.className = "todo-delete";
            buttons.append(deleteButton);

            todoDiv.append(buttons);

            tasksDiv.appendChild(todoDiv);
        })
    }

    reloadProjects() {
        const projectsDiv = document.querySelector('#project-list');
        projectsDiv.innerHTML = "";

        const projects = this.projectManager.getProjects();

        projects.map((project) => {
            const projectDiv = document.createElement('div');
            projectDiv.className = "project";

            const info = document.createElement('div');
            info.className = "project-info";

            const title = document.createElement('div');
            title.innerHTML = project.title;
            title.className = "project-title";
            info.append(title);

            projectDiv.append(info);

            const buttons = document.createElement('div');
            buttons.className = "project-buttons";

            const editButton = document.createElement('button');
            editButton.innerHTML = "Edit";
            editButton.className = "project-edit";
            buttons.append(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.className = "todo-delete";
            buttons.append(deleteButton);

            projectDiv.append(buttons);

            projectsDiv.appendChild(projectDiv);
        })
    }

    addProjectCreationMenu() {
        document.querySelector('.project-create-menu');

    }

}

export default Viewcontroller;