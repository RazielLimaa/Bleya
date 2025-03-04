import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="none"/>
            <circle cx="35" cy="30" r="3" fill="currentColor" className="text-purple-500"/>
            <circle cx="40" cy="15" r="3" fill="currentColor" className="text-purple-500"/>
            <circle cx="50" cy="25" r="3" fill="currentColor" className="text-purple-500"/>
            <circle cx="65" cy="30" r="3" fill="currentColor" className="text-purple-500"/>
            <circle cx="75" cy="40" r="3" fill="currentColor" className="text-purple-500"/>
            <path d="M50 35V50M50 50H40M50 50H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500"/>
            <path d="M30 60H45M55 60H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500"/>
            <path d="M25 70H40M60 70H75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-purple-500"/>
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
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-lg font-medium hover:text-purple-400 transition-colors relative group ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-8 items-center">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-3xl font-bold hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;