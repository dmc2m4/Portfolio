import { Link } from "react-scroll";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Ruby on Rails",
];

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#10131a] flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
          {/* LEFT */}

          <div className="max-w-2xl">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#32353c] bg-[#1d2027]">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />

              <span className="uppercase tracking-[0.25em] text-[11px] text-lime-300">
                Available for Remote Opportunities
              </span>
            </div>

            {/* Title */}

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Full <span className="text-[#adc6ff]">Stack</span>
              <br />
              Developer
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Full-Stack Developer with 3+ years of experience building scalable
              SaaS applications using Typescript, React, Node.js and Ruby on
              Rails. Experienced in AI integrations, payment systems, cloud
              services and business automation.
            </p>

            {/* Technologies */}

            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 border border-[#32353c] bg-[#1d2027] text-xs uppercase tracking-wider text-[#adc6ff]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="projects"
                smooth
                duration={500}
                className="cursor-pointer px-8 py-4 bg-[#adc6ff] text-[#10131a] font-semibold hover:opacity-90 transition-all"
              >
                View Projects
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                className="cursor-pointer px-8 py-4 border border-[#32353c] text-white hover:border-[#adc6ff] transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative group">
            {/* Outer Border */}

            <div className="absolute -inset-4 border border-[#32353c]" />

            {/* Inner Border */}

            <div className="absolute -inset-2 border border-[#adc6ff]/20" />

            {/* Image */}

            <div className="w-[320px] h-[420px] overflow-hidden border border-[#32353c] bg-[#1d2027]">
              <img
                src="/images/Daniel2.jpeg"
                alt="Daniel Martinez"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Experience Card */}

            <div className="absolute bottom-5 -right-8 border border-[#32353c] bg-[#1d2027] px-5 py-3">
              <p className="text-[#adc6ff] text-xs uppercase tracking-widest">
                3+ YEARS
              </p>

              <h3 className="text-white text-xl font-bold mt-1">
                BUILDING SAAS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
