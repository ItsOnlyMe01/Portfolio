"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect border-b border-dark-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RITESH
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-emerald-accent transition-colors font-semibold"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/ItsOnlyMe01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-gray-300 hover:text-emerald-accent hover:border-emerald-accent/50 transition-all flex items-center gap-2 text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1zmq8ZhG10drEuAW2Bwhh5iqUD_2qGEi0/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="mailto:riteshsingh01st@gmail.com"
              className="btn-primary text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-emerald-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-3 border-t border-dark-border pt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-300 hover:text-emerald-accent transition-colors font-semibold px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/ItsOnlyMe01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-accent transition-colors font-semibold px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Github className="w-5 h-5 text-emerald-accent" />
              <span>GitHub Profile (@ItsOnlyMe01)</span>
            </a>
            <div className="px-4 pt-2 space-y-2">
              <a
                href="https://drive.google.com/file/d/1zmq8ZhG10drEuAW2Bwhh5iqUD_2qGEi0/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block text-center text-sm"
              >
                View Resume
              </a>
              <a
                href="mailto:riteshsingh01st@gmail.com"
                className="btn-primary block text-center text-sm"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
