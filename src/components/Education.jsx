import React from 'react';
import { motion } from 'framer-motion';

const education = {
  degree: "Bachelor of Science (B.Sc.) — Computer Science",
  college: "Vaagdevi Degree & PG College",
  university: "Kakatiya University",
  graduated: "May 2022",
  cgpa: "6.82/10",
  coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
};

const certifications = [
  { name: "AWS Certified Developer Associate", status: "In Progress" },
  { name: "Certified Kubernetes Administrator", status: "Self-study" },
  { name: "Go Concurrency Deep-dive", status: "Completed" },
  { name: "OpenTelemetry for Go Microservices", status: "Completed" }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-12">Education</h2>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative glass-card p-8 border border-white/5">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                      <p className="text-gray-400">{education.college}</p>
                      <p className="text-gray-500 text-sm">{education.university}</p>
                   </div>
                   <span className="text-accent font-mono text-sm">{education.graduated}</span>
                </div>
                
                <div className="mb-6">
                   <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Academic Performance</div>
                   <div className="text-2xl font-bold text-white">{education.cgpa} <span className="text-sm font-normal text-gray-500">CGPA</span></div>
                </div>

                <div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Core Coursework</div>
                   <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">
                          {course}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-12">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative glass-card p-6 flex items-center justify-between border border-white/5 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                       </div>
                       <div>
                          <h3 className="text-white font-medium">{cert.name}</h3>
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">{cert.status}</p>
                       </div>
                    </div>
                    {cert.status === "Completed" && (
                       <svg className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                       </svg>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;