import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";


function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-[#1e293b] bg-[#0f1628] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#60a5fa]">Contact</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#e2e8f0] sm:text-4xl">
            Let's work together.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#94a3b8] sm:text-lg">
            I'm currently looking for junior frontend development opportunities.
            If you'd like to discuss a project or opportunity, feel free to
            reach out.
          </p>
        </div>

        {/* Contact links */}
        <div className="mt-14 grid gap-px overflow-hidden border border-[#263247] bg-[#263247] sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:ahriew2002@email.com"
            className="group bg-[#0f1628] p-6 transition-colors hover:bg-[#111c31]"
          >
            <div className="flex items-start justify-between">
              <Mail className="h-5 w-5 text-[#60a5fa]" />

              <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#94a3b8]" />
            </div>

            <h3 className="mt-8 text-base font-semibold text-[#e2e8f0]">
              Email
            </h3>

            <p className="mt-1 text-sm text-[#94a3b8]">ahriew2002@email.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ahriew-laotor
"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0f1628] p-6 transition-colors hover:bg-[#111c31]"
          >
            <div className="flex items-start justify-between">
              <FaGithub className="h-5 w-5 text-[#94a3b8]" />

              <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#94a3b8]" />
            </div>

            <h3 className="mt-8 text-base font-semibold text-[#e2e8f0]">
              GitHub
            </h3>

            <p className="mt-1 text-sm text-[#94a3b8]">
              View my code and projects
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8562098899654"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0f1628] p-6 transition-colors hover:bg-[#111c31]"
          >
            <div className="flex items-start justify-between">
              <FaWhatsapp className="h-5 w-5 text-[#94a3b8]" />

              <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#94a3b8]" />
            </div>

            <h3 className="mt-8 text-base font-semibold text-[#e2e8f0]">
              WhatsApp
            </h3>

            <p className="mt-1 text-sm text-[#94a3b8]">Message me directly</p>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/ahriew.laotor.9"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0f1628] p-6 transition-colors hover:bg-[#111c31]"
          >
            <div className="flex items-start justify-between">
              <FaFacebook className="h-5 w-5 text-[#94a3b8]" />

              <ArrowUpRight className="h-4 w-4 text-[#475569] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#94a3b8]" />
            </div>

            <h3 className="mt-8 text-base font-semibold text-[#e2e8f0]">
              Facebook
            </h3>

            <p className="mt-1 text-sm text-[#94a3b8]">Connect with me</p>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#263247] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#64748b]">
            Open to junior frontend development opportunities.
          </p>

          <a
            href="mailto:your@email.com"
            className="text-sm font-medium text-[#cbd5e1] transition-colors hover:text-[#60a5fa]"
          >
            Send me an email →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
