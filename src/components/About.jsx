import React from 'react';
import { motion } from 'framer-motion';
import { Disc3, Award, Calendar, MapPin } from 'lucide-react';
import { aboutData, siteConfig } from '../data/mock';

const iconMap = {
  'Premium RANE Equipment': Disc3,
  '10+ Years Experience': Award,
  '500+ Events': Calendar,
  'Birmingham, AL Based': MapPin,
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#BF00FF]/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              <span className="gradient-text">{aboutData.title}</span>
            </h2>
            
            <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
              {aboutData.description}
            </p>
            
            <p className="text-base text-white/70 leading-relaxed mb-10 border-l-2 border-[#BF00FF] pl-6">
              {aboutData.gearDescription}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight] || Award;
                return (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-[#151515] rounded-lg border border-[#2a2a2a] hover:border-[#BF00FF]/50 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-[#BF00FF]/10">
                      <IconComponent className="w-5 h-5 text-[#BF00FF]" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{highlight}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative rings behind photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-2 border-dashed border-[#BF00FF]/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 border border-[#C0C0C0]/10 rounded-full"
              />
              
              {/* Photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#BF00FF]/30 shadow-2xl shadow-[#BF00FF]/20">
                <img
                  src={siteConfig.photo}
                  alt="Denard Jones - DJ Modernaire"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Denard Jones</p>
                  <p className="text-[#BF00FF] text-sm">DJ Modernaire</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
