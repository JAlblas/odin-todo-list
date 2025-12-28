import uniqid from "uniqid";

class Project {
  constructor(id, title, description) {
    this.id = id === null ? uniqid() : id;
    this.title = title;
    this.description = description;
  }
}

export default Project;
