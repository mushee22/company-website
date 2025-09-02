"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Shield, Rocket, Code, Database, TrendingUp, Globe } from "lucide-react";


const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Next.js is Better for Websites than React",
      excerpt: "Discover the advantages of Next.js over vanilla React for building modern, performant websites...",
      category: "Development",
      date: "March 20, 2024",
      icon: Code,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      categoryColor: "bg-blue-900 text-blue-300"
    },
    {
      id: 2,
      title: "Strapi CMS: The Ultimate Content Management Solution",
      excerpt: "Learn how Strapi CMS empowers developers to build flexible, scalable content management systems...",
      category: "CMS",
      date: "March 18, 2024",
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      categoryColor: "bg-green-900 text-green-300"
    },
    {
      id: 3,
      title: "The Importance of Digital Marketing in Modern Business",
      excerpt: "Digital marketing has become essential for business growth. Understand key strategies and benefits...",
      category: "Marketing",
      date: "March 15, 2024",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      categoryColor: "bg-orange-900 text-orange-300"
    },
    {
      id: 4,
      title: "Why Every Business Needs a Professional Website",
      excerpt: "In today's digital age, a professional website is crucial for business credibility and growth...",
      category: "Business",
      date: "March 12, 2024",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      categoryColor: "bg-purple-900 text-purple-300"
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
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
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