"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services", icon: "💻" },
      { name: "Mobile Apps", href: "#services", icon: "📱" },
      { name: "Cloud Solutions", href: "#services", icon: "☁️" },
      { name: "Digital Marketing", href: "#services", icon: "📈" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-16 relative overflow-hidden">
      {/* Grid background */}
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section with logo and CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-4">TechFlow</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let&apos;s build something amazing together.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-black py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">hello@techflow.com</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">&copy; 2024 TechFlow. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
