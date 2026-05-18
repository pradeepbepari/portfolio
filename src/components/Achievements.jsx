import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "High-Scale Architecture",
    value: "50K+",
    unit: "Daily QR Scans",
    description: "Designed multi-tenant microservices capable of handling massive real-world traffic."
  },
  {
    title: "Performance Optimization",
    value: "35%",
    unit: "Latency Reduction",
    description: "Streamlined API performance through advanced query optimization and caching."
  },
  {
    title: "System Throughput",
    value: "3x",
    unit: "Improvement",
    description: "Boosted system capacity using asynchronous event processing with AWS SQS/SNS."
  },
  {
    title: "Database Efficiency",
    value: "45%",
    unit: "Load Reduction",
    description: "Implemented Redis caching strategies to significantly reduce primary database strain."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Key Impact Highlights</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative glass-card p-8 h-full border border-white/5 flex flex-col items-center text-center">
                 <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
                 <div className="text-xs text-accent font-mono uppercase tracking-widest mb-4">{item.unit}</div>
                 <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;