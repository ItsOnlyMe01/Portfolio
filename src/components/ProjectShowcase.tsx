"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  PlayCircle,
  Database,
  MessageSquare,
  Building2,
  Activity,
  Compass,
} from "lucide-react";

interface Project {
  title: string;
  label: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveLink: string;
  demoLink?: string;
  icon: React.ReactNode;
  image?: string;
}

export function ProjectShowcase() {
  const projects: Project[] = [
    {
      title: "FollowProperty.com",
      label: "Professional Project · Sole Developer",
      description:
        "Real estate intelligence platform where I served as the sole developer during my internship, delivering production modules, automated scraping pipelines, and lead workflows.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Python",
        "REST APIs",
      ],
      highlights: [
        "Served as the sole developer throughout the internship, scoping and shipping features directly with the founder",
        "Developed production-ready modules including AI-powered news aggregation and lead management systems",
        "Automated large-scale property data collection through Python web scraping pipelines with duplicate detection",
        "Delivered SEO-optimized landing pages and dynamic project discovery pages with structured schema markup",
      ],
      liveLink: "https://www.followproperty.com/",
      icon: <Building2 className="w-6 h-6" />,
      image: "/FollowProperty.png",
    },
    {
      title: "HealthSutra.ai",
      label: "Professional Project · Team Project",
      description:
        "Healthcare platform where I collaborated as part of an Agile engineering team to build secure backend APIs and real-time dashboard updates.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "AWS",
        "Docker",
      ],
      highlights: [
        "Contributed to building and optimizing REST APIs for patient data management in Node.js and MongoDB",
        "Integrated real-time updates using WebSockets to synchronize patient status updates across client dashboards",
        "Implemented database query indexing in MongoDB to improve search response times",
        "Collaborated with team members in an Agile development environment to deliver weekly sprints",
      ],
      liveLink: "https://www.healthsutra.ai/",
      icon: <Activity className="w-6 h-6" />,
      image: "/Healthsutra.png",
    },
    {
      title: "PrimeVacations.in",
      label: "Professional Project · Team Project",
      description:
        "Property booking platform where I contributed as part of the backend team, developing reservation routing, automated notifications, and cloud deployment setups.",
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "AWS",
        "Nginx",
        "Docker Compose",
      ],
      highlights: [
        "Built backend routing and automated notification scripts using Python and FastAPI",
        "Designed relational database tables and optimized query performance in PostgreSQL",
        "Deployed application builds on AWS EC2 servers using Docker Compose and Nginx for routing",
      ],
      liveLink: "https://www.primevacations.in/",
      icon: <Compass className="w-6 h-6" />,
      image: "/primevactions.png",
    },
    {
      title: "DailyTrack AI",
      label: "Personal Project · Solo Developer",
      description:
        "AI assistant that queries user-provided documents to answer questions with context-aware responses.",
      technologies: [
        "Node.js",
        "PostgreSQL",
        "ChromaDB",
        "RAG",
        "LLM Orchestration",
      ],
      highlights: [
        "Implemented Retrieval-Augmented Generation (RAG) using ChromaDB and LLM APIs for document query answering",
        "Built semantic search and text chunking pipeline to retrieve relevant context before prompt submission",
        "Developed backend orchestration using Node.js and PostgreSQL to manage user documents and chat sessions",
      ],
      liveLink: "http://dailytrackai.duckdns.org/",
      demoLink: "https://www.youtube.com/embed/dailytrack-demo",
      icon: <Database className="w-6 h-6" />,
      image: "/dailytrack.png",
    },
    {
      title: "ChitChat",
      label: "Personal Project · Solo Developer",
      description:
        "Real-time chat application featuring live translation using third-party translation APIs.",
      technologies: ["React.js", "Socket.io", "Node.js", "WebSocket"],
      highlights: [
        "Developed real-time message broadcasting using Socket.io and WebSockets",
        "Integrated machine translation services to translate incoming chat messages dynamically",
        "Designed responsive frontend with React.js for seamless desktop and mobile messaging",
      ],
      liveLink: "https://chitchat-live.duckdns.org/",
      demoLink: "https://www.youtube.com/embed/chitchat-demo",
      icon: <MessageSquare className="w-6 h-6" />,
      image: "/ChitChat.png",
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
            Selected projects I&apos;ve built using modern full-stack and AI technologies.
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
              {/* Clickable Image Thumbnail */}
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 md:h-60 overflow-hidden border-b border-dark-border bg-dark-bg/30"
              >
                {project.image ? (
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-accent/20 to-cyan-accent/20 flex flex-col items-center justify-center text-cyan-accent p-6 text-center">
                    <div className="p-4 rounded-full bg-cyan-accent/10 mb-3 text-cyan-accent">
                      {project.icon}
                    </div>
                    <span className="text-lg font-semibold tracking-wide">{project.title}</span>
                    <span className="text-xs text-gray-400 mt-1">Interactive Web Application</span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-lg bg-emerald-accent text-dark-bg font-bold text-sm shadow-lg flex items-center gap-2">
                    Visit Live Site →
                  </div>
                </div>
              </a>

              {/* Header */}
              <div className="p-6 border-b border-dark-border bg-gradient-to-r from-emerald-accent/10 to-cyan-accent/10">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="p-3 rounded-lg bg-emerald-accent/20 group-hover:bg-emerald-accent/30 transition-colors">
                    <div className="text-emerald-accent">{project.icon}</div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-accent/90 uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-right">
                    {project.label}
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
                  className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm text-center"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
