import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types/project";

interface Props {
  project: Project;
  onViewProject: (project: Project) => void;
}

const ProjectCard = ({ project, onViewProject }: Props) => {
  const MAX_TECHS = 3;

  const visibleTechnologies = project.technologies.slice(0, MAX_TECHS);
  const hiddenCount = project.technologies.length - MAX_TECHS;
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#32353c] bg-[#1d2027] transition-all duration-300 hover:-translate-y-2 hover:border-[#adc6ff]">
      {/* Image */}

      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-fill transition duration-500 group-hover:scale-105"
        />

        {/* <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-blue-400/40 bg-slate-900/80 px-3 py-1.5 backdrop-blur-md shadow-lg shadow-blue-500/20">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-yellow-400">
            {project.category}
          </span>
        </div> */}
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-3xl font-semibold leading-tight text-white h-[120px]">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400 leading-8 h-24">{project.headline}</p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#2a2f3a] px-3 py-1 text-sm text-[#adc6ff]"
            >
              {tech}
            </span>
          ))}

          {hiddenCount > 0 && (
            <span className="rounded-md border border-[#2a2f3a] bg-[#202634] px-3 py-1 text-sm text-gray-400">
              +{hiddenCount}
            </span>
          )}
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-[#32353c] pt-5">
          <span className="text-sm text-gray-500">Professional Project</span>

          <button
            onClick={() => onViewProject(project)}
            className="
              flex
              items-center
              gap-2
              text-[#adc6ff]
              transition
              hover:text-white
            "
          >
            View Project
            <FaExternalLinkAlt size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
