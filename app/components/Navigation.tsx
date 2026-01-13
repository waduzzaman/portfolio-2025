"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";
  const isBlogActive = pathname.startsWith("/blog");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  /* Navbar background on scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy ONLY on homepage */
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(""); 
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section instanceof HTMLElement &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push(`/${href}`);
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Waduzzaman
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isHomePage && activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSectionClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${active ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20" : "text-gray-600 dark:text-gray-400 hover:text-blue-600"}
                  `}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${active ? "w-4 opacity-100" : "w-0 opacity-0"}`} />
                </a>
              );
            })}

            <Link
              href="/blog"
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${isBlogActive ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20" : "text-gray-600 dark:text-gray-400 hover:text-blue-600"}
              `}
            >
              Blog
              <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${isBlogActive ? "w-4 opacity-100" : "w-0 opacity-0"}`} />
            </Link>

            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
               <a href="/Md_Mahbub_E_Waduzzaman_Resume.pdf" download className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                 <Download size={16}/> Resume
               </a>
               <button onClick={toggleTheme} className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                 {theme === "light" ? <Moon size={20}/> : <Sun size={20} className="text-yellow-400"/>}
               </button>
            </div>
          </div>

          {/* ================= MOBILE BUTTONS (Restored Theme Toggle) ================= */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <div className={`md:hidden fixed inset-x-0 top-20 transition-all duration-300 ease-in-out transform origin-top
          ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
      `}>
        <div className="mx-4 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isHomePage && activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSectionClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all
                    ${active ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"}
                  `}
                >
                  {item.label}
                  {active && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </a>
              );
            })}
            
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all
                ${isBlogActive ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600" : "text-gray-600 dark:text-gray-400"}
              `}
            >
              Blog
              {isBlogActive && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
            </Link>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a href="/Md_Mahbub_E_Waduzzaman_Resume.pdf" download className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20">
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}