"use client";

import { motion } from "framer-motion";
import { Lightbulb, RefreshCw, CheckCircle, HeadphonesIcon } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10+", label: "Projects Completed", color: "text-yellow-400" },
    { number: "10+", label: "Happy Clients", color: "text-green-400" }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation-First Approach",
      color: "from-green-400 to-green-600"
    },
    {
      icon: RefreshCw,
      title: "Agile Development Process",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Scalable Solutions",
      color: "from-yellow-400 to-orange-500"
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
    <section id="about" className="py-20 bg-black relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Traceflowtech
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Founded in 2020, Traceflowtech has been at the forefront of digital innovation, helping businesses transform their operations through cutting-edge technology solutions.
            </motion.p>
            
            <motion.p 
              className="text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center bg-white/10 backdrop-blur rounded-xl p-4 transform hover:scale-105 transition duration-300"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h3>
              <div className="space-y-6">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div 
                      key={feature.title}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold">{feature.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
