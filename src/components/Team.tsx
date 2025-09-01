"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Dribbble, Palette } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      initials: "JS",
      name: "John Smith",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech, passionate about building solutions that make a difference.",
      color: "from-blue-400 to-blue-600",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" }
      ]
    },
    {
      initials: "SD",
      name: "Sarah Davis",
      role: "CTO",
      description: "Technical architect with expertise in cloud infrastructure and scalable system design.",
      color: "from-green-400 to-green-600",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Github, href: "#", label: "GitHub" }
      ]
    },
    {
      initials: "MJ",
      name: "Mike Johnson",
      role: "Lead Designer",
      description: "Creative director focused on user experience and interface design that converts.",
      color: "from-purple-400 to-purple-600",
      social: [
        { icon: Dribbble, href: "#", label: "Dribbble" },
        { icon: Palette, href: "#", label: "Portfolio" }
      ]
    },
    {
      initials: "EM",
      name: "Emma Martinez",
      role: "Product Manager",
      description: "Strategic thinker who bridges business needs with technical solutions for optimal outcomes.",
      color: "from-red-400 to-pink-600",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" }
      ]
    },
    {
      initials: "AB",
      name: "Alex Brown",
      role: "DevOps Engineer",
      description: "Cloud infrastructure specialist ensuring scalable and reliable deployment solutions.",
      color: "from-teal-400 to-cyan-600",
      social: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }
      ]
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
    <section id="team" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400">Passionate professionals dedicated to your success</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-6">
                <motion.div 
                  className={`w-32 h-32 bg-gradient-to-r ${member.color} rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {member.initials}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.description}</p>
              <div className="flex justify-center space-x-4">
                {member.social.map((social, socialIndex) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + socialIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
