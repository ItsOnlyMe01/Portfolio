"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, CheckCircle } from "lucide-react";

interface MetricCard {
  icon: React.ReactNode;
  title: string;
  value: string;
  company: string;
  color: string;
}

export function ImpactMetrics() {
  const metrics: MetricCard[] = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Latency Reduction",
      value: "30%",
      company: "HealthSutra.ai",
      color: "from-emerald-accent",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      value: "80%",
      company: "PrimeVacations.in",
      color: "from-cyan-accent",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "RAG Accuracy",
      value: "70%",
      company: "DailyTrack AI",
      color: "from-emerald-accent via-cyan-accent",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-bg" id="metrics">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Impact & Metrics</h2>
          <p className="section-subtitle">
            Real results from production environments
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-effect p-8 rounded-xl border border-dark-border hover:border-emerald-accent/50 card-hover group"
            >
              <div
                className={`inline-block p-3 rounded-lg bg-gradient-to-br ${metric.color} to-dark-card/50 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-dark-bg">{metric.icon}</div>
              </div>

              <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                {metric.title}
              </h3>

              <div className="mb-4">
                <p className="text-5xl font-bold gradient-text">
                  {metric.value}
                </p>
              </div>

              <p className="text-cyan-accent/80 font-semibold">
                {metric.company}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
