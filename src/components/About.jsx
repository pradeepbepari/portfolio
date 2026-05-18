import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Visual element */}
            <div className="w-full md:w-2/5 flex justify-center order-2 md:order-1">
              <div className="relative group w-full max-w-[300px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-[3/4] bg-dark-bg border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                   <div className="text-accent/10 font-mono text-9xl font-bold select-none rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    &lt;/&gt;
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="flex justify-between items-end mb-2">
                        <span className="text-xs text-gray-400 font-mono">Backend Mastery</span>
                        <span className="text-xs text-accent font-mono">85%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                       />
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Concurrency Code Card */}
                <div className="mb-8 relative group">
                  <div className="absolute -inset-0.5 bg-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative glass-card bg-black/60 rounded-xl overflow-hidden border border-white/5">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 ml-2">worker_pool.go</span>
                    </div>
                    <div className="p-4 font-mono text-[11px] leading-relaxed">
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">1</span>
                        <span><span className="text-purple-400">func</span> <span className="text-blue-400">WorkerPool</span>(jobs &lt;-<span className="text-purple-400">chan</span> <span className="text-blue-400">Job</span>, results <span className="text-purple-400">chan</span>&lt;- <span className="text-blue-400">Result</span>) {"{"}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">2</span>
                        <span className="pl-4"><span className="text-purple-400">for</span> job := <span className="text-purple-400">range</span> jobs {"{"}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">3</span>
                        <span className="pl-8 text-gray-400">// Parallel execution with context safety</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">4</span>
                        <span className="pl-8">results &lt;- <span className="text-blue-400">process</span>(job)</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">5</span>
                        <span className="pl-4">{"}"}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 select-none">6</span>
                        <span>{"}"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="section-title mb-8">Professional Summary</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    I am a <span className="text-white font-medium">Backend Developer</span> with hands-on internship experience in Golang microservices and REST API development. I specialize in building high-performance, scalable systems that solve complex real-world problems.
                  </p>
                  <p>
                    My expertise spans across <span className="text-accent">asynchronous event processing</span>, gRPC services, and Redis caching. I am deeply familiar with the AWS ecosystem and modern CI/CD pipelines, ensuring that the code I write is not only functional but also production-ready and resilient.
                  </p>
                  <p>
                    Currently, I am expanding my horizons by diving deep into <span className="text-white">Kubernetes</span>, <span className="text-white">Kafka</span>, and <span className="text-white">OpenTelemetry</span> to build observability-first distributed systems.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    {[
                      { label: 'Location', value: 'Hyderabad, India' },
                      { label: 'Role', value: 'Backend Engineer' },
                      { label: 'Specialty', value: 'Golang / Microservices' },
                      { label: 'Availability', value: 'Open to Work' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] text-accent uppercase tracking-[0.2em] mb-1">{item.label}</span>
                        <span className="text-white font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;