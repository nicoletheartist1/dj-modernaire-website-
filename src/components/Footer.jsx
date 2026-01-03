import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Music2, DollarSign, CreditCard, Banknote } from 'lucide-react';
import { siteConfig } from '../data/mock';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/djmodernaire' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/17d7LJpJ5e/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/djones205' },
  { name: 'SoundCloud', icon: Music2, href: 'https://soundcloud.com/denard-jones' },
];

const paymentLinks = [
  { name: 'PayPal', icon: CreditCard, href: 'https://www.paypal.com/paypalme/DenardJones' },
  { name: 'Venmo', icon: DollarSign, href: 'https://account.venmo.com/u/DJ_MODERNAIRE' },
  { name: 'Cash App', icon: Banknote, href: 'https://cash.app/$DJones205' },
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

          {/* Social & Payment Links */}
          <div className="flex flex-col items-center gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 mr-2">Follow</span>
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
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white/70 hover:text-[#BF00FF] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Payment Options */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 mr-2">Pay</span>
              {paymentLinks.map((payment) => {
                const IconComponent = payment.icon;
                return (
                  <motion.a
                    key={payment.name}
                    href={payment.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#BF00FF]/50 transition-colors"
                    aria-label={payment.name}
                    title={payment.name}
                  >
                    <IconComponent className="w-5 h-5 text-white/70 hover:text-[#BF00FF] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
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
