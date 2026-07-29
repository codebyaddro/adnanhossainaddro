"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

useGSAP(
    () => {
      // Ensure elements are visible initially
      gsap.set(['.nav-link', '.cta-btn'], { opacity: 1 });

      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' }
      )
        .fromTo(
          '.logo',
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.nav-link',
          { y: -15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .fromTo(
          '.cta-btn',
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.5)',
          },
          '-=0.2'
        );
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="logo text-xl font-semibold tracking-tight text-white"
        >
          adnanh.addro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link relative text-sm text-white/70 transition hover:text-white"
            >
              {item}
              <span className="underline absolute -bottom-1 left-0 h-px w-0 bg-white" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="cta-btn rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white md:hidden" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
