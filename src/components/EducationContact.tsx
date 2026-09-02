"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

export function EducationContact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "riteshsingh01st@gmail.com",
      href: "mailto:riteshsingh01st@gmail.com",
      color: "hover:text-emerald-accent",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ritesh-singh",
      href: "https://www.linkedin.com/in/ritesh-singh-9a4abb250/",
      color: "hover:text-cyan-accent",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/ItsOnlyMe01",
      href: "https://github.com/ItsOnlyMe01",
      color: "hover:text-emerald-accent",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-bg" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="section-title">Education</h2>
              <p className="section-subtitle">Academic Background</p>
            </div>

            <div className="glass-effect p-8 rounded-xl border border-dark-border hover:border-emerald-accent/50 card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-emerald-accent/20">
                  <GraduationCap className="w-6 h-6 text-emerald-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-cyan-accent/80 font-semibold">
                    AKTU (Kcc Institute of Technology & Management, Greater
                    Noida)
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-emerald-accent flex-shrink-0" />
                  <span>Expected Graduation: 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  <span>
                    CGPA:{" "}
                    <span className="text-emerald-accent font-semibold">
                      7.6/10 (till 7th semester)
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  <span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-border">
                <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-widest">
                  Achievements
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex items-start gap-3">
                    <span className="text-emerald-accent font-bold mt-1">
                      •
                    </span>
                    Active in hackathons and competitive programming
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-3">
                    <span className="text-emerald-accent font-bold mt-1">
                      •
                    </span>
                    1+ years of professional internship experience
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-3">
                    <span className="text-emerald-accent font-bold mt-1">
                      •
                    </span>
                    Strong foundation in Data Structures & Algorithms
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                I&apos;m currently open to full-time developer opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl border border-dark-border hover:border-cyan-accent/50 card-hover flex items-center gap-4 group"
                >
                  <div
                    className={`p-3 rounded-lg bg-cyan-accent/20 group-hover:bg-cyan-accent/30 transition-colors ${link.color}`}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                      {link.label}
                    </p>
                    <p className="text-white font-semibold group-hover:text-cyan-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <div className="text-emerald-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl border border-dark-border bg-gradient-to-br from-emerald-accent/10 to-cyan-accent/10 mt-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                Open to Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                I&apos;m actively looking for full-time developer opportunities. Feel free to reach out to discuss how I can contribute to your team!
              </p>
              <a
                href="mailto:riteshsingh01st@gmail.com"
                className="inline-block btn-primary"
              >
                Send Me an Email
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
