import aboutData from "@/data/about.json";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-3 font-mono text-sm text-accent bg-accent/10 border border-accent/20 px-6 py-3 rounded-full mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          {aboutData.label}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-text mb-4 sm:mb-6 leading-tight">
          {aboutData.title}
          <br />
          <span className="text-accent">{aboutData.titleAccent}</span>
        </h2>
        <p className="text-lg sm:text-xl text-text2 max-w-3xl mx-auto leading-relaxed">
          {aboutData.description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
        {aboutData.skillCategories.map((skillGroup) => (
          <div
            key={skillGroup.id}
            className="bg-surface border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl font-bold text-text font-display">
                {skillGroup.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block font-mono text-xs sm:text-sm text-text3 bg-bg2 border border-border px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:border-accent/30 hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Personal Statement */}
      <div className="bg-surface border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4 sm:mb-6 font-display">
            My Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {aboutData.journey.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-text">
                  {item.title}
                </h4>
                <p className="text-text2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
