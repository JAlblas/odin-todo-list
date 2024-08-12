import Project from './Project';

class ProjectManager {
    constructor() {

        this.loadProjects();


        if (this.projects.length === 0) {
            this.projects.push(new Project(null, "Default", "The default project"));
        }

        this.setCurrentProject(null);

    }

    setCurrentProject(id) {
        if (id === null) {
            this.currentProject = this.projects[0].id;
        } else {
            this.currentProject = id;
        }
    }

    getProjects() {
        return this.projects;
    }

    createProject(name, description) {
        const newProject = new Project(null, name, description);
        this.projects.push(newProject);
        this.setCurrentProject(newProject.id);
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