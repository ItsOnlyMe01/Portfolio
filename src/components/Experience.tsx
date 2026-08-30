"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";

interface Experience {
  company: string;
  position: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  image?: string;
  link?: string;
}

export function Experience() {
  const experiences: Experience[] = [
    {
      company: "FollowProperty.com",
      position: "Full-Stack Developer Intern",
      period: "15 May 2026 - Present",
      type: "Startup (Real Estate)",
      description:
        "Developed production-ready modules and automation features for a real estate intelligence platform.",
      responsibilities: [
        "Developed production-ready modules using Next.js, React.js, TypeScript, Node.js, and MongoDB, including AI-powered news aggregation and lead management systems",
        "Delivered premium, SEO-optimized landing pages and dynamic project discovery pages using structured schema markup",
        "Automated large-scale data collection through Python web scraping pipelines with duplicate detection",
        "Built lead-generation workflows and integrated REST APIs while collaborating directly with the founder to scope and ship features",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Python",
        "Web Scraping",
        "REST APIs",
      ],
      image: "/FollowProperty.png",
      link: "https://www.followproperty.com/",
    },
    {
      company: "HealthSutra.ai",
      position: "Full-Stack Developer Intern",
      period: "1 Aug 2025 - 30 Nov 2025",
      type: "Startup (Healthcare)",
      description:
        "Developed full-stack web applications and backend APIs during internship.",
      responsibilities: [
        "Built and optimized REST APIs for patient data management using Node.js and MongoDB",
        "Integrated real-time updates using WebSockets to synchronize patient status updates across client dashboards",
        "Implemented database query indexing to improve search response times",
        "Collaborated with team members in an Agile development environment to deliver weekly sprints",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "AWS", "Docker"],
      image: "/Healthsutra.png",
      link: "https://www.healthsutra.ai/",
    },
    {
      company: "PrimeVacations.in",
      position: "Backend Developer Intern",
      period: "21 Mar 2025 - 30 Jun 2025",
      type: "Startup (Travel & Hospitality)",
      description: "Developed backend APIs and deployment setups for a property booking platform.",
      responsibilities: [
        "Built backend routing and automated notification scripts using Python and FastAPI",
        "Designed relational database tables and optimized queries in PostgreSQL",
        "Deployed application builds on AWS EC2 servers using Docker Compose and Nginx for routing",
      ],
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "AWS",
        "Nginx",
        "Docker Compose",
      ],
      image: "/primevactions.png",
      link: "https://www.primevacations.in/",
    },
    {
      company: "MedWander.com",
      position: "Full-Stack Developer",
      period: "21 Dec 2024 - 21 Mar 2025",
      type: "Startup (Medical Tourism)",
      description:
        "Developed features for a medical tourism listing platform.",
      responsibilities: [
        "Built interactive search and filter interfaces using Next.js with Server-Side Rendering",
        "Implemented secure user authentication and session management using JWT-based auth",
        "Developed dynamic dashboard layouts using Tailwind CSS for healthcare providers",
        "Optimized frontend assets and build size to improve Lighthouse performance scores",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "AWS",
      ],
      image: "",
      link: "https://www.medwander.com",
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
                  <div className="flex items-start gap-4">
                    {/* Clickable Company Logo/Thumbnail */}
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block w-14 h-14 rounded-lg overflow-hidden border border-dark-border bg-dark-bg/50 flex-shrink-0 group/logo hover:border-emerald-accent/50 transition-colors"
                      >
                        {exp.image ? (
                          <Image
                            src={exp.image}
                            alt={`${exp.company} Logo`}
                            fill
                            className="object-contain p-1 group-hover/logo:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-accent/20 to-cyan-accent/20 flex items-center justify-center text-cyan-accent font-bold text-lg">
                            {exp.company[0]}
                          </div>
                        )}
                      </a>
                    ) : (
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-dark-border bg-dark-bg/50 flex items-center justify-center text-cyan-accent text-lg font-bold flex-shrink-0">
                        {exp.company[0]}
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-emerald-accent transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                      </div>
                      <p className="text-lg text-emerald-accent font-semibold">
                        {exp.position}
                      </p>
                      <p className="text-cyan-accent/80 text-sm">{exp.type}</p>
                    </div>
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
