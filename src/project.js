import uniqid from 'uniqid'

class Project {
    constructor(title, description) {
        this.id = uniqid();
        this.title = title;
        this.description = description;
    }
}

export default Project;