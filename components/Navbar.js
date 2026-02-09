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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolled(currentScrollPos > 20);

      if (currentScrollPos < 40) setVisible(true);
      else setVisible(currentScrollPos <= prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  /* ---------------- Config ---------------- */

  const leftConfig = useMemo(() => {
    const path = router.pathname;

    if (path === "/") return { links: [], cta: null };

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

    return { links: [], cta: null };
  }, [router.pathname]);

  const rightConfig = useMemo(() => {
    const base = [{ label: "Home", href: "/", type: "route" }];

    if (router.pathname === "/") {
      base.push({ label: "Work", href: "/work", type: "route" });
    }

    base.push({
      label: "Contact",
      href: "/contact",
      type: "route",
      variant: "button",
    });

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
        "sticky z-50 transition-all duration-200",
        visible ? "top-0" : "-top-32",
      ].join(" ")}
    >
      {/* NAV BAR */}
      <div
        className={[
          "w-screen transition-colors duration-300",
          scrolled
            ? "bg-[#0C0D1C]/40 backdrop-blur-md border-b border-gruvpink/20"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1600px] px-4 2xl:px-16">
          {/* TOP ROW */}
          <div className="flex items-center justify-between min-h-[96px]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <div className="relative h-32 w-32 md:h-32 md:w-32 flex-shrink-0">
                <Image
                  src={staticLogo}
                  alt="logo"
                  priority
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
            </Link>

            {/* Hamburger */}
            <div className="sm:hidden">
              <button
                onClick={handleNav}
                className="p-2 rounded-md active:scale-95 transition"
                aria-label="Open menu"
              >
                <AiOutlineMenu size={24} color="#E95584" />
              </button>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center justify-between pb-4">
            <div className="flex items-center gap-4">
              {leftConfig.links.map(renderLink)}
              {leftConfig.cta?.type === "download" && (
                <a
                  href={leftConfig.cta.href}
                  download
                  className="ml-2 text-xs py-1 px-3 rounded-md border border-gruvpink/80 text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition"
                >
                  {leftConfig.cta.label}
                </a>
              )}
            </div>

            <div className="flex items-center gap-4">
              {rightConfig.map((item) =>
                item.variant === "button" ? (
                  <Link key={item.href} href={item.href}>
                    <span className="text-xs py-1 px-3 rounded-md border border-gruvpink/80 text-gruvpink hover:bg-gruvpink hover:text-[#0C0D1C] transition cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  renderLink(item)
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 sm:hidden z-[60] transition ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Bottom sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#0C0D1C] rounded-t-2xl p-6 pb-10 transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-gruvpink/40" />
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-5 top-5"
              aria-label="Close menu"
            >
              <AiOutlineClose size={20} color="#E95584" />
            </button>
          </div>

          <ul className="space-y-4 text-lg text-gruvpink">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className="mt-10 flex justify-around">
            <a href="https://www.linkedin.com/in/rtvro/" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin size={26} color="#f5c2e7" />
            </a>
            <a href="https://github.com/arturovilla" target="_blank" rel="noreferrer">
              <AiOutlineGithub size={26} color="#f5c2e7" />
            </a>
            <a href={`mailto:${email}`}>
              <AiOutlineMail size={26} color="#f5c2e7" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
