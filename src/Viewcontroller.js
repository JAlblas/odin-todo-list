
class Viewcontroller {

    constructor(todoManager) {
        this.todoManager = todoManager;
    }

    reloadTodos(todoManager) {
        const projectsDiv = document.querySelector('#project-list');
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

}

export default Viewcontroller;