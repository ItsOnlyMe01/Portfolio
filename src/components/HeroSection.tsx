"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card flex items-center justify-center px-4 md:px-8 py-20">
      <motion.div
        className="max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-accent to-cyan-accent rounded-2xl blur-3xl opacity-20 animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden border border-emerald-accent/30 hover:border-emerald-accent/60 transition-all duration-300">
                <Image
                  src="/my-image.png"
                  alt="Professional Headshot"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-emerald-accent text-lg font-semibold"
              >
                Welcome to my portfolio
              </motion.p>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
                RITESH
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-accent font-semibold">
                Full-Stack Developer | AI & GenAI
              </h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              I am a final-year B.Tech CSE student (graduating in 2026) at AKTU with hands-on internship experience at startups like{" "}
              <span className="text-emerald-accent font-semibold">
                HealthSutra.ai
              </span>{" "}
              and{" "}
              <span className="text-emerald-accent font-semibold">
                PrimeVacations.in
              </span>
              . I build web applications using the{" "}
              <span className="text-cyan-accent font-semibold">MERN/Next.js stack</span>{" "}
              and implement AI integration using{" "}
              <span className="text-cyan-accent font-semibold">
                RAG pipelines
              </span>
              . I am currently seeking full-time software developer opportunities.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-8"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1jHriDJFcIoglw5w7iGz6npPYGIHf_KIT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
