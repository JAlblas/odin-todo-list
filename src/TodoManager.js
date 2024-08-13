import TodoItem from "./Todo";

class TodoManager {
    constructor() {
        this.loadTodos();
    }

    getTodos(projectId) {
        return this.todos.filter(todo => todo.projectId == projectId);
    }

    createTodo(title, description, date, priority, projectId) {
        console.log(projectId);
        this.todos.push(new TodoItem(null, title, description, false, date, priority, projectId));
    }

    updateTodo(id, title, description, date, priority, projectId) {
        const todo = this.todos.find(todo => todo.id === id);
        todo.title = title;
        todo.description = description;
        todo.date = date;
        todo.priority = priority;
    }

    toggleTodo(index) {
        const item = this.todos[index];
        item.checked = !item.checked;
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {
            return todo.id != id;
        });

        this.saveTodos();
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
            todo.id,
            todo.title,
            todo.description,
            todo.checked,
            todo.dueDate,
            todo.priority,
            todo.projectId
        ));
    }
}

export default TodoManager;