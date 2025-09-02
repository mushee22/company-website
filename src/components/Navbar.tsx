"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  const services = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/mobile-apps", label: "Mobile Apps" },
    { href: "/services/cloud-solutions", label: "Cloud Solutions" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/ai-integration", label: "AI Integration" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-black/90 backdrop-blur-lg border-b border-gray-800 fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Traceflowtech
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-300 ${
                  pathname === item.href
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition duration-300 flex items-center py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
              </button>
              
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-900/98 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-l border-t border-gray-700/50 rotate-45"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">Our Services</div>
                    <div className="space-y-2">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={service.href}
                            className="group/item flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/30 rounded-xl transition-all duration-300 font-medium"
                          >
                            <span className="flex-1 group-hover/item:translate-x-1 transition-transform duration-200">
                              {service.label}
                            </span>
                            <motion.div
                              className="opacity-0 group-hover/item:opacity-100 ml-2"
                              initial={{ x: -5 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                                →
                              </div>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg focus:outline-none transition duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mx-4 my-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;