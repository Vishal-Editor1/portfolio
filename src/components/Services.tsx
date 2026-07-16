import { motion } from 'motion/react';
import type { ServicesData, Skill } from '../types';

export function Services({ data, skills }: { data: ServicesData; skills: Skill[] }) {
  return (
    <section id="services" className="py-24 px-6 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Software Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-md p-1.5 border border-white/5 shadow-sm">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Services & Expertise */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {data.services.map((service, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-brand-card border border-white/5 hover:border-brand-purple/30 hover:bg-white/5 transition-all flex items-center shadow-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-purple mr-3" />
                  <span className="text-brand-secondary hover:text-white transition-colors">{service}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6">Editing Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {data.expertise.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/5 hover:bg-brand-blue/10 border border-white/10 hover:border-brand-blue/30 rounded-lg text-sm text-brand-secondary hover:text-brand-blue transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
