"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Rocket } from "lucide-react";


const Blog = () => {
  const blogPosts = [
    {
      icon: Brain,
      category: "Technology",
      title: "The Future of AI in Business",
      description: "Exploring how artificial intelligence is reshaping modern business operations...",
      date: "March 15, 2024",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Shield,
      category: "Security",
      title: "Cybersecurity Best Practices",
      description: "Essential security measures every business should implement...",
      date: "March 10, 2024",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: Rocket,
      category: "Development",
      title: "Building Scalable Applications",
      description: "Key principles for developing applications that grow with your business...",
      date: "March 5, 2024",
      gradient: "from-orange-400 to-red-500"
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
    <section id="blog" className="py-20 bg-black relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-400">Stay updated with our latest thoughts and industry trends</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <motion.article
                key={post.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-300">
                  <div className={`h-48 bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
                    <IconComponent className="text-4xl text-white" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.description}</p>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
