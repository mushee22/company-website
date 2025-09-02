"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cloud, CheckCircle, Globe, Zap, Shield, Server } from "lucide-react";

const CloudSolutionsPage = () => {
  const features = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Scalable cloud infrastructure on AWS, Azure, and Google Cloud"
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Dynamic resource allocation based on demand and traffic"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Multi-layer security with encryption, monitoring, and compliance"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy applications worldwide with CDN and edge computing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Cloud Assessment",
      description: "Analyze your current infrastructure and cloud readiness"
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Design scalable and secure cloud architecture"
    },
    {
      step: "03",
      title: "Migration & Setup",
      description: "Migrate existing systems and setup new cloud infrastructure"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization for performance and cost"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-gray-300 hover:text-white font-semibold inline-flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Scalable cloud infrastructure and DevOps solutions for enterprise-grade applications with 99.9% uptime guarantee.
              </p>
              <Link 
                href="/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 inline-flex items-center"
              >
                Get Started
                <Cloud className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/cloud-solutions.jpg"
                alt="Cloud Solutions"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
          
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400">Enterprise cloud solutions and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition duration-300"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">From planning to production</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's design and implement the perfect cloud solution for your business.
            </p>
            <Link 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 inline-flex items-center"
            >
              Start Your Project
              <Cloud className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutionsPage;