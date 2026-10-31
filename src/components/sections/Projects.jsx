
import projects from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl bg-white px-6 py-16 transition-colors duration-300 dark:bg-gray-950"
    >
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
        My Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
          >
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="mb-5 flex-1 leading-7 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Live Demo
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
