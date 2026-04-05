import roadmapData from "@/data/roadmap.json";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-12 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-3 font-mono text-sm text-accent bg-accent/10 border border-accent/20 px-6 py-3 rounded-full mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          {roadmapData.label}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-text mb-4 sm:mb-6 leading-tight">
          {roadmapData.title}
          <br />
          <span className="text-accent">{roadmapData.titleAccent}</span>
        </h2>
        <p className="text-lg sm:text-xl text-text2 max-w-3xl mx-auto leading-relaxed">
          {roadmapData.description}
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/20 rounded-full"></div>

        <div className="space-y-6 sm:space-y-8">
          {roadmapData.phases.map((phase) => (
            <div
              key={phase.id}
              className="relative flex items-start gap-4 sm:gap-8"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-10 sm:w-14 h-10 sm:h-14 bg-surface border-4 border-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30 z-10">
                <span className="text-xl sm:text-2xl">{phase.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1 bg-surface border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-accent/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-text font-display">
                    {phase.phase}
                  </h3>
                  <span
                    className={`inline-flex items-center font-mono text-xs sm:text-sm px-3 py-1.5 rounded-full border ${phase.statusColor}`}
                  >
                    {phase.status}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-text2 leading-relaxed mb-4 sm:mb-6">
                  {phase.description}
                </p>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {phase.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`bg-bg2 border border-border rounded-lg p-3 hover:border-accent/30 transition-colors ${
                        phase.status === "In Progress"
                          ? "bg-accent/5 border-accent/20"
                          : ""
                      }`}
                    >
                      <div className="font-semibold text-sm sm:text-base text-text mb-1">
                        {skill.name}
                      </div>
                      <div className="text-xs sm:text-sm text-text2">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special highlight for flagship project */}
                {phase.isFlagship && (
                  <div className="mt-4 sm:mt-6 bg-gradient-to-r from-accent/10 to-accent2/10 border border-accent/30 rounded-lg p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl sm:text-3xl">🚀</span>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-text font-display">
                          {phase.flagshipTitle}
                        </div>
                        <div className="text-xs sm:text-sm text-text2">
                          {phase.flagshipSubtitle}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-text2 leading-relaxed">
                      {phase.flagshipDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
