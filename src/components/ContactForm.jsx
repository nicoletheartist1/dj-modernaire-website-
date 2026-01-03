import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { siteConfig } from '../data/mock';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "booking", ...formData })
      });
      
      setIsSubmitted(true);
      
      toast({
        title: "Booking Request Sent!",
        description: "We'll be in touch within 24 hours to discuss your event.",
      });

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
      {/* Background accent */}
      <div className="absolute right-1/4 top-0 w-96 h-96 bg-[#BF00FF]/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="gradient-text">Book Your Date</span>
          </h2>
          <p className="text-lg text-[#C0C0C0] max-w-2xl mx-auto">
            Ready to create an unforgettable event? Let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#BF00FF]/10">
                    <MapPin className="w-5 h-5 text-[#BF00FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="text-white font-medium">{siteConfig.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#BF00FF]/10">
                    <Phone className="w-5 h-5 text-[#BF00FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-white font-medium hover:text-[#BF00FF] transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#BF00FF]/10">
                    <Mail className="w-5 h-5 text-[#BF00FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="text-white font-medium">info@djmodernaire.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a] text-center">
                <p className="text-3xl font-bold text-[#BF00FF]">500+</p>
                <p className="text-sm text-white/60">Events</p>
              </div>
              <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a] text-center">
                <p className="text-3xl font-bold text-[#BF00FF]">10+</p>
                <p className="text-sm text-white/60">Years</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              name="booking"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="p-8 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#BF00FF] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                  <p className="text-white/60">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-[#151515] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#BF00FF] focus:ring-[#BF00FF]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-[#151515] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#BF00FF] focus:ring-[#BF00FF]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="bg-[#151515] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#BF00FF] focus:ring-[#BF00FF]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-white">Event Date *</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="bg-[#151515] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#BF00FF] focus:ring-[#BF00FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-white">Event Type *</Label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md bg-[#151515] border border-[#2a2a2a] text-white focus:border-[#BF00FF] focus:ring-1 focus:ring-[#BF00FF] focus:outline-none"
                    >
                      <option value="" disabled>Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Private Event">Private Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Tell Us About Your Event</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your event, venue, expected guests, music preferences..."
                      rows={4}
                      className="bg-[#151515] border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#BF00FF] focus:ring-[#BF00FF] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BF00FF] hover:bg-[#9900CC] text-white font-bold uppercase tracking-wider py-6 rounded-full transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          ⟳
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Booking Request
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
