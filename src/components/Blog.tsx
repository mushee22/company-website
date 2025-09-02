"use client";

import { motion } from "framer-motion";
import { Code, Database, TrendingUp } from "lucide-react";
import Link from "next/link";


const Blog = () => {
  const blogPosts = [
    {
      slug: "why-nextjs-better-than-react",
      icon: Code,
      category: "Development",
      title: "Why Next.js is Better for Websites than React",
      description: "Discover the advantages of Next.js over vanilla React for building modern, performant websites...",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      categoryColor: "bg-blue-900 text-blue-300"
    },
    {
      slug: "strapi-cms-ultimate-content-management",
      icon: Database,
      category: "CMS",
      title: "Strapi CMS: The Ultimate Content Management Solution",
      description: "Learn how Strapi CMS empowers developers to build flexible, scalable content management systems...",
      date: "March 18, 2024",
      image: "/strapi.webp",
      categoryColor: "bg-green-900 text-green-300"
    },
    {
      slug: "importance-digital-marketing-modern-business",
      icon: TrendingUp,
      category: "Marketing",
      title: "The Importance of Digital Marketing in Modern Business",
      description: "Digital marketing has become essential for business growth. Understand key strategies and benefits...",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
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
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-semibold mr-4`}>
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition duration-300">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">{post.description}</p>
                    <Link 
                      href={`/blog/${post.slug}`} 
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
