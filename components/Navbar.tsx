"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Research",     href: "#research" },
  { label: "Projects",     href: "#projects" },
  { label: "Why Us",       href: "#why-us" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-600 text-white font-bold text-lg shadow">
            GD
          </span>
          <span
            className={`font-bold text-base md:text-lg leading-tight transition-colors ${
              scrolled ? "text-green-800" : "text-white"
            }`}
          >
            GreenDelta<br />
            <span className="font-normal text-sm opacity-80">Environmental Solutions</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeLink === link.href
                    ? "bg-green-600 text-white"
                    : scrolled
                    ? "text-gray-700 hover:bg-green-50 hover:text-green-700"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
          onClick={() => handleNav("#contact")}
        >
          Get In Touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/15"
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => handleNav("#contact")}
              className="btn-primary w-full justify-center text-sm"
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
