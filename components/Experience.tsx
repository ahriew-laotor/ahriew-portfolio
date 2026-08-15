import React from 'react'

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#1e293b] bg-[#0f1628] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#60a5fa]">Experience</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
            My journey so far.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#94a3b8] sm:text-lg">
            My background combines hands-on management experience with
            continuous learning in technology, design, and frontend development.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#64748b]">
              Work Experience
            </span>

            <div className="h-px flex-1 bg-[#263247]" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
            {/* Date */}
            <div>
              <p className="text-sm font-medium text-[#64748b]">
                2023 — Present
              </p>
            </div>

            {/* Role */}
            <div className="border-l border-[#334155] pl-6 sm:pl-8">
              <h3 className="text-xl font-semibold text-[#e2e8f0]">
                Store Manager
              </h3>

              <p className="mt-1 text-sm text-[#60a5fa]">
                Mixue Ice Cream & Tea
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#94a3b8]">
                Managed daily store operations while developing practical
                experience in leadership, problem-solving, communication,
                customer service, and team coordination.
              </p>

              {/* Transferable skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Leadership",
                  "Problem Solving",
                  "Teamwork",
                  "Communication",
                  "Time Management",
                ].map((skill) => (
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
        </div>

        {/* Learning */}
        <div className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#64748b]">
              Learning
            </span>

            <div className="h-px flex-1 bg-[#263247]" />
          </div>

          <div className="divide-y divide-[#263247] border-y border-[#263247]">
            {/* Coding */}
            <div className="grid gap-4 py-7 sm:grid-cols-[180px_1fr]">
              <p className="text-sm font-medium text-[#64748b]">
                26.03.25 - 26.11.25
              </p>

              <div>
                <h3 className="text-lg font-semibold text-[#e2e8f0]">
                  Coding, Programming & Data Science Course
                </h3>

                <p className="mt-2 max-w-2xl text-md leading-6 text-[#94a3b8]">
                  Samsung Innovation Campus
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94a3b8]">
                  Built foundational knowledge in programming, coding concepts,
                  and data science through structured learning and practice.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "Jupyter Notebook", "Pandas", "NumPy"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="border border-[#334155] px-3 py-1.5 text-sm text-[#cbd5e1]"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="grid gap-4 py-7 sm:grid-cols-[180px_1fr]">
              <p className="text-sm font-medium text-[#64748b]">
                15.12.25 - 28.01.26
              </p>

              <div>
                <h3 className="text-lg font-semibold text-[#e2e8f0]">
                  The Graphic design Course
                </h3>

                <p className="mt-2 max-w-2xl text-md leading-6 text-[#94a3b8]">
                  KY Graphic Design Training center
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94a3b8]">
                  Developed an understanding of visual design, composition,
                  typography, and digital graphics.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["PhotoShop", "Illustrator", "Premiere Pro"].map((skill) => (
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

            {/* Frontend */}
            <div className="grid gap-4 py-7 sm:grid-cols-[180px_1fr]">
              <p className="text-sm font-medium text-[#64748b]">
                13.06.26 - 15.08.26
              </p>

              <div>
                <h3 className="text-lg font-semibold text-[#e2e8f0]">
                  Frontend Developer Masterclass
                </h3>

                <p className="mt-2 max-w-2xl text-md leading-6 text-[#94a3b8]">
                  OkardTech
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94a3b8]">
                  Focused on modern frontend development, including building
                  responsive and interactive web applications with modern
                  JavaScript frameworks.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "ShadCN UI",
                    "APIs Integration",
                    "Git & GitHub",
                  ].map((skill) => (
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
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-10">
          <p className="text-sm text-[#64748b]">
            From managing people and operations to building software, I'm
            continuing to develop both my technical and professional skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience