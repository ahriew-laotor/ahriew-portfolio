import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="border-t border-[#1e293b] bg-[#0f1628] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-14">
          <p className="text-sm font-medium text-[#60a5fa]">About Me</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
            A little about me.
          </h2>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[360px_1fr] lg:gap-20">
          {/* Image */}
          <div>
            <Image
              width={400}
              height={400}
              src="/images/ahriew-02.png"
              alt="Ahriew Laotor"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <div className="space-y-5 text-base leading-8 text-[#94a3b8] sm:text-lg">
              <p>
                I'm{" "}
                <span className="font-medium text-[#e2e8f0]">
                  Ahriew Laotor
                </span>
                , a Frontend Developer passionate about creating clean,
                responsive, and user-focused digital experiences.
              </p>

              <p>
                My journey into web development started with curiosity about how
                websites work. Since then, I've been continuously learning and
                building projects with{" "}
                <span className="text-[#cbd5e1]">
                  React, Next.js, TypeScript, and Tailwind CSS
                </span>
                .
              </p>

              <p>
                Before becoming a developer, I worked as a{" "}
                <span className="font-medium text-[#e2e8f0]">
                  Store Manager
                </span>
                . This experience helped me develop strong problem-solving,
                communication, leadership, and teamwork skills that I now bring
                into software development.
              </p>

              <p>
                I'm always looking to learn, improve, and build products that
                solve real problems for users.
              </p>
            </div>

            {/* Simple stats */}
            <div className="mt-12 grid grid-cols-2 border-y border-[#263247] py-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-[#e2e8f0]">3+</p>
                <p className="mt-1 text-sm text-[#64748b]">Years Management</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#e2e8f0]">4+</p>
                <p className="mt-1 text-sm text-[#64748b]">Technologies</p>
              </div>

              <div className="mt-6 sm:mt-0">
                <p className="text-2xl font-semibold text-[#e2e8f0]">∞</p>
                <p className="mt-1 text-sm text-[#64748b]">Always Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
