"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: Experience[] = [
    {
      company: "HealthSutra.ai",
      position: "Full-Stack Developer Intern",
      period: "Start Date - Current",
      type: "Startup (Healthcare)",
      description:
        "Contributing to the development of an AI-powered health platform",
      responsibilities: [
        "Optimized data fetch latency by 30% through indexing and caching strategies",
        "Developed REST APIs for patient data management using Node.js",
        "Implemented real-time notifications using WebSocket",
        "Collaborated with 5+ team members in an Agile environment",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "AWS", "Docker"],
    },
    {
      company: "PrimeVacations.in",
      position: "Backend Developer Intern",
      period: "Month - Month",
      type: "Startup (Travel & Hospitality)",
      description: "Engineered backend systems for a property booking platform",
      responsibilities: [
        "Automated 80% of manual workflows using Python FastAPI",
        "Designed and implemented microservices architecture",
        "Reduced server response time from 2s to 200ms",
        "Deployed applications on AWS EC2 with Nginx load balancing",
      ],
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "AWS",
        "Nginx",
        "Docker Compose",
      ],
    },
    {
      company: "MedWander.com",
      position: "Full-Stack Developer",
      period: "Month - Month",
      type: "Startup (Medical Tourism)",
      description:
        "Developed full-stack solutions for a medical tourism platform",
      responsibilities: [
        "Built responsive UI using Next.js with Server-Side Rendering",
        "Implemented secure authentication and authorization",
        "Created dynamic dashboard for healthcare providers",
        "Optimized performance achieving 95+ Lighthouse score",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "AWS",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-bg" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in the tech industry</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute -left-4 md:-left-8 top-6 w-4 h-4 bg-emerald-accent rounded-full border-4 border-dark-bg" />
              {index !== experiences.length - 1 && (
                <div className="absolute -left-2 md:-left-4 top-16 w-1 h-32 bg-gradient-to-b from-emerald-accent/50 to-cyan-accent/20" />
              )}

              {/* Content */}
              <div className="ml-8 md:ml-16 glass-effect p-6 rounded-xl border border-dark-border hover:border-emerald-accent/50 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-emerald-accent" />
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-lg text-emerald-accent font-semibold">
                      {exp.position}
                    </p>
                    <p className="text-cyan-accent/80 text-sm">{exp.type}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-accent mb-3 uppercase tracking-wide">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-3"
                      >
                        <span className="text-emerald-accent font-bold mt-1">
                          →
                        </span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-widest">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-accent/15 text-cyan-accent border border-cyan-accent/30 hover:border-cyan-accent/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
