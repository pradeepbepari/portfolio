import React from 'react';
import { motion } from 'framer-motion';

const experience = {
  company: "Purplease IT Solutions",
  role: "Backend Engineer (Golang Focus)",
  duration: "Oct 2023 – Jun 2025",
  location: "Hyderabad, India",
  highlights: [
    "Architected and maintained a multi-tenant microservices platform handling 50K+ daily QR scans.",
    "Reduced API latency by 35% through query optimization and Redis caching strategies.",
    "Implemented asynchronous processing using AWS SQS/SNS, improving system throughput by 3x.",
    "Integrated secure authentication systems using JWT, OAuth 2.0, and RBAC.",
    "Streamlined development with Razorpay integration and automated Swagger/OpenAPI documentation.",
    "Built robust CI/CD pipelines using Docker and GitHub Actions for seamless deployments.",
    "Utilized pprof and structured logging for deep debugging and performance profiling."
  ],
  stats: [
    { label: "Daily Scans", value: "50K+" },
    { label: "Latency Reduction", value: "35%" },
    { label: "Throughput", value: "3x" }
  ]
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Journey</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Experience Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-dark-bg/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Background decorative text */}
                <div className="absolute top-0 right-0 text-[12rem] font-bold text-white/[0.02] leading-none select-none -translate-y-1/4 translate-x-1/4">
                  GO
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start mb-12 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                        Current Role
                      </span>
                      <span className="text-gray-500 font-mono text-xs">{experience.duration}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{experience.role}</h3>
                    <p className="text-xl text-gray-400">{experience.company} • {experience.location}</p>
                  </div>
                  
                  <div className="mt-8 md:mt-0 flex gap-4">
                    {experience.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-[10px] text-accent uppercase tracking-widest">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em]">Key Achievements</h4>
                    <ul className="space-y-4">
                      {experience.highlights.slice(0, 4).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-4 text-gray-300 leading-relaxed"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em]">Technical Focus</h4>
                    <ul className="space-y-4">
                      {experience.highlights.slice(4).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (i + 4) * 0.1 }}
                          className="flex items-start gap-4 text-gray-300 leading-relaxed"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;