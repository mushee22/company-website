"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, GraduationCap, Gavel, Newspaper, Globe } from "lucide-react";


const Portfolio = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      subtitle: "Modern E-Commerce",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      image: "/e-commerce.jpg"
    },
    {
      icon: TrendingUp,
      title: "Trading Education Platform",
      subtitle: "Financial Learning Hub",
      description: "Comprehensive trading education platform with learning videos, live classes, market news, and trading ideas.",
      image: "/trading.jpg"
    },
    {
      icon: GraduationCap,
      title: "Learning Management System",
      subtitle: "Educational Platform",
      description: "Comprehensive LMS with course management, progress tracking, and interactive learning tools.",
      image: "/lms.jpg"
    },
    {
      icon: Gavel,
      title: "Bidding Application",
      subtitle: "Auction Platform",
      description: "Real-time bidding platform with secure payments, auction management, and user verification.",
      image: "/auction.jpg"
    },
    {
      icon: Newspaper,
      title: "News Listing App",
      subtitle: "Media Platform",
      description: "Dynamic news aggregation platform with category filtering, search, and admin dashboard.",
      image: "/news-app.jpg"
    },
    {
      icon: Globe,
      title: "Static & Dynamic Websites",
      subtitle: "Web Development",
      description: "Custom static and dynamic websites built with modern frameworks and optimized for performance.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
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
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400">Recent projects that showcase our expertise</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative rounded-lg h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.subtitle}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
