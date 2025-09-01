"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";


const Testimonials = () => {
  const testimonials = [
    {
      text: "TechFlow delivered exactly what we needed. Their team&apos;s expertise and attention to detail exceeded our expectations.",
      author: "Alex Rodriguez",
      position: "CEO, StartupCo",
      initials: "AR",
      color: "bg-blue-500"
    },
    {
      text: "Outstanding work! They transformed our outdated system into a modern, efficient platform that our users love.",
      author: "Lisa Mitchell",
      position: "CTO, TechCorp",
      initials: "LM",
      color: "bg-green-500"
    },
    {
      text: "Professional, reliable, and innovative. TechFlow helped us scale our business with their cutting-edge solutions.",
      author: "David Wilson",
      position: "Founder, InnovateLab",
      initials: "DW",
      color: "bg-purple-500"
    },
    {
      text: "Incredible attention to detail and seamless project execution. TechFlow made our complex requirements look effortless.",
      author: "Jennifer Taylor",
      position: "VP Technology, GlobalCorp",
      initials: "JT",
      color: "bg-red-500"
    },
    {
      text: "Their cloud migration strategy saved us 40% on infrastructure costs while improving performance significantly.",
      author: "Robert Smith",
      position: "CIO, FinanceFlow",
      initials: "RS",
      color: "bg-teal-500"
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
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-400">Don&apos;t just take our word for it</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:bg-gray-800 transition duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
