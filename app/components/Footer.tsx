'use client';

import { Heart, Github, Linkedin, Mail, ArrowUpRight, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800/50">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={handleScrollToTop}>
              <div className="p-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                MD Mahbub E Waduzzaman
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Software Engineer & Full Stack Developer at McMaster University. 
              Dedicated to crafting high-performance web applications with 
              clean code and intuitive user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {['Home', 'About', 'Education', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">
              Let&apos;s Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/waduzzaman' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/waduzzaman' },
                { icon: <Mail size={20} />, label: 'Email', href: 'mailto:waduzzam@mcmaster.ca' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            &copy; {currentYear} Waduzzaman. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
            <span>using</span>
            <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-default">Next.js 15</span>
          </div>
        </div>
      </div>
    </footer>
  );
}