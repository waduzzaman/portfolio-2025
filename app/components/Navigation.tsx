"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    // { label: "Dev Flow", href: "#work-flow" },
    { label: "Testimonials", href: "#testimonials" },

    { label: "Contact", href: "#contact" },
  ];

const handleSectionClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });

    // Auto-close mobile menu after 5 seconds
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 5000);
    }
  }
};


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
          >
            Waduzzaman
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.label === "Home") {
                return isHomePage ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleSectionClick(e, item.href)}
                    className="px-4 py-2 rounded-lg font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href="/"
                    className="px-2 py-2 rounded-lg font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  >
                    Home
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSectionClick(e, item.href)}
                  className="px-2 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                >
                  {item.label}
                </a>
              );
            })}

            {/* Blog */}
            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            >
              Blog
            </Link>

            {/* Resume Button */}
            <a
              href="/Md_Mahbub_E_Waduzzaman_Resume.pdf"
              download
              aria-label="Download Resume"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl
                         bg-gradient-to-r from-blue-600 to-blue-500
                         hover:from-blue-700 hover:to-blue-600
                         text-white font-semibold shadow-md hover:shadow-xl
                         transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-t">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSectionClick(e, item.href)}
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                {item.label}
              </a>
            ))}

            {/* <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300"
            >
              Blog
            </Link> */}

            <a
              href="/Md_Mahbub_E_Waduzzaman_Resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="block text-center mt-3 px-4 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-blue-500
                         text-white font-semibold"            >
              <Download className="inline w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
