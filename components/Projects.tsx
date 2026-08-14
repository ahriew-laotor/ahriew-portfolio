import React from 'react'

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-[#1e293b] bg-[#0a0f1f] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#60a5fa]">Projects</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#94a3b8] sm:text-lg">
            A collection of projects I've built while developing my frontend
            development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14">
          {/* Portfolio */}
          <article className="group grid overflow-hidden border border-[#263247] bg-[#0f1628] md:grid-cols-2">
            {/* Preview */}
            <div className="flex min-h-70 items-center justify-center bg-[#111827] p-8">
              <div className="w-full max-w-md overflow-hidden rounded-lg border border-[#334155] bg-[#0a0f1f] shadow-xl">
                {/* Fake browser header */}
                <div className="flex items-center gap-1.5 border-b border-[#1e293b] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#475569]" />
                  <span className="h-2 w-2 rounded-full bg-[#475569]" />
                  <span className="h-2 w-2 rounded-full bg-[#475569]" />
                </div>

                {/* Preview */}
                <div className="p-6">
                  <p className="text-xs text-[#60a5fa]">Frontend Developer</p>

                  <p className="mt-3 text-xl font-bold text-[#e2e8f0]">
                    Hi, I'm Ahriew.
                  </p>

                  <div className="mt-4 h-2 w-32 rounded bg-[#263247]" />
                  <div className="mt-2 h-2 w-48 rounded bg-[#1e293b]" />
                  <div className="mt-6 flex gap-2">
                    <div className="h-7 w-20 rounded bg-[#e2e8f0]" />
                    <div className="h-7 w-20 rounded border border-[#334155]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-wider text-[#60a5fa]">
                Completed
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#e2e8f0]">
                Personal Portfolio
              </h3>

              <p className="mt-4 text-base leading-7 text-[#94a3b8]">
                A personal portfolio website designed to showcase my frontend
                development skills, background, and projects while applying for
                junior frontend developer positions.
              </p>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Responsive Design",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#334155] px-3 py-1.5 text-xs text-[#cbd5e1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex gap-5">
                <a
                  href="#"
                  className="text-sm font-medium text-[#e2e8f0] transition-colors hover:text-[#60a5fa]"
                >
                  Live Demo →
                </a>

                <a
                  href="https://github.com/ahriew-laotor/ahriew-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* Future projects */}
          <div className="mt-6 border border-dashed border-[#263247] p-8 text-center">
            <p className="text-sm text-[#64748b]">
              More projects will be added as I continue building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects