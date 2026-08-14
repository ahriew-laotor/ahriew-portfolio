import { frontendSkills, learningSkills, toolsSkills } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#1e293b] bg-[#0a0f1f] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#60a5fa]">Skills</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#94a3b8] sm:text-lg">
            As a junior developer, I'm continuously building my skills through
            projects, practice, and hands-on learning.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Frontend */}
          <div className="border border-[#263247] bg-[#0f1628] p-6">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                01
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#e2e8f0]">
                Frontend
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#334155] px-3 py-1.5 text-sm text-[#cbd5e1]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-[#263247] bg-[#0f1628] p-6">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                02
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#e2e8f0]">
                Tools & Workflow
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {toolsSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#334155] px-3 py-1.5 text-sm text-[#cbd5e1]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="border border-[#263247] bg-[#0f1628] p-6">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                03
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#e2e8f0]">
                Currently Learning
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {learningSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#334155] px-3 py-1.5 text-sm text-[#cbd5e1]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 border-t border-[#1e293b] pt-6">
          <p className="text-sm text-[#64748b]">
            I'm focused on improving through real projects and continuously
            expanding my development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills