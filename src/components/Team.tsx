"use client";

import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      initials: "HD",
      name: "Hamdan",
      role: "CEO & Founder",
      description: "Visionary leader with expertise in business strategy and technology innovation.",
      color: "from-blue-400 to-blue-600",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      initials: "ND",
      name: "Nidhin",
      role: "CTO",
      description: "Technical architect with expertise in cloud infrastructure and scalable system design.",
      color: "from-green-400 to-green-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      initials: "MS",
      name: "Musheer",
      role: "Front-end Developer",
      description: "Creative developer focused on user experience and modern web technologies.",
      color: "from-purple-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      initials: "BL",
      name: "Bilal",
      role: "Project Manager",
      description: "Strategic thinker who bridges business needs with technical solutions for optimal outcomes.",
      color: "from-red-400 to-pink-600",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
    },
    {
      initials: "ND",
      name: "Nandana",
      role: "Front-end Developer",
      description: "UI/UX specialist ensuring pixel-perfect designs and smooth user interactions.",
      color: "from-teal-400 to-cyan-600",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
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
                  className="w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
