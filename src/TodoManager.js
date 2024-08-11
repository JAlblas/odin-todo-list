import TodoItem from "./Todo";

class TodoManager {
    constructor() {
        //this.todos = [new TodoItem("title", "description", false, new Date(), "High", 1), new TodoItem("title 2", "description 2", true, new Date(), "Low", 0)];
        this.loadTodos();
        //this.saveTodos();
    }

    getTodos() {
        return this.todos;
    }

    createTodo(name, description, date, priority, projectId) {
        console.log("CREATING TODO");
        console.log(name, description, date, priority, projectId);
        this.projects.push(new TodoItem(name, description, false, Date(), "High", 0));
    }

    deleteTodo(index) {
        //this.todo
    }

    saveTodos() {

        try {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        } catch (e) {
            console.error("Failed to save todos:", e);
        }
    }

    loadTodos() {
        const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];
        this.todos = todosFromStorage.map(todo => new TodoItem(
            todo.title,
            todo.description,
            todo.checked,
            new Date(todo.dueDate),
            todo.priority,
            todo.id
        ));
    }
}

export default TodoManager;