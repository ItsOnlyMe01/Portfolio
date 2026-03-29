"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  PlayCircle,
  Database,
  MessageSquare,
  MapPin,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveLink: string;
  demoLink: string;
  icon: React.ReactNode;
}

export function ProjectShowcase() {
  const projects: Project[] = [
    {
      title: "DailyTrack AI",
      description:
        "Personal GenAI Assistant with deterministic routing to eliminate hallucinations",
      technologies: [
        "Node.js",
        "PostgreSQL",
        "ChromaDB",
        "RAG",
        "LLM Orchestration",
      ],
      highlights: [
        "Deterministic routing layer for structured data",
        "Zero hallucination in RAG responses",
        "Multi-source knowledge integration",
      ],
      liveLink: "https://dailytrack-ai.com",
      demoLink: "https://www.youtube.com/embed/dailytrack-demo",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "ChitChat",
      description:
        "Real-time multilingual chat application with live translation",
      technologies: ["React.js", "Socket.io", "Node.js", "WebSocket"],
      highlights: [
        "Real-time message synchronization",
        "Live translation across 50+ languages",
        "Responsive UI for mobile & desktop",
      ],
      liveLink: "https://chitchat-app.com",
      demoLink: "https://www.youtube.com/embed/chitchat-demo",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "WanderLust",
      description:
        "Full-stack property listing platform with CRUD operations and dynamic ratings",
      technologies: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      highlights: [
        "Complete CRUD operations for listings",
        "Dynamic rating & review system",
        "Advanced search & filtering",
      ],
      liveLink: "https://wanderlust-properties.com",
      demoLink: "https://www.youtube.com/embed/wanderlust-demo",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-dark-bg to-dark-card"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-effect rounded-xl border border-dark-border overflow-hidden hover:border-cyan-accent/50 card-hover group flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-dark-border bg-gradient-to-r from-emerald-accent/10 to-cyan-accent/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-emerald-accent/20 group-hover:bg-emerald-accent/30 transition-colors">
                    <div className="text-emerald-accent">{project.icon}</div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-accent/60 uppercase tracking-widest">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-6">
                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-accent mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-3"
                      >
                        <span className="text-emerald-accent font-bold mt-1">
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-accent mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-accent/15 text-emerald-accent border border-emerald-accent/30 hover:border-emerald-accent/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer - Buttons */}
              <div className="p-6 border-t border-dark-border bg-dark-bg/50 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
