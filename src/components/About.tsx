const About = () => {
  return (
    <section id="about" className="bg-[#10131a] pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left */}

          <div className="lg:col-span-8 border border-[#32353c] bg-[#1d2027] p-10">
            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-8">
              Building Reliable Software
            </h2>

            <div className="space-y-6 text-gray-400 leading-8 text-lg">
              <p>
                I'm a Full-Stack Developer with over 3 years of experience
                building and maintaining SaaS products used by thousands of
                users. My work focuses on creating scalable, secure and
                maintainable applications that solve real business problems.
              </p>

              <p>
                I have experience across the entire development lifecycle, from
                designing backend APIs and databases to building modern user
                interfaces and integrating services such as Stripe, OpenAI,
                Vercel, Twilio and Google APIs.
              </p>

              <p>
                I approach software development with a strong problem-solving
                mindset, attention to detail and a commitment to continuous
                improvement. I enjoy collaborating with teams, understanding
                different perspectives and turning complex challenges into
                simple, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-[#32353c] mt-10 pt-8">
              <div>
                <h4 className="text-[#adc6ff] uppercase text-sm tracking-widest mb-3">
                  Experience
                </h4>

                <ul className="space-y-2 text-gray-300">
                  <li>3+ Years</li>
                  <li>SaaS Products</li>
                  <li>SCRUM</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#adc6ff] uppercase text-sm tracking-widest mb-3">
                  Core Stack
                </h4>

                <ul className="space-y-2 text-gray-300">
                  <li>Node.js / Nest.js</li>
                  <li>React / Next.js</li>
                  <li>SQL / No SQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#32353c] bg-[#1d2027] p-8">
              <div className="text-3xl mb-4">💻</div>

              <h3 className="text-2xl text-white mb-4">
                Full-Stack Development
              </h3>

              <p className="text-gray-400 leading-7">
                Building scalable web applications from backend architecture to
                modern, responsive user interfaces, with a strong focus on
                performance, maintainability and user experience.
              </p>
            </div>

            <div className="border border-[#32353c] bg-[#1d2027] p-8">
              <div className="text-3xl mb-4">🚀</div>

              <h3 className="text-2xl text-white mb-4">
                SaaS Product Development
              </h3>

              <p className="text-gray-400 leading-7">
                Developing end-to-end SaaS solutions with third-party
                integrations, payment systems, AI-powered features and
                automation workflows that solve real business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
