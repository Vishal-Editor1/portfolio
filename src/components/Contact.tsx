import { motion } from 'motion/react';
import { Mail, MessageCircle, Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';
import type { ContactData } from '../types';

export function Contact({ data }: { data: ContactData }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappLink = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{data.title}</h2>
          <p className="text-brand-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16">
            {data.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Email Card */}
            <div className="group relative p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-6">Email Me</h3>
              {data.email && <p className="text-brand-secondary mb-6 -mt-4">{data.email}</p>}
              
              <div className="flex gap-3">
                <button 
                  onClick={handleCopyEmail}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
                <a 
                  href={`mailto:${data.email}`}
                  className="px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Send Email
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-6">WhatsApp</h3>
              {data.whatsapp && <p className="text-brand-secondary mb-6 -mt-4">{data.whatsapp}</p>}
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mt-auto"
              >
                <MessageCircle size={20} />
                Let's Connect
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
