import { useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Project } from "../../types/project";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.media.length > 0 ? project.media : [project.thumbnail];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-0 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          bg-[#1d2027]
          shadow-2xl
          md:h-[90vh]
          md:max-w-7xl
          md:rounded-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}

        <header className="flex items-center justify-between border-b border-[#32353c] px-5 py-4 md:px-8">
          <div className="min-w-0">
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#adc6ff]">
              {project.category}
            </p>

            <h2 className="truncate text-lg font-semibold text-white md:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="
              ml-4
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#32353c]
              text-gray-400
              transition
              hover:border-[#adc6ff]
              hover:text-white
            "
          >
            <FaTimes size={18} />
          </button>
        </header>

        {/* Content */}

        <div className="flex-1 overflow-y-auto">
          <div className="grid min-h-full lg:grid-cols-[380px_1fr]">
            {/* Left column */}

            <aside className="border-b border-[#32353c] bg-[#181b21] p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="lg:sticky lg:top-0">
                <p className="text-sm text-gray-500">My role</p>

                <h3 className="mt-1 text-lg font-medium text-white">
                  Full Stack Developer
                </h3>

                <div className="mt-10">
                  <p className="text-sm text-gray-500">Project description</p>

                  <p className="mt-3 leading-7 text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}

                <div className="mt-10">
                  <p className="text-sm text-gray-500">Technologies</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech: any) => (
                      <span
                        key={tech}
                        className="
                          rounded-md
                          border
                          border-[#32353c]
                          bg-[#20242d]
                          px-3
                          py-1.5
                          text-sm
                          text-[#adc6ff]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project link */}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-10
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#adc6ff]
                      px-5
                      py-3
                      font-medium
                      text-[#10131a]
                      transition
                      hover:bg-white
                    "
                  >
                    Visit Project
                    <FaExternalLinkAlt size={13} />
                  </a>
                )}
              </div>
            </aside>

            {/* Right column */}

            <main className="p-5 md:p-8">
              <div className="mb-8">
                <p className="text-sm text-gray-500">Project overview</p>

                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  {project.headline}
                </h3>
              </div>

              {/* Media */}

              <div className="space-y-8">
                {images.map((image: any, index: number) => (
                  <div key={`${image}-${index}`}>
                    <div
                      className="
                        overflow-hidden
                        border
                        border-[#32353c]
                        bg-[#10131a]
                      "
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    <p className="mt-3 text-center text-sm text-gray-500">
                      {index === 0
                        ? "Project preview"
                        : `Project screenshot ${index + 1}`}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation placeholder */}

              {images.length > 1 && (
                <div className="mt-10 flex items-center justify-between">
                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    <FaArrowLeft />
                    Previous
                  </button>

                  <span className="text-sm text-gray-500">
                    1 / {images.length}
                  </span>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    Next
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
