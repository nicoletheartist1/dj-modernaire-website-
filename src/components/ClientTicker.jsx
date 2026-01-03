import React from 'react';
import { motion } from 'framer-motion';
import { clientsData } from '../data/mock';

const ClientTicker = () => {
  // Duplicate clients for seamless loop
  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <section id="clients" className="py-20 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            <span className="text-[#C0C0C0]">Trusted By</span>
          </h2>
          <p className="text-white/60">Premium brands and organizations we've had the honor to work with</p>
        </motion.div>
      </div>

      {/* Ticker Container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        {/* Ticker */}
        <div className="flex ticker-animate">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="px-8 py-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg hover:border-[#BF00FF]/50 transition-colors cursor-default">
                <span className="text-lg md:text-xl font-semibold text-white/80 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTicker;
