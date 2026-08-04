const Contact = () => {
  return (
    <section id="contact" className="pb-16 pt-6 bg-[#10131a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-px bg-[#adc6ff]" />

            <span className="uppercase tracking-[0.25em] text-[11px] text-lime-300">
              Contact
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white">
            Let's build something together.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're looking for a Full Stack Developer, need help scaling
            an existing SaaS product or want to discuss a new project, I'd love
            to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <div className="space-y-8">
            <div className="border border-[#32353c] bg-[#1d2027] p-8">
              <span className="uppercase tracking-[0.2em] text-xs text-[#adc6ff]">
                Availability
              </span>

              <h3 className="text-2xl font-semibold text-white mt-3">
                Open to remote opportunities
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                I'm currently available for full-time remote positions and
                freelance projects involving SaaS platforms, AI integrations and
                scalable web applications.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#adc6ff]">
                  Email
                </p>

                <p className="text-white mt-2">
                  danielmartinezcabrera@hotmail.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#adc6ff]">
                  Location
                </p>

                <p className="text-white mt-2">Barranquilla, Colombia</p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="border border-[#32353c] bg-[#1d2027] p-8">
            <form
              action="https://getform.io/f/e3366a56-fa56-4df9-aa2c-6bd57a562116"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-4 bg-[#10131a] border border-[#32353c] text-white placeholder-gray-500 focus:outline-none focus:border-[#adc6ff] transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-4 bg-[#10131a] border border-[#32353c] text-white placeholder-gray-500 focus:outline-none focus:border-[#adc6ff] transition-colors"
              />

              <textarea
                rows={7}
                name="message"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-4 bg-[#10131a] border border-[#32353c] text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#adc6ff] transition-colors"
              />

              <button
                type="submit"
                className="px-8 py-4 bg-[#adc6ff] text-[#10131a] font-semibold hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
