"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiAirplay, FiArrowRight, FiCheckCircle, FiCode, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const SimpleServices = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [portfolioHover, setPortfolioHover] = useState(false);

  const services = [
    {
      id: 1,
      icon: <FiSmartphone />,
      title: "Desarrollo de Aplicaciones Móviles",
      items: [
        "Desarrollo de Apps para iOS",
        "Desarrollo de Apps para Android",
        "Desarrollo con Flutter",
        "Desarrollo con React Native"
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300",
      route: "/servicios/",
      buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]"  
    },
    {
      id: 2,
      icon: <FiAirplay />, 
      title: "Desarrollo Web",
      items: [
        "Node JS con MongoDB",
        "Desarrollo Web con Java",
        "Desarrollo con React JS",
        "Desarrollo con Vue JS"
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      borderColor: "border-primary/30",
      route: "/servicios/",
      hoverColor: "hover:border-primary/50",
      buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]"  
    },
    {
      id: 3,
      icon: <FiTrendingUp />,
      title: "Marketing Digital",
      items: [
        "SEO On Page",
        "SEO Off Page",
        "Marketing en Redes Sociales",
        "Marketing de Contenidos"
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      route: "/servicios/",
      hoverColor: "hover:border-purple-300",
      buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]"  
    }, 
    {
      id: 4,
      icon: <FaRobot   />,
      title: "Aprendizaje automático",
      items: [
        "SEO On Page",
        "SEO Off Page",
        "Marketing en Redes Sociales",
        "Marketing de Contenidos"
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
      route: "/servicios/",
     buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]" 
    }, 
    {
      id: 5,
      icon: <FaRobot   />,
      title: "Aprendizaje automático",
      items: [
        "SEO On Page",
        "SEO Off Page",
        "Marketing en Redes Sociales",
        "Marketing de Contenidos"
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
      route: "/servicios/",
     buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]"  
    }, 
    {
      id: 6,
      icon: <FaRobot   />,
      title: "Aprendizaje automático",
      items: [
        "SEO On Page",
        "SEO Off Page",
        "Marketing en Redes Sociales",
        "Marketing de Contenidos"
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
      route: "/servicios/",
      buttonColor: "bg-[#1C3D5B] hover:bg-[#0F1A2A]"  
    }
  ];

  const handleViewPortfolio = () => {
    router.push("/portafolio"); 
  };

  const sentence = "No te esfuerces por tener éxito, sino por ser de valor.";
  const words = sentence.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.10, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <FiCode />
              NUESTROS SERVICIOS
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Estamos comprometidos a brindarte la mejor calidad dentro del tiempo establecido.
          </motion.p>
        </motion.div>

        {/* Grid de servicios con animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-300
                       hover:shadow-xl group"
            >
              {/* Efecto de brillo al hover */}
              {hoveredCard === service.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              )}

              {/* Icono con animación */}
              <motion.div
                animate={{ 
                  rotate: hoveredCard === service.id ? [0, 10, -10, 0] : 0,
                  scale: hoveredCard === service.id ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
                className={`inline-flex p-3 rounded-lg ${service.color} text-white mb-4`}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex-shrink-0"
                    >
                      <FiCheckCircle className="text-green-500" />
                    </motion.div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Botón con animación */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-4 py-2 ${service.buttonColor} text-white font-medium rounded-lg 
                         transition-colors flex items-center justify-center gap-2`}
                onClick={() => router.push(`/servicios#${service.title.toLowerCase().replace(/ /g, '-')}`)}
              >
                <span>Más Información</span>
                <motion.div
                  animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiArrowRight />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Sección de Cita con animación de texto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 
                       shadow-sm max-w-3xl mx-auto relative overflow-hidden">
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="relative z-10">
              <motion.p
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-gray-800 italic mb-6 font-light leading-relaxed"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={child}
                    className="inline-block mr-2"
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-8 h-px bg-gray-400" />
                <p className="text-gray-600 font-semibold">— Albert Einstein</p>
                <div className="w-8 h-px bg-gray-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECCIÓN CTA CON FONDO DE IMAGEN ATRACTIVO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative overflow-hidden rounded-3xl"
        >
          {/* Fondo con imagen y overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
          >
            {/* Overlay oscuro con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />
            
            {/* Efecto de partículas */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm 
                           text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
                <FiCode className="text-white" />
                PORTAFOLIO
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Descubre Nuestro <span className="text-cyan-300">Trabajo</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-200 text-lg max-w-2xl mx-auto"
              >
                Proyectos innovadores que han transformado ideas en soluciones digitales exitosas.
              </motion.p>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto"
            >
              {[
                { number: "10+", label: "Industrias" },
                { number: "95%", label: "Satisfacción" },
                { number: "30+", label: "Clientes" },
                { number: "24/7", label: "Soporte" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón principal con animación */}
            <motion.button
              onClick={handleViewPortfolio}
              onMouseEnter={() => setPortfolioHover(true)}
              onMouseLeave={() => setPortfolioHover(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                       text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300
                       overflow-hidden group"
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: portfolioHover ? "100%" : "-100%" }}
                transition={{ duration: 0.8 }}
              />

              <span className="relative z-10 text-lg">Explorar Portafolio</span>
              
              <motion.div
                animate={{ 
                  x: portfolioHover ? [0, 5, 0, 5, 0] : 0,
                  rotate: portfolioHover ? [0, 5, -5, 5, 0] : 0
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: portfolioHover ? Infinity : 0 
                }}
                className="relative z-10"
              >
                <FiArrowRight className="text-xl" />
              </motion.div>

              {/* Efecto de pulso */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.button>

            {/* Texto secundario */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-sm mt-6"
            >
              Descubre casos de éxito, testimonios y proyectos destacados
            </motion.p>
          </div>

          {/* Efecto de esquinas */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50 rounded-br-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleServices;