
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

            const checkmark = document.createElement('button');
            if (todo.checked == true ? checkmark.className = "checkmark-btn" : checkmark.className = "checkmark-btn unchecked");
            todoDiv.append(checkmark);

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

        // Create the div element with id 'project-create-menu'
        const projectCreateMenu = document.createElement('div');
        projectCreateMenu.id = 'project-create-menu';

        // Create the form element with id 'project-create-form'
        const projectCreateForm = document.createElement('form');
        projectCreateForm.id = 'project-create-form';

        // Create the first input element for 'project-name'
        const projectNameInput = document.createElement('input');
        projectNameInput.type = 'text';
        projectNameInput.id = 'project-name';
        projectNameInput.name = 'task';
        projectNameInput.placeholder = 'Name:';
        projectNameInput.required = true; // Set the 'required' attribute

        // Create the second input element for 'project-description'
        const projectDescriptionInput = document.createElement('input');
        projectDescriptionInput.type = 'text';
        projectDescriptionInput.id = 'project-description';
        projectDescriptionInput.name = 'description';
        projectDescriptionInput.placeholder = 'Description';
        projectDescriptionInput.required = true; // Set the 'required' attribute

        // Create the button element for submitting the form
        const projectCreateButton = document.createElement('button');
        projectCreateButton.type = 'submit';
        projectCreateButton.id = 'project-create';
        projectCreateButton.textContent = 'Save'; // Set the text inside the button

        // Append the input elements and button to the form
        projectCreateForm.appendChild(projectNameInput);
        projectCreateForm.appendChild(projectDescriptionInput);
        projectCreateForm.appendChild(projectCreateButton);

        projectCreateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("SUBMIT");

            const projectName = document.querySelector('#project-name');
            const projectDescription = document.querySelector('#project-description');

            const name = projectName.value;
            const description = projectDescription.value;

            this.projectManager.createProject(name, description);

            projectName.value = "";
            projectDescription.value = "";

            projectCreateForm.style.display = 'none';

            this.projectManager.saveProjects();
            this.reloadProjects();
        })

        // Append the form to the div element
        projectCreateMenu.appendChild(projectCreateForm);


        // Optionally, append the 'todo-create-menu' div to the body or any other container
        document.querySelector('#project-list').appendChild(projectCreateMenu);



    }

    addTodoDCreationMenu() {

        // Create the div element with id 'todo-create-menu'
        const todoCreateMenu = document.createElement('div');
        todoCreateMenu.id = 'todo-create-menu';

        // Create the form element with id 'todo-create-form'
        const todoCreateForm = document.createElement('form');
        todoCreateForm.id = 'todo-create-form';

        // Create the input element for 'todo-name'
        const todoNameInput = document.createElement('input');
        todoNameInput.type = 'text';
        todoNameInput.id = 'todo-name';
        todoNameInput.name = 'task';
        todoNameInput.placeholder = 'Name:';
        todoNameInput.required = true;

        // Create the input element for 'todo-description'
        const todoDescriptionInput = document.createElement('input');
        todoDescriptionInput.type = 'text';
        todoDescriptionInput.id = 'todo-description';
        todoDescriptionInput.name = 'description';
        todoDescriptionInput.placeholder = 'Description';
        todoDescriptionInput.required = true;

        // Create the input element for 'todo-date'
        const todoDateInput = document.createElement('input');
        todoDateInput.type = 'text';
        todoDateInput.id = 'todo-date';
        todoDateInput.name = 'date';
        todoDateInput.placeholder = 'Due date:';
        todoDateInput.required = true;

        // Create the input element for 'priority'
        const priorityInput = document.createElement('input');
        priorityInput.type = 'text';
        priorityInput.id = 'priority';
        priorityInput.name = 'priority';
        priorityInput.placeholder = 'Priority';
        priorityInput.required = true;

        // Create the button element for submitting the form
        const todoCreateButton = document.createElement('button');
        todoCreateButton.type = 'submit';
        todoCreateButton.id = 'todo-create';
        todoCreateButton.textContent = 'Save';

        // Append the input elements and button to the form
        todoCreateForm.appendChild(todoNameInput);
        todoCreateForm.appendChild(todoDescriptionInput);
        todoCreateForm.appendChild(todoDateInput);
        todoCreateForm.appendChild(priorityInput);
        todoCreateForm.appendChild(todoCreateButton);

        // Append the form to the div element
        todoCreateMenu.appendChild(todoCreateForm);

    }

}

export default Viewcontroller;