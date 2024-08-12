
class Viewcontroller {

    constructor(projectManager, todoManager) {
        this.projectManager = projectManager;
        this.todoManager = todoManager;
    }

    reloadTodos() {
        const tasksDiv = document.querySelector('#todo-list');
        tasksDiv.innerHTML = "";

        const todos = this.todoManager.getTodos(this.projectManager.currentProject);

        todos.map((todo, index) => {
            const todoDiv = document.createElement('div');
            todoDiv.className = "todo";
            todoDiv.dataset.index = index;

            // Basic section
            const basic = document.createElement('div');
            basic.className = "todo-basic";

            const checkmark = document.createElement('button');
            if (todo.checked == true ? checkmark.className = "checkmark-btn" : checkmark.className = "checkmark-btn unchecked");

            checkmark.addEventListener("click", (e) => {
                e.stopPropagation();
                this.todoManager.toggleTodo(index);
                this.todoManager.saveTodos();
                this.reloadTodos();
            })

            basic.append(checkmark);

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

            basic.append(info);

            const buttons = document.createElement('div');
            buttons.className = "todo-buttons";

            const editButton = document.createElement('button');
            editButton.innerHTML = "Edit";
            editButton.className = "todo-edit";

            editButton.addEventListener("click", (e) => {
                e.stopPropagation();
                this.addTodoDCreationMenu(todo);
            })


            buttons.append(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.className = "todo-delete";

            deleteButton.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteButton.parentElement.parentElement.parentElement.remove();
                this.todoManager.deleteTodo(todo.id);
            })

            buttons.append(deleteButton);

            basic.append(buttons);
            todoDiv.appendChild(basic);

            // Details
            const details = document.createElement('div');
            details.className = "todo-details";

            const description = document.createElement('p');
            description.className = "todo-description";
            description.textContent = todo.description;
            details.append(description);

            const priority = document.createElement('p');
            priority.className = "todo-priority";
            priority.textContent = `Priority: ${todo.priority}`;
            details.append(priority);

            todoDiv.appendChild(details);

            todoDiv.addEventListener("click", (e) => {

                todoDiv.classList.toggle('expanded');
            })

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
            projectDiv.dataset.id = project.id;

            if (this.projectManager.currentProject === project.id) {
                projectDiv.classList.add("selected");
            }

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

            editButton.addEventListener("click", (e) => {
                e.stopPropagation();
                this.addProjectCreationMenu(project);
            })

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.className = "project-delete";

            deleteButton.addEventListener("click", (e) => {
                e.stopPropagation();

                deleteButton.parentElement.parentElement.remove();
                const id = project.id;
                this.projectManager.deleteProject(id);
            })

            buttons.append(deleteButton);


            projectDiv.append(buttons);

            projectDiv.addEventListener("click", () => {

                if (project.id === this.projectManager.currentProject) {
                    return;
                } else {
                    this.projectManager.setCurrentProject(project.id);
                    projectDiv.classList.toggle('selected');
                    this.reloadProjects();
                    this.reloadTodos();
                }
            })


            projectsDiv.appendChild(projectDiv);

        })
    }

    addProjectCreationMenu(project) {

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

        if (project == null) {
            projectNameInput.value = "";
            projectDescriptionInput.value = "";
        } else {
            projectNameInput.value = project.title;
            projectDescriptionInput.value = project.description;
        }


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

            if (project == null) {
                this.projectManager.createProject(name, description);
            } else {
                this.projectManager.updateProject(project.id, name, description);
            }


            projectName.value = "";
            projectDescription.value = "";

            projectCreateForm.style.display = 'none';

            this.projectManager.saveProjects();
            this.reloadProjects();
            this.reloadTodos();
        })

        // Append the form to the div element
        projectCreateMenu.appendChild(projectCreateForm);


        // Optionally, append the 'todo-create-menu' div to the body or any other container
        document.querySelector('#project-list').appendChild(projectCreateMenu);


    }

    addTodoDCreationMenu(todo) {

        // Create the div element with id 'todo-create-menu'
        const todoCreateMenu = document.createElement('div');
        todoCreateMenu.id = 'todo-create-menu';

        // Create the form element with id 'todo-create-form'
        const todoCreateForm = document.createElement('form');
        todoCreateForm.id = 'todo-create-form';


        // Create the input element for 'todo-name'
        const todoTitleInput = document.createElement('input');
        todoTitleInput.type = 'text';
        todoTitleInput.id = 'todo-name';
        todoTitleInput.name = 'task';
        todoTitleInput.placeholder = 'Name:';
        todoTitleInput.required = true;

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
        const todoPriorityInput = document.createElement('input');
        todoPriorityInput.type = 'text';
        todoPriorityInput.id = 'todo-priority';
        todoPriorityInput.name = 'priority';
        todoPriorityInput.placeholder = 'Priority';
        todoPriorityInput.required = true;

        if (todo == null) {
            todoTitleInput.value = "";
            todoDescriptionInput.value = "";
            todoDateInput.value = "";
            todoPriorityInput.value = "";
        } else if (todo !== null) {

            todoTitleInput.value = todo.title;
            todoDescriptionInput.value = todo.description;
            todoDateInput.value = todo.dueDate;
            todoPriorityInput.value = todo.priority;
        }

        todoCreateForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = todoTitleInput.value;
            const description = todoDescriptionInput.value;
            const date = todoDateInput.value;
            const priority = todoPriorityInput.value;

            if (todo == null) {
                this.todoManager.createTodo(name, description, date, priority, this.projectManager.currentProject);
            } else {
                this.todoManager.updateTodo(todo.id, name, description, date, priority, null);
            }

            todoTitleInput.value = "";
            todoDescriptionInput.value = "";
            todoDateInput.value = "";
            todoPriorityInput.value = "";

            todoCreateForm.style.display = 'none';

            this.todoManager.saveTodos();
            this.reloadTodos();

        })


        // Create the button element for submitting the form
        const todoCreateButton = document.createElement('button');
        todoCreateButton.type = 'submit';
        todoCreateButton.id = 'todo-create';
        todoCreateButton.textContent = 'Save';

        // Append the input elements and button to the form
        todoCreateForm.appendChild(todoTitleInput);
        todoCreateForm.appendChild(todoDescriptionInput);
        todoCreateForm.appendChild(todoDateInput);
        todoCreateForm.appendChild(todoPriorityInput);
        todoCreateForm.appendChild(todoCreateButton);

        todoCreateMenu.appendChild(todoCreateForm);

        document.querySelector('#todo-list').appendChild(todoCreateMenu);
    }
}

export default Viewcontroller;