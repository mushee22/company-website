"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

const ContactPage = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Tech Street", "Innovation District", "San Francisco, CA 94105"],
      color: "from-blue-500 to-blue-600",
      description: "Drop by for a coffee and chat about your project"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Monday - Friday", "9:00 AM - 6:00 PM PST"],
      color: "from-green-500 to-green-600",
      description: "Speak directly with our team of experts"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@techflow.com", "We respond within", "24 hours"],
      color: "from-purple-500 to-purple-600",
      description: "Send us your project details and requirements"
    }
  ];

  return (
    <>
      {/* Success Alert */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 border border-green-400/20"
        >
          <div className="flex items-center">
            <div className="mr-3 text-xl">✓</div>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm opacity-90">We&apos;ll get back to you within 24 hours.</p>
            </div>
            <button 
              onClick={() => setShowAlert(false)}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-full w-full" 
            style={{
              backgroundImage: 
                `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something
              <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? We&apos;d love to hear from you. 
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 h-full hover:bg-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group relative overflow-hidden">
                    {/* Stars background on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <StarsBackground />
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-6 relative z-10`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative z-10">{info.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm relative z-10">{info.description}</p>
                    <div className="space-y-1 relative z-10">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Send us a Message</h3>
                  <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="firstName" 
                      required 
                      className="px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm" 
                      placeholder="First Name *"
                    />
                    <input 
                      type="text" 
                      name="lastName" 
                      required 
                      className="px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm" 
                      placeholder="Last Name *"
                    />
                  </div>
                  
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm" 
                    placeholder="Email Address *"
                  />
                  
                  <select 
                    name="subject" 
                    required 
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm"
                  >
                    <option value="">Select a subject *</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  
                  <textarea 
                    name="message" 
                    required 
                    rows={3} 
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none text-sm" 
                    placeholder="Tell us about your project..."
                  />
                  
                  <motion.button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
                </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;