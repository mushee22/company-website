"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Smartphone, BarChart3 } from "lucide-react";


const Portfolio = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      subtitle: "Modern E-Commerce",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Healthcare App",
      subtitle: "Medical Dashboard",
      description: "Patient management system with real-time monitoring and analytics.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      subtitle: "Business Intelligence",
      description: "Advanced analytics platform with AI-powered insights and reporting.",
      gradient: "from-orange-500 to-red-600"
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
                <div className={`bg-gradient-to-r ${project.gradient} rounded-lg h-64 flex items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
                  <div className="text-center relative z-10">
                    <IconComponent className="text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                  </div>
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
