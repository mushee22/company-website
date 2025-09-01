"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Shield, Rocket } from "lucide-react";


const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Transforming Industries",
      excerpt: "Artificial intelligence is reshaping how businesses operate today. From automation to predictive analytics...",
      category: "Technology",
      date: "March 15, 2024",
      icon: Brain,
      gradient: "from-blue-400 to-purple-500",
      categoryColor: "bg-blue-900 text-blue-300"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "With cyber threats becoming increasingly sophisticated, businesses need robust security measures...",
      category: "Security",
      date: "March 10, 2024",
      icon: Shield,
      gradient: "from-green-400 to-teal-500",
      categoryColor: "bg-green-900 text-green-300"
    },
    {
      id: 3,
      title: "Building Scalable Applications: Architecture Guidelines",
      excerpt: "Creating applications that can grow with your business requires careful architectural planning...",
      category: "Development",
      date: "March 5, 2024",
      icon: Rocket,
      gradient: "from-orange-400 to-red-500",
      categoryColor: "bg-orange-900 text-orange-300"
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
    <>
      {/* Hero Section */}
      <section className="py-20 bg-black relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest insights, trends, and innovations in technology and digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <article className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden h-full hover:bg-gray-800 transition duration-300">
                    <div className={`h-64 bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-semibold mr-4`}>
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-4">
                        <Link href={`/blog/${post.id}`} className="hover:text-gray-300 transition duration-300">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-300 mb-6 text-sm">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-gray-300 font-semibold hover:text-white transition duration-300 inline-flex items-center"
                      >
                        Read More 
                        <motion.span 
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;