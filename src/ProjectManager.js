import Project from './Project';

class ProjectManager {
    constructor() {
        this.projects = [new Project("Main", "testing")];
    }

    getProjects() {
        return this.projects;
    }

    saveProjects() {

        try {
            localStorage.setItem("projects", JSON.stringify(this.projects));
        } catch (e) {
            console.error("Failed to save projects:", e);
        }
    }

    loadProjects() {
        /*
        const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];
        this.todos = todosFromStorage.map(todo => new TodoItem(
            todo.title,
            todo.description,
            new Date(todo.dueDate),
            todo.priority,
            todo.id
        ));
        */
    }
}

export default ProjectManager;