import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface VimeoModalProps {
  vimeoLink: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VimeoModal({ vimeoLink, isOpen, onClose }: VimeoModalProps) {
  const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    if (isOpen && vimeoLink) {
      // Extract video ID from Vimeo link to create embed URL
      // E.g., https://vimeo.com/809462580 -> https://player.vimeo.com/video/809462580
      let videoId = '';
      const match = vimeoLink.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      if (match) {
        videoId = match[1];
      } else {
        // Fallback, if it's already an embed link
        const embedMatch = vimeoLink.match(/player\.vimeo\.com\/video\/(\d+)/);
        if (embedMatch) {
          videoId = embedMatch[1];
        }
      }

      if (videoId) {
        setEmbedUrl(`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`);
      }
    } else {
      setEmbedUrl('');
    }
  }, [isOpen, vimeoLink]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative"
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/50">
                Invalid Vimeo Link
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
