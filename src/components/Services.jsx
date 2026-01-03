import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { servicesData } from '../data/mock';

const iconMap = {
  heart: Heart,
  briefcase: Briefcase,
  music: Music,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#BF00FF]/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg text-[#C0C0C0] max-w-2xl mx-auto">
            Every event deserves exceptional sound. We bring premium audio and curated music to make your occasion unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Music;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#BF00FF]/50 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#BF00FF]/20 to-[#BF00FF]/5 border border-[#BF00FF]/20 group-hover:border-[#BF00FF]/50 transition-colors"
                      >
                        <IconComponent className="w-8 h-8 text-[#BF00FF]" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-[#BF00FF] transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#C0C0C0] font-medium uppercase tracking-wider text-sm">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  
                  {/* Bottom gradient accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#BF00FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
