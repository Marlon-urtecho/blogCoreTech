"use client";

import { NavbarMenu } from "@/mockData/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import ResponseMenu from "../sub/ResponsiveMenu";
import FloatingContactButton from "../sub/FloatingContactButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Variantes
  const menuItemVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { 
      y: -2,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20 
      }
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-white py-6 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="/"
                className="flex items-center gap-3 group"
                aria-label="Ir al inicio"
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/CoreTech.svg"  
                    alt="Logo"
                    className="h-10 w-auto"  // Ajustando el tamaño
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    CoRe
                  </span>
                  <span className="text-xs font-medium text-primary tracking-widest -mt-1">
                    TECH BLOG
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NavbarMenu.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveHover(item.title)}
                  onMouseLeave={() => setActiveHover(null)}
                  variants={menuItemVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <a
                    href={item.link}
                    className="relative px-5 py-2 text-gray-700 font-medium group flex flex-col items-center"
                  >
                    <motion.span 
                      className="relative z-10"
                      animate={{
                        color: activeHover === item.title ? "#3b82f6" : "#374151"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.span>
                    
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 bg-primary -translate-x-1/2"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: activeHover === item.title ? "100%" : 0,
                        opacity: activeHover === item.title ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Botón de Búsqueda */}
              <AnimatePresence mode="wait">
                {searchOpen ? (
                  <motion.div
                    key="search-open"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 250 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="relative"
                  >
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <input
                        type="text"
                        placeholder="Buscar servicios..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-2.5 pl-4 pr-12 rounded-full border border-gray-300 
                                 bg-white shadow-sm focus:outline-none focus:border-primary 
                                 focus:ring-2 focus:ring-primary/20"
                        autoFocus
                      />
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                        >
                          <MdClose className="text-lg" />
                        </button>
                        <button
                          type="submit"
                          className="p-2 bg-primary text-white rounded-full hover:bg-primary/90"
                        >
                          <CiSearch className="text-xl" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.button
                    key="search-closed"
                    title="Buscar"
                    className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSearchOpen(true)}
                  >
                    <CiSearch className="text-xl text-gray-600" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <MdClose className="text-2xl text-gray-800" />
                ) : (
                  <MdMenu className="text-2xl text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <ResponseMenu open={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      
      {/* Botón flotante de contacto*/}
      <FloatingContactButton />
    </>
  );
};

export default Navbar;