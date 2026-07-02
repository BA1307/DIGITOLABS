import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const navLinks: { name: string; page: PageType }[] = [
  { name: 'Home', page: 'home' },
  { name: 'Courses', page: 'courses' },
  { name: 'AI Training', page: 'ai-training' },
  { name: 'Biology', page: 'biology' },
  { name: 'Chemistry', page: 'chemistry' },
  { name: 'CBC', page: 'cbc' },
  { name: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090b29]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              id="navbar-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 text-white hover:opacity-90 transition-all cursor-pointer text-left"
            >
              <div className="bg-gradient-to-tr from-brand-magenta via-brand-violet to-brand-cyan p-2 rounded-xl shadow-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-cyan">
                  DIGITO<span className="text-brand-magenta">LABS</span>
                </span>
                <span className="block text-[9px] text-brand-cyan/80 uppercase tracking-widest font-mono">
                  Digital Academy
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    id={`nav-link-${link.page}`}
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-full ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                id="desktop-enroll-cta"
                onClick={() => handleNavClick('contact')}
                className="glow-btn bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-magenta/25 flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#090b29]/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 shadow-2xl lg:hidden flex flex-col space-y-4"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    id={`mobile-nav-link-${link.page}`}
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`px-4 py-3 text-left rounded-xl transition-all font-medium flex justify-between items-center cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-magenta/10 to-brand-violet/10 text-white border-l-4 border-brand-magenta'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'translate-x-1 text-brand-magenta' : 'text-gray-600'}`} />
                  </button>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col">
              <button
                id="mobile-enroll-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white py-3 rounded-xl text-center font-semibold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-brand-magenta/15"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
