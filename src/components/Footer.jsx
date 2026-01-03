import React from 'react';
import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { siteConfig } from '../data/mock';

const socialLinks = [
  { name: 'SoundCloud', icon: Music2, href: 'https://soundcloud.com/denard-jones' },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-[#050505] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-black rounded-full p-2 border border-[#BF00FF]/30">
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} DJ Modernaire. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#BF00FF]/50 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-white/70 hover:text-[#BF00FF] transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-8 border-t border-[#2a2a2a] text-center">
          <p className="text-sm text-white/40">
            Premium Audio • Curated Music • Unforgettable Events
          </p>
          <p className="text-xs text-white/30 mt-2">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
