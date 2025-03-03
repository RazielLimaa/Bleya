import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 50,
      x: -100,
      rotate: -5,
      filter: "blur(10px)"
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const glitchAnimation = {
    initial: { textShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
      textShadow: [
        "2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7)",
        "-2px 0 0 rgba(255,0,255,0.7), 2px 0 0 rgba(0,255,255,0.7)",
        "2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7)",
        "0 0 0 rgba(0,0,0,0)"
      ],
      transition: { duration: 0.5, repeat: 0 }
    },
    tap: {
      scale: 0.95,
      textShadow: "0 0 8px rgba(0,255,255,0.8), 0 0 12px rgba(255,0,255,0.8)",
      transition: { duration: 0.1 }
    }
  };

  const menuItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="none" />
            <circle cx="35" cy="30" r="3" fill="currentColor" className="text-purple-500" />
            <circle cx="40" cy="15" r="3" fill="currentColor" className="text-purple-500" />
            <circle cx="50" cy="25" r="3" fill="currentColor" className="text-purple-500" />
            <circle cx="65" cy="30" r="3" fill="currentColor" className="text-purple-500" />
            <circle cx="75" cy="40" r="3" fill="currentColor" className="text-purple-500" />
            <path d="M50 35V50M50 50H40M50 50H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500" />
            <path d="M30 60H45M55 60H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500" />
            <path d="M25 70H40M60 70H75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500" />
          </svg>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bleya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-10"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {menuItems.map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-lg font-medium hover:text-purple-400 transition-colors relative group ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'text-purple-500'
                    : 'text-white'
                  }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <motion.button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)} // Alterna o estado do menu
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-cyan-400" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-purple-400" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu - Only visible on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <div className="flex flex-col items-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className="my-4 relative overflow-hidden"
                  >
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="flex items-center text-4xl font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{
                          x: 10,
                          textShadow: "0 0 8px rgba(0,255,255,0.8), 0 0 12px rgba(255,0,255,0.8)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronRight className="text-purple-500 opacity-0 group-hover:opacity-100" size={24} />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                          {item.toUpperCase()}
                        </span>
                      </motion.div>
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-cyan-400"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Grid lines */}
              <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute inset-0 grid grid-cols-12 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-12 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;