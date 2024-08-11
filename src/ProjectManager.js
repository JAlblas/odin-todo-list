import Project from './Project';

class ProjectManager {
    constructor() {
        this.currentProject = null;
    }

    getProjects() {
        return this.projects;
    }

    setCurrentProject(id) {
        this.currentProject = id;
    }

    createProject(name, description) {
        console.log("CREATING");
        console.log(name, description);
        this.projects.push(new Project(name, description));
    }

    saveProjects() {

        try {
            localStorage.setItem("projects", JSON.stringify(this.projects));
        } catch (e) {
            console.error("Failed to save projects:", e);
        }
    }

    loadProjects() {

        const projectsromStorage = JSON.parse(localStorage.getItem("projects")) || [];
        this.projects = projectsromStorage.map(project => new Project(
            project.title,
            project.description
        ));

    }
}

export default ProjectManager;