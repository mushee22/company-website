"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, TrendingUp, Bot } from "lucide-react";
import { StarsBackground } from "./ui/stars-background";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      color: "from-blue-500 to-blue-600",
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-green-500 to-green-600",
      href: "/services/mobile-apps"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions for enterprise-grade applications.",
      color: "from-purple-500 to-purple-600",
      href: "/services/cloud-solutions"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and drive conversions.",
      color: "from-yellow-500 to-yellow-600",
      href: "/services/digital-marketing"
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Smart automation and AI-powered features to enhance your business processes.",
      color: "from-indigo-500 to-indigo-600",
      href: "/services/ai-integration"
    }
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
    <section id="services" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive digital solutions to accelerate your business</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm"
              >
                <Link href={service.href}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 h-full hover:bg-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
                    {/* Stars background on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <StarsBackground />
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 relative z-10`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 relative z-10">{service.title}</h3>
                    <p className="text-gray-400 relative z-10">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;