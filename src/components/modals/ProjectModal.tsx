import { useEffect } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  const media =
    project.media.length > 0
      ? project.media
      : [
          {
            type: "image" as const,
            src: project.thumbnail,
            alt: project.title,
          },
        ];

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/80
        p-0
        backdrop-blur-sm
        md:p-6
      "
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

        <header
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#32353c]
            px-5
            py-4
            md:px-8
          "
        >
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

        {/* Main content */}

        <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
          <div
            className="
              grid
              h-full
              min-h-0
              lg:grid-cols-[360px_minmax(0,1fr)]
            "
          >
            {/* Left side */}

            <aside className="border-b border-[#32353c] bg-[#181b21] p-6 md:p-8 lg:overflow-y-auto lg:border-b-0 lg:border-r">
              {/* Role */}

              <div>
                <p className="text-sm text-gray-500">My role</p>

                <h3 className="mt-1 text-lg font-medium text-white">
                  Full Stack Developer
                </h3>
              </div>

              {/* Description */}

              <div className="mt-8">
                <p className="text-sm text-gray-500">Project description</p>

                <p className="mt-3 leading-7 text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}

              <div className="mt-8">
                <p className="text-sm text-gray-500">Technologies</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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

              {/* External link */}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
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
            </aside>

            {/* Right side */}

            <main className="min-w-0 p-5 md:p-8 lg:min-h-0 lg:overflow-y-auto">
              <div className="mx-auto flex w-full max-w-4xl flex-col">
                {/* Overview */}

                <div className="mb-6">
                  <p className="text-sm text-gray-500">Project overview</p>

                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {project.headline}
                  </h3>
                </div>

                {/* Media slider */}

                <div
                  className="
                    w-full
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#32353c]
                    bg-[#10131a]
                  "
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{
                      clickable: true,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="w-full"
                  >
                    {media.map((item, index) => (
                      <SwiperSlide key={`${item.src}-${index}`}>
                        <div
                          className="
                            flex
                            aspect-video
                            w-full
                            items-center
                            justify-center
                            bg-[#10131a]
                          "
                        >
                          {item.type === "image" ? (
                            <img
                              src={item.src}
                              alt={
                                item.alt ||
                                `${project.title} preview ${index + 1}`
                              }
                              className="
                                block
                                h-full
                                w-full
                                object-contain
                              "
                            />
                          ) : (
                            <video
                              controls
                              poster={item.poster}
                              className="
                                block
                                h-full
                                w-full
                                object-contain
                              "
                            >
                              <source src={item.src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>

                        {item.caption && (
                          <div className="border-t border-[#32353c] px-4 py-3 text-center">
                            <p className="text-sm text-gray-500">
                              {item.caption}
                            </p>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
