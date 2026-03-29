"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ItsOnlyMe01",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ritesh-singh-9a4abb250/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:riteshsingh01st@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">RITESH</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack & GenAI Engineer | Building deterministic AI systems
              and scalable web applications
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Projects", "Experience", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-bg border border-dark-border text-gray-400 hover:text-emerald-accent hover:border-emerald-accent/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © {currentYear} Ritesh Singh. Made with
              <Heart className="w-4 h-4 text-emerald-accent fill-emerald-accent" />
              and passion for engineering.
            </p>
            <p className="text-xs text-gray-500">
              Designed & Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
