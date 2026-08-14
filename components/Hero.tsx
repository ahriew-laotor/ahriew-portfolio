import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#0a0f1f] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_400px]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="mb-5 text-sm font-medium text-[#60a5fa]">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-[#e2e8f0] sm:text-6xl lg:text-7xl">
              Hi, I'm Ahriew.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#94a3b8] sm:text-xl lg:mx-0">
              I build modern, responsive, and user-focused web applications with
              React, Next.js, and TypeScript.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-[#e2e8f0] px-5 py-3 text-sm font-semibold text-[#0a0f1f] transition-colors hover:bg-white"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-[#334155] px-5 py-3 text-sm font-semibold text-[#e2e8f0] transition-colors hover:bg-[#111827]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              width={400}
              height={400}
              src="/images/ahriew-01.png"
              alt="Ahriew Laotor"
              priority
              className="w-full max-w-sm rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
