import { technologies } from "../constants/technologies";

const Technologies = () => {
  return (
    <section id="technologies" className="pb-14 bg-[#10131a]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="uppercase tracking-[0.25em] text-[11px] text-[#adc6ff]">
          Tech Stack
        </span>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Technologies I work with
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Throughout my career I've built scalable SaaS products, AI-powered
          applications and business automation platforms using modern web
          technologies and cloud services.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-14">
          {technologies.map((category) => (
            <div
              key={category.title}
              className="border border-[#32353c] bg-[#1d2027] p-7 transition-all hover:border-[#adc6ff]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 border border-[#32353c] bg-[#10131a] text-xs uppercase tracking-wider text-[#adc6ff]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
