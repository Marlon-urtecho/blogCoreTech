"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import {
  FiBriefcase,
  FiChevronRight,
  FiFileText,
  FiHome,
  FiMail,
  FiSettings,
  FiUser,
  FiX
} from "react-icons/fi";

type MenuItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
  color: string;
};

type Props = {
  open: boolean;
  closeMenu: () => void;
};

const ResponseMenu = ({ open, closeMenu }: Props) => {
  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Menu items con iconos y colores
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: "Inicio",
      icon: <FiHome className="text-xl" />,
      href: "/",
      color: "from-blue-400 to-cyan-300"
    },
    {
      id: 2,
      title: "Servicios",
      icon: <FiSettings className="text-xl" />,
      href: "/servicios",
      color: "from-purple-400 to-pink-300"
    },
    {
      id: 3,
      title: "Portafolio",
      icon: <FiBriefcase className="text-xl" />,
      href: "/portafolio",
      color: "from-emerald-400 to-green-300"
    },
    {
      id: 4,
      title: "Sobre Nosotros",
      icon: <FiUser className="text-xl" />,
      href: "/nosotros",
      color: "from-amber-400 to-yellow-300"
    },
    {
      id: 5,
      title: "Blog",
      icon: <FiFileText className="text-xl" />,
      href: "/blog",
      color: "from-rose-400 to-pink-300"
    },
    {
      id: 6,
      title: "Contacto",
      icon: <FiMail className="text-xl" />,
      href: "/contacto",
      color: "from-indigo-400 to-blue-300"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaGithub />, href: "#", label: "GitHub", color: "hover:bg-gray-800 hover:text-white" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: <FaTwitter />, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
    { icon: <FaInstagram />, href: "#", label: "Instagram", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleMenuItemClick = (href: string) => {
    closeMenu();
    // Aquí puedes añadir lógica de navegación
    console.log("Navegando a:", href);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />
          
          {/* Panel del menú - VERSIÓN CLARA */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 150,
              mass: 0.8
            }}
            className="fixed top-0 right-0 w-full max-w-md h-screen bg-white text-gray-800 z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header del menú */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-md">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      CoReTech
                    </h2>
                    <p className="text-sm text-gray-500">Menú de navegación</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={closeMenu}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-sm"
                  aria-label="Cerrar menú"
                >
                  <FiX className="text-2xl text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Lista del menú */}
            <motion.div 
              className="p-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-2">
                Navegación Principal
              </h3>
              
              <div className="space-y-2 mb-8">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleMenuItemClick(item.href)}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 8,
                      backgroundColor: "rgba(243, 244, 246, 0.5)",
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-md"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-sm`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium flex-1 text-gray-800">
                      {item.title}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-gray-400"
                    >
                      <FiChevronRight className="text-xl" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Contacto rápido */}
              <motion.div 
                variants={itemVariants}
                className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <FiMail className="text-2xl text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">¿Necesitas ayuda?</h3>
                    <p className="text-gray-600 mb-4">
                      Contáctanos para una consulta gratuita y sin compromiso
                    </p>
                    <div className="flex gap-3">
                      <motion.button
                        onClick={closeMenu}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-lg 
                                 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Solicitar Consulta
                      </motion.button>
                      <motion.button
                        onClick={closeMenu}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="py-3 px-6 bg-white text-gray-700 font-semibold rounded-lg 
                                 border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        Llamar Ahora
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Redes sociales */}
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-2">
                  Síguenos en redes
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex-1 p-4 rounded-xl bg-gray-50 ${social.color} 
                               border border-gray-200 flex flex-col items-center justify-center gap-2
                               transition-all duration-300 shadow-sm hover:shadow-md`}
                      aria-label={social.label}
                    >
                      <span className="text-xl text-gray-600">{social.icon}</span>
                      <span className="text-xs font-medium text-gray-600">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer del menú */}
              <motion.div 
                variants={itemVariants}
                className="pt-6 border-t border-gray-200 text-center"
              >
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} <span className="font-semibold">CoReTech</span>. Todos los derechos reservados.
                </p>
                <p className="text-gray-400 text-xs mt-2 flex items-center justify-center gap-1">
                
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponseMenu;