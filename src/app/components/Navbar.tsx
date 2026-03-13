import { Link, useLocation } from 'react-router';
import { Github, Globe, Sun, Moon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';

export function Navbar() {
  const { language, theme, toggleTheme, toggleLanguage } = useApp();
  const location = useLocation();
  const t = translations[language];

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/projects', label: t.nav.projects },
    { path: '/skills', label: t.nav.skills },
    { path: '/contact', label: t.nav.contact }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent">
              Leman Çalışkan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                  isActive(link.path)
                    ? 'text-[#613DC1]'
                    : 'text-foreground hover:text-[#613DC1]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#613DC1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/lemancaliskan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#97DFFC]/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-[#97DFFC]/10 transition-colors flex items-center space-x-1"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[#97DFFC]/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-[#613DC1] text-white'
                  : 'bg-[#97DFFC]/10 text-foreground hover:bg-[#97DFFC]/20'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
