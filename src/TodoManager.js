import TodoItem from "./Todo";

class TodoManager {
    constructor() {
        this.todos = [new TodoItem("title", "description", new Date(), "High", 1), new TodoItem("title 2", "description 2", new Date(), "Low", 0)];
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
            new Date(todo.dueDate),
            todo.priority,
            todo.id
        ));
    }
}

export default TodoManager;