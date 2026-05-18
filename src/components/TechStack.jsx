import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    title: "Languages",
    skills: ["Golang", "Java", "SQL"]
  },
  {
    title: "Backend",
    skills: ["Microservices", "REST APIs", "gRPC", "API Gateway", "Goroutines & Concurrency", "Clean Architecture", "Event-Driven Design"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, SQS, SNS, SES, ECS)", "Docker", "Kubernetes", "GitHub Actions", "Terraform (Basics)", "Nginx", "Linux"]
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch (Basics)"]
  },
  {
    title: "Security & Observability",
    skills: ["JWT", "OAuth 2.0", "RBAC", "OTP 2FA", "OpenTelemetry", "Prometheus", "Grafana", "pprof"]
  },
  {
    title: "Messaging & Tools",
    skills: ["Kafka", "AWS SQS/SNS", "Git", "Postman", "Swagger/OpenAPI", "Agile/Scrum"]
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding bg-black/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A comprehensive suite of tools and technologies I use to build robust, scalable, and secure backend architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative glass-card p-6 h-full border border-white/5 hover:border-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-[1px] bg-accent mr-3"></span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/5 hover:border-accent/30 hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;