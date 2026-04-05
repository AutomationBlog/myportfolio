import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-3 font-mono text-sm text-accent bg-accent/10 border border-accent/20 px-6 py-3 rounded-full mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          {projectsData.label}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-text mb-4 sm:mb-6 leading-tight">
          {projectsData.title}
          <br />
          <span className="text-accent">{projectsData.titleAccent}</span>
        </h2>
        <p className="text-lg sm:text-xl text-text2 max-w-3xl mx-auto leading-relaxed">
          {projectsData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {projectsData.projects.map((project) => (
          <div
            key={project.id}
            className="group bg-surface border border-border rounded-3xl p-6 sm:p-7 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-accent/20 transition-colors">
                {project.icon}
              </div>
              <span
                className={`inline-flex items-center font-mono text-xs px-3 py-1.5 rounded-full border ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-bold text-text font-display mb-3 leading-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-text2 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-text3 bg-bg2 border border-border px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-text2 hover:text-accent transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-text2 hover:text-accent transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
