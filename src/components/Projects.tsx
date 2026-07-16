import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import type { Project } from '../types';
import { VimeoModal } from './VimeoModal';

export function Projects({ projects }: { projects: Project[] }) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredVideo(id);
    }, 300); // 300ms delay to prevent accidental loads
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredVideo(null);
  };

  const getVimeoVideoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/) || url.match(/player\.vimeo\.com\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <section id="work" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Sample Work</h2>
          <p className="text-brand-secondary text-lg max-w-2xl">
            A selection of my recent video editing and motion graphics projects. 
            Click to watch the full videos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const videoId = getVimeoVideoId(project.vimeoLink);
            const isHovered = hoveredVideo === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-blue/30 transition-colors shadow-lg hover:shadow-brand-blue/10"
                onClick={() => setSelectedVideo(project.vimeoLink)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {/* Static Thumbnail */}
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-110' : 'opacity-80 group-hover:scale-105 group-hover:opacity-100'}`}
                    loading="lazy"
                  />
                  
                  {/* Hover Video Preview */}
                  {videoId && isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      <iframe
                        src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1`}
                        className="w-full h-full scale-[1.15]" // Slight scale to hide Vimeo borders
                        frameBorder="0"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                     <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                       <Play size={24} className="text-white fill-white ml-1" />
                     </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-semibold text-brand-blue mb-2 tracking-wider uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-xs text-white/40 font-mono">
                    Software: <span className="text-white/70">{project.software}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <VimeoModal 
        vimeoLink={selectedVideo || ''} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </section>
  );
}
