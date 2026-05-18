import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Healthcare Microservices Platform",
    category: "Main Showcase",
    description: "A decentralized healthcare management platform built using Go microservices communicating via gRPC and REST APIs. Designed for high availability and low latency.",
    tech: ["Golang", "gRPC", "AWS", "PostgreSQL", "Redis", "OpenTelemetry", "Docker", "Kubernetes"],
    features: [
      "Handles 10K+ concurrent patient records with optimized database schemas.",
      "45% database load reduction implemented via strategic Redis caching.",
      "Robust API Gateway for centralized request handling and security.",
      "Distributed tracing using OpenTelemetry for end-to-end observability.",
      "85%+ unit and integration test coverage for core services.",
      "Seamless migration from Minikube to AWS EKS (Kubernetes)."
    ],
    main: true
  },
  {
    id: 2,
    title: "Event-Driven Order Tracker",
    category: "Backend Architecture",
    description: "Kafka-based order lifecycle event streaming platform demonstrating real-time event-driven architecture and idempotent processing.",
    tech: ["Golang", "Kafka", "PostgreSQL", "Docker", "Event-Driven"],
    features: [
      "Idempotent Kafka producer/consumer ensuring zero duplicate events.",
      "Dead-letter queue handling for resilient message processing.",
      "Real-time consumer lag monitoring and automated scaling logic.",
      "Exactly-once semantics for critical financial transaction events."
    ],
    main: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Engineering</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Solving complex distributed systems challenges through clean architecture and modern backend paradigms.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${project.main ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${project.main ? 'from-accent/20 to-blue-500/20' : 'from-purple-500/20 to-accent/20'} rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000`}></div>
                <div className="relative aspect-video bg-dark-bg border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                   <div className="flex flex-col items-center">
                      <div className={`text-6xl mb-4 ${project.main ? 'text-accent' : 'text-purple-400'}`}>
                        {project.main ? (
                          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.823.362 2.25 2.25 0 00-1.006 1.839 2.25 2.25 0 00.15 1.108c.557 1.39 1.954 2.246 3.42 2.246h7.5c1.466 0 2.863-.856 3.42-2.246a2.25 2.25 0 00.15-1.108 2.25 2.25 0 00-1.006-1.839z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 10a3 3 0 116 0 3 3 0 01-6 0z" />
                          </svg>
                        ) : (
                          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs font-mono text-gray-500 tracking-[0.5em] uppercase">{project.category}</span>
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`w-12 h-[1px] ${project.main ? 'bg-accent' : 'bg-purple-500'}`}></span>
                  <span className={`text-xs font-mono uppercase tracking-widest ${project.main ? 'text-accent' : 'text-purple-400'}`}>Project 0{index + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${project.main ? 'text-accent' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                   <a href="#" className="group flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                     <span>Source Code</span>
                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;