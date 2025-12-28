import uniqid from 'uniqid'

class TodoItem {
    constructor(id, title, description, checked, dueDate, priority, projectId) {
        this.id = id === null ? uniqid() : id;
        this.title = title;
        this.description = description;
        this.checked = checked;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
    }
}

export default TodoItem;