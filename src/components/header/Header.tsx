
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/cti-logo.jpg"
            alt="CTI System and Solutions"
            width={110}
            height={65}
            className="h-auto w-[110px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-red-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-[#203164] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 lg:flex"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-[#203164] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden"
        >
          {[...navLinks, { name: "Contact Us", href: "/contact" }].map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-3 text-sm font-medium text-slate-700 hover:text-red-600"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
