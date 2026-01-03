import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '../data/mock';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Book Now', href: '#contact', isButton: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center"
        >
          <div className="bg-black rounded-full p-2 border border-[#BF00FF]/30">
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-12 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isButton ? (
              <Button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="bg-[#BF00FF] hover:bg-[#9900CC] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#BF00FF]/30"
              >
                {link.name}
              </Button>
            ) : (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ color: '#BF00FF' }}
                className="text-white/90 font-medium text-sm uppercase tracking-wider hover:text-[#BF00FF] transition-colors"
              >
                {link.name}
              </motion.button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass"
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) =>
            link.isButton ? (
              <Button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="bg-[#BF00FF] hover:bg-[#9900CC] text-white font-semibold px-8 py-3 rounded-full"
              >
                {link.name}
              </Button>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 font-medium text-lg uppercase tracking-wider hover:text-[#BF00FF] transition-colors"
              >
                {link.name}
              </button>
            )
          )}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
