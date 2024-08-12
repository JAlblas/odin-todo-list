import Project from './Project';

class ProjectManager {
    constructor() {
        this.currentProject = null;
    }

    setCurrentProject(id) {
        this.currentProject = id;
    }

    getProjects() {
        return this.projects;
    }

    createProject(name, description) {
        this.projects.push(new Project(name, description));
    }

    updateProject(id, title, description) {
        const project = this.projects.find(project => project.id === id);
        project.title = title;
        project.description = description;
    }

    deleteProject(id) {
        this.projects = this.projects.filter((project) => {
            return project.id != id;
        });

        this.saveProjects();
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
            project.id,
            project.title,
            project.description
        ));

    }
}

export default ProjectManager;