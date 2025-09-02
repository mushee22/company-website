"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, TrendingUp, CheckCircle, Target, BarChart, Users, Search } from "lucide-react";

const DigitalMarketingPage = () => {
  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic"
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Precision advertising that reaches your ideal customers"
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven strategies with detailed performance tracking"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build and engage your community across all platforms"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Market Research",
      description: "Analyze your market, competitors, and target audience"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create comprehensive marketing strategy tailored to your goals"
    },
    {
      step: "03",
      title: "Campaign Execution",
      description: "Launch and manage multi-channel marketing campaigns"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization for maximum ROI"
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
                Digital Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Data-driven marketing strategies to boost your online presence and drive conversions through targeted campaigns and analytics.
              </p>
              <Link 
                href="/contact" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 inline-flex items-center"
              >
                Get Started
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
                alt="Digital Marketing"
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
            <p className="text-xl text-gray-400">Comprehensive digital marketing services</p>
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
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
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
            <p className="text-xl text-gray-400">From strategy to results</p>
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
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a digital marketing strategy that drives real results.
            </p>
            <Link 
              href="/contact" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 inline-flex items-center"
            >
              Start Your Campaign
              <TrendingUp className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;