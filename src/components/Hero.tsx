import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import type { SiteData } from '../types';

export function Hero({ data }: { data: SiteData['hero'] }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="inline-flex flex-wrap justify-center gap-2 mb-8"
          >
             {data.badges.map((badge, idx) => (
               <span key={idx} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-brand-secondary">
                 {badge}
               </span>
             ))}
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70 pb-2">
            {data.title}
          </h1>
          
          <h2 className="text-xl md:text-3xl text-brand-blue font-medium tracking-wide">
            {data.subtitle}
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-secondary leading-relaxed mt-8">
            {data.description}
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Play size={18} className="fill-black" />
              <span>View My Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2"
      >
        <div className="w-1.5 h-3 bg-white/50 rounded-full" />
      </motion.div>
    </section>
  );
}
