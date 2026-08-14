import { MdOutlineFileDownload } from "react-icons/md";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#0a0f1f]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-[#e2e8f0]"
        >
          Ahriew<span className="text-[#60a5fa]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CV */}
        <a
          href="/Ahriew-Laotor-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-3.5 py-2 text-sm font-medium text-[#e2e8f0] transition-colors hover:border-[#64748b] hover:bg-[#111827]"
        >
          <MdOutlineFileDownload className="text-base" />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar