import { Mail, ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0a0f1f]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-[#e2e8f0]"
            >
              Ahriew<span className="text-[#60a5fa]">.</span>
            </a>

            <p className="mt-3 text-sm leading-6 text-[#64748b]">
              Junior Frontend Developer focused on building clean, responsive,
              and user-focused web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
              Navigation
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm text-[#94a3b8] transition-colors hover:text-[#e2e8f0]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
              Connect
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="mailto:ahriew2002@email.com"
                aria-label="Email"
                className="text-[#64748b] transition-colors hover:text-[#e2e8f0]"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/ahriew-laotor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#64748b] transition-colors hover:text-[#e2e8f0]"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/8562098899654"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#64748b] transition-colors hover:text-[#e2e8f0]"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com/ahriew.laotor.9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#64748b] transition-colors hover:text-[#e2e8f0]"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#1e293b] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} Ahriew Laotor. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-xs text-[#475569]">
              Built with Next.js & TypeScript
            </p>

            <a
              href="#"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center border border-[#334155] text-[#64748b] transition-colors hover:border-[#64748b] hover:text-[#e2e8f0]"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
