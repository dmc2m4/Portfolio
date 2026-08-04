import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";

const Portfolio = () => {
  return (
    <section id="projects" className="bg-[#10131a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-[#adc6ff] uppercase tracking-[0.3em] text-sm mb-2">
              Featured Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Selected Projects
            </h2>
          </div>

          <p className="hidden lg:block text-gray-500">
            Professional projects built for real businesses
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="pb-14">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
