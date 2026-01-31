"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdWhatsapp, MdPhone, MdEmail, MdClose } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const contactOptions = [
    {
      icon: <MdWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      color: "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl",
      hoverColor: "group-hover:bg-green-700",
      action: () => {
        const phone = "1234567890";
        const message = "Hola, me gustaría obtener información sobre sus servicios";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
      }
    },
    {
      icon: <MdPhone className="text-2xl" />,
      label: "Llamar",
      color: "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl",
      hoverColor: "group-hover:bg-blue-700",
      action: () => {
        window.location.href = "tel:+1234567890";
      }
    },
    {
      icon: <MdEmail className="text-2xl" />,
      label: "Email",
      color: "bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl",
      hoverColor: "group-hover:bg-purple-700",
      action: () => {
        window.location.href = "mailto:info@coretech.com?subject=Consulta";
      }
    }
  ];

  return (
    <>
      {/* Botón flotante principal - MÁS ARRIBA Y MÁS GRANDE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="fixed bottom-24 right-8 z-50" // Cambiado de bottom-6 a bottom-24
      >
        {/* Tooltip mejorado */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute right-20 bottom-1/2 translate-y-1/2"
            >
              <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap font-medium">
                💬 ¿Necesitas ayuda?
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-gray-900" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botones de opciones - MÁS GRANDES */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-20 right-0 mb-6 flex flex-col gap-4 items-end"
            >
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: 30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.8 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  onClick={option.action}
                  className={`${option.color} text-white p-4 rounded-2xl 
                           flex items-center gap-3 pr-5 group transition-all duration-300
                           hover:scale-105 active:scale-95`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-base font-semibold whitespace-nowrap">
                    {option.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal - MÁS GRANDE Y COLOR SÓLIDO */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`relative p-5 rounded-2xl shadow-2xl ${isOpen ? 'bg-red-600' : 'bg-blue-600'} 
                   text-white flex items-center justify-center group
                   hover:shadow-3xl transition-shadow duration-300`}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          aria-label={isOpen ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "message"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isOpen ? (
                <MdClose className="text-3xl" /> // Más grande
              ) : (
                <FiMessageCircle className="text-3xl" /> // Más grande
              )}
            </motion.div>
          </AnimatePresence>

          {/* Efecto de pulso más visible */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-blue-400/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}

          {/* Efecto de brillo al hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </motion.button>

        {/* Contador de notificaciones (opcional) */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold 
                     rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
          >
            3
          </motion.div>
        )}
      </motion.div>

      {/* Overlay para cerrar al hacer click fuera */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButton;