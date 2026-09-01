"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cloud,
  Database,
  GitBranch,
  Zap,
  Box,
  Server,
} from "lucide-react";

interface TechStack {
  category: string;
  icon: React.ReactNode;
  color: string;
  technologies: string[];
}

export function TechnicalStack() {
  const stacks: TechStack[] = [
    {
      category: "AI/Data",
      icon: <Brain className="w-6 h-6" />,
      color:
        "from-emerald-accent/10 border-emerald-accent/30 hover:border-emerald-accent/60",
      technologies: [
        "RAG Pipelines",
        "LLM Orchestration",
        "Groq LLM",
        "ChromaDB",
        "Vector Embeddings",
      ],
    },
    {
      category: "Full-Stack",
      icon: <Code2 className="w-6 h-6" />,
      color:
        "from-cyan-accent/10 border-cyan-accent/30 hover:border-cyan-accent/60",
      technologies: [
        "Next.js (SSR)",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "TypeScript",
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color:
        "from-emerald-accent/10 border-emerald-accent/30 hover:border-emerald-accent/60",
      technologies: [
        "Docker",
        "Docker Compose",
        "AWS EC2",
        "AWS S3",
        "Nginx",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      color:
        "from-cyan-accent/10 border-cyan-accent/30 hover:border-cyan-accent/60",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Database Indexing",
      ],
    },
    {
      category: "Version Control & Collaboration",
      icon: <GitBranch className="w-6 h-6" />,
      color:
        "from-emerald-accent/10 border-emerald-accent/30 hover:border-emerald-accent/60",
      technologies: [
        "Git",
        "GitHub",
        "GitLab",
        "Collaborative Development",
        "Code Review",
      ],
    },
    {
      category: "Tools & Frameworks",
      icon: <Box className="w-6 h-6" />,
      color:
        "from-cyan-accent/10 border-cyan-accent/30 hover:border-cyan-accent/60",
      technologies: [
        "Tailwind CSS",
        "Framer Motion",
        "FastAPI",
        "Socket.io",
        "REST APIs",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-dark-bg to-dark-card"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technical Stack</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass-effect p-6 rounded-xl border bg-gradient-to-br ${stack.color} card-hover group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-accent/20 group-hover:bg-emerald-accent/30 transition-colors">
                  <div className="text-emerald-accent">{stack.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {stack.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-dark-card/80 text-cyan-accent border border-cyan-accent/40 hover:border-cyan-accent/80 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
