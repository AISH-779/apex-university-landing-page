'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Campus', href: '#strengths' },
    { label: 'Alumni', href: '#testimonials' },
  ];

  return (
    <>
      {/* Admission Banner */}
      <div className="bg-[#D4A843] text-[#0B1437] text-center py-3 px-5 text-sm font-semibold flex items-center justify-center gap-3 relative z-[101]">
        🎓 Admissions Open 2025–26 — Limited Seats Available.{' '}
        <a href="#cta" className="underline">Apply Now →</a>
      </div>

      <nav
        className={`fixed top-[44px] left-0 right-0 z-[100] flex items-center justify-between px-[5%] h-[72px] bg-white/92 backdrop-blur-[16px] border-b border-black/[0.12] transition-shadow ${
          scrolled ? 'shadow-[0_4px_32px_rgba(11,20,55,0.1)]' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#0B1437] to-[#162050] flex items-center justify-center">
            <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
              <path d="M11 2L3 7v8l8 5 8-5V7L11 2z" stroke="#D4A843" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M11 2v18M3 7l8 5 8-5" stroke="#D4A843" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-playfair font-bold text-xl text-[#0B1437] tracking-tight">Apex University</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#6B7399] text-sm font-medium no-underline hover:text-[#0B1437] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D4A843] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="bg-[#0B1437] text-white px-5 py-2 rounded-lg text-sm font-medium no-underline hover:bg-[#162050] transition-colors"
            >
              Apply Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} className="block w-6 h-0.5 bg-[#0B1437] rounded-full transition-all" />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[116px] left-0 right-0 z-[99] bg-white border-b border-black/10 px-[5%] py-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#0B1437] font-medium no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" className="bg-[#0B1437] text-white px-5 py-3 rounded-lg text-sm font-medium no-underline text-center" onClick={() => setMenuOpen(false)}>
            Apply Now
          </a>
        </div>
      )}
    </>
  );
}
