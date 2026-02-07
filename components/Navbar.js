// components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import staticLogo from "../public/newlogo.webp";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

function Navbar() {
  const router = useRouter();
  const email = "artuvillam@gmail.com";

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => setMenuOpen((v) => !v);

  // hide on scroll down, show on scroll up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 40) setVisible(true);
      else setVisible(currentScrollPos <= prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // left-side (page reactive) links under logo
  const leftConfig = useMemo(() => {
    const path = router.pathname;

    // HOME: blank left side (Work moves to right)
    if (path === "/") {
      return { links: [], cta: null };
    }

    // Resume: anchors + download
    if (path === "/resume") {
      return {
        links: [
          { label: "Top", href: "#top", type: "hash" },
          { label: "Skills", href: "#skills", type: "hash" },
          { label: "Education", href: "#education", type: "hash" },
          { label: "Work", href: "#experience", type: "hash" },
          { label: "Projects", href: "#projects", type: "hash" },
        ],
        cta: {
          label: "Download",
          href: "/ArturoVillalobosResume.pdf",
          type: "download",
        },
      };
    }

    // default: nothing special on left (keep clean)
    return { links: [], cta: null };
  }, [router.pathname]);

  // right-side links (always shown). On HOME include Work here too.
  const rightConfig = useMemo(() => {
    const base = [{ label: "Home", href: "/", type: "route" }];

    if (router.pathname === "/") {
      base.push({ label: "Work", href: "/work", type: "route" });
    }

    base.push({ label: "Contact", href: "/contact", type: "route", variant: "button" });
    return base;
  }, [router.pathname]);

  const baseLink =
    "text-xs md:text-sm text-gruvpink/90 hover:text-gruvpink hover:border-b hover:border-gruvpink transition py-1";

  const renderLink = (item) => {
    if (item.type === "hash") {
      return (
        <a
          key={item.href}
          href={item.href}
          className={baseLink}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
        <span className={`${baseLink} cursor-pointer`}>{item.label}</span>
      </Link>
    );
  };

  return (
    <nav
      className={[
        "sticky w-full z-50 transition-all duration-200",
        visible ? "top-0" : "-top-40",
      ].join(" ")}
    >
      {/* blur/opacity vibe */}
      <div className="bg-[#0C0D1C]/60 backdrop-blur-md border-b border-gruvpink/20">
        <div className="w-full px-4 2xl:px-16 pt-8 pb-6 md:pt-10 md:pb-8">
          {/* Row 1: logo + mobile icon */}
          <div className="flex items-start justify-between">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={staticLogo}
                alt="logo"
                className="cursor-pointer"
                width={140}
                height={44}
                priority
              />
            </Link>

            <div className="sm:hidden">
              <button onClick={handleNav} className="cursor-pointer">
                <AiOutlineMenu size={25} color="#E95584" />
              </button>
            </div>
          </div>

          {/* Row 2: ONE line under logo: left (reactive) + right (global) */}
          <div className="hidden sm:flex items-center justify-between mt-3">
            {/* left (reactive) */}
            <div className="flex items-center gap-4 min-h-[28px]">
              {leftConfig.links.map(renderLink)}

              {leftConfig.cta?.type === "download" ? (
                <a
                  href={leftConfig.cta.href}
                  download
                  className="ml-2 text-xs md:text-sm py-1 px-3 rounded-md border border-gruvpink/80 text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition"
                >
                  {leftConfig.cta.label}
                </a>
              ) : null}
            </div>

            {/* right (global) */}
            <div className="flex items-center gap-4">
              {rightConfig.map((item) => {
                if (item.variant === "button") {
                  return (
                    <Link key={item.href} href={item.href}>
                      <span className="text-xs md:text-sm py-1 px-3 rounded-md border border-gruvpink/80 text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  );
                }
                return renderLink(item);
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-gray-900/70 backdrop-blur-sm p-10 ease-in duration-500 z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <button onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={20} color="#E95584" />
          </button>
        </div>

        <div className="flex-col items-center text-center text-5xl py-4 text-gruvred">
          <ul className="space-y-8">
            <li className="hover:border-b border-gruvgreen pb-3">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li className="hover:border-b border-gruvgreen pb-3">
              <Link href="/work" onClick={() => setMenuOpen(false)}>
                Work
              </Link>
            </li>

            {router.pathname === "/resume" ? (
              <>
                <li className="hover:border-b border-gruvgreen pb-3">
                  <a href="#skills" onClick={() => setMenuOpen(false)}>
                    Skills
                  </a>
                </li>
                <li className="hover:border-b border-gruvgreen pb-3">
                  <a href="#experience" onClick={() => setMenuOpen(false)}>
                    Work
                  </a>
                </li>
                <li className="hover:border-b border-gruvgreen pb-3">
                  <a href="#projects" onClick={() => setMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li className="pt-6">
                  <a
                    href="/ArturoVillalobosResume.pdf"
                    download
                    onClick={() => setMenuOpen(false)}
                    className="inline-block text-lg py-2 px-6 rounded-md border border-gruvpink text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition"
                  >
                    Download
                  </a>
                </li>
              </>
            ) : null}

            <li className="hover:border-b border-gruvgreen pb-3">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-around pt-52 items-center">
          <a href="https://www.linkedin.com/in/rtvro/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size={40} className="cursor-pointer" color="#F12F26" />
          </a>
          <a href="https://github.com/arturovilla" target="_blank" rel="noreferrer">
            <AiOutlineGithub size={40} className="cursor-pointer" color="#F12F26" />
          </a>
          <a href={`mailto:${email}`}>
            <AiOutlineMail size={40} className="cursor-pointer" color="#F12F26" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
