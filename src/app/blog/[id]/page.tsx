"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Brain, Shield, Rocket } from "lucide-react";


interface BlogPost {
  title: string;
  category: string;
  date: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  content: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  '1': {
    title: 'The Future of AI in Business: Transforming Industries',
    category: 'Technology',
    date: 'March 15, 2024',
    icon: Brain,
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Artificial intelligence is no longer a futuristic concept—it's reshaping how businesses operate today. From automation to predictive analytics, AI is driving innovation across every industry.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Current State of AI Adoption</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Organizations worldwide are increasingly integrating AI technologies into their core operations. According to recent studies, over 85% of enterprises are either using or planning to use AI within the next two years.
      </p>
    `
  },
  '2': {
    title: 'Cybersecurity Best Practices for Modern Businesses',
    category: 'Security',
    date: 'March 10, 2024',
    icon: Shield,
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        With cyber threats becoming increasingly sophisticated, businesses need robust security measures to protect their digital assets and customer data.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Essential Security Measures</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Implementing a comprehensive cybersecurity strategy requires multiple layers of protection, from network security to employee training.
      </p>
    `
  },
  '3': {
    title: 'Building Scalable Applications: Architecture Guidelines',
    category: 'Development',
    date: 'March 5, 2024',
    icon: Rocket,
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Creating applications that can grow with your business requires careful architectural planning and adherence to proven design patterns.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Key Architecture Principles</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Scalable architecture is built on principles of modularity, loose coupling, and horizontal scaling capabilities.
      </p>
    `
  }
};

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const post = blogPosts[params.id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = post.icon;

  return (
    <article className="py-20 bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="text-gray-300 hover:text-white font-semibold inline-flex items-center">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
          </Link>
        </motion.div>

        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mr-4">
              {post.category}
            </span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
              JS
            </div>
            <div>
              <p className="font-semibold text-white">John Smith</p>
              <p className="text-gray-300 text-sm">CEO & Founder</p>
            </div>
          </div>
        </motion.header>

        <motion.div 
          className="h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IconComponent className="w-24 h-24 text-white" size={96} />
        </motion.div>

        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Our team of experts can help you identify opportunities and implement solutions that drive real business value.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogDetailPage;