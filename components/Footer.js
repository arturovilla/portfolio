import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { SiPatreon, SiGumroad } from "react-icons/si";
import staticLogo from "../public/newlogo.webp";

const email = "artuvillam@gmail.com";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gruvpink/15 bg-[#0C0D1C] mt-52">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative h-10 w-10">
                <Image
                  src={staticLogo}
                  alt="Arturo Villalobos"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-gp-line text-lg text-gruvred tracking-tight">
                Arturo Villalobos
              </span>
            </div>
            <p className="text-sm text-gruvmute leading-relaxed">
              Senior Software Engineer & creative coder.
              <br />
              Backend, data pipelines, and the occasional strange attractor.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/rtvro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gruvmute hover:text-gruvpink transition-colors"
              >
                <AiOutlineLinkedin size={16} />
              </a>
              <a
                href="https://github.com/arturovilla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gruvmute hover:text-gruvpink transition-colors"
              >
                <AiOutlineGithub size={16} />
              </a>
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-gruvmute hover:text-gruvpink transition-colors"
              >
                <AiOutlineMail size={16} />
              </a>
              <a
                href="https://patreon.com/Programare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Patreon"
                className="text-gruvmute hover:text-gruvpink transition-colors"
              >
                <SiPatreon size={14} />
              </a>
              <a
                href="https://rturo.gumroad.com/l/strangeattractors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gumroad"
                className="text-gruvmute hover:text-gruvpink transition-colors"
              >
                <SiGumroad size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-gp-square text-gruvmute uppercase tracking-[0.15em] mb-1">
              Navigate
            </span>
            <Link
              href="/"
              className="text-sm text-gruvmute hover:text-gruvpink transition-colors"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-sm text-gruvmute hover:text-gruvpink transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="text-sm text-gruvmute hover:text-gruvpink transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/googlesubmission"
              className="text-sm text-gruvmute hover:text-gruvpink transition-colors"
            >
              Google Fellowship
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gruvmute hover:text-gruvpink transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gruvpink text-gruvpink rounded-full font-gp-square text-sm hover:bg-gruvpink hover:text-[#0C0D1C] transition-colors"
            >
              Get in touch
            </Link>
            <p className="text-xs text-gruvmute/70">
              &copy; {new Date().getFullYear()} Arturo Villalobos. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
