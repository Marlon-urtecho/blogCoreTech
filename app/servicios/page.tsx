"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiCode, FiGlobe, FiServer, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { FaRobot, FaDatabase, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Consultoría Tecnológica Estratégica",
      description: "Analizamos tu infraestructura tecnológica actual y desarrollamos un roadmap estratégico para optimizar tus procesos, reducir costos y maximizar el retorno de inversión en tecnología.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Auditoría tecnológica completa",
        "Planificación estratégica IT",
        "Análisis de arquitectura",
        "Roadmap de implementación",
        "Optimización de costos"
      ],
      icon: <FiCode />,
      color: "blue",
      route: "/servicios/consultoria-tecnologica"
    },
    {
      id: 2,
      title: "Desarrollo de Software a Medida",
      description: "Creamos soluciones de software personalizadas que se adaptan perfectamente a tus necesidades de negocio. Desde sistemas de gestión hasta plataformas complejas con arquitectura escalable.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Aplicaciones web y móviles",
        "Arquitectura microservicios",
        "Integración de sistemas legacy",
        "APIs personalizadas",
        "Mantenimiento continuo"
      ],
      icon: <FiGlobe />,
      color: "purple",
      route: "/servicios/desarrollo-software"
    },
    {
      id: 3,
      title: "Transformación Digital Integral",
      description: "Te acompañamos en todo el proceso de transformación digital, desde la automatización de procesos hasta la migración a la nube, asegurando una transición fluida y exitosa.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Automatización de procesos",
        "Migración a la nube",
        "Digitalización documental",
        "Optimización de workflows",
        "Analytics avanzado"
      ],
      icon: <FiServer />,
      color: "green",
      route: "/servicios/transformacion-digital"
    },
    {
      id: 4,
      title: "Soporte y Mantenimiento Proactivo",
      description: "Ofrecemos soporte técnico especializado 24/7 y mantenimiento preventivo para garantizar el funcionamiento óptimo de tus sistemas, con monitoreo continuo y respuesta inmediata.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Soporte técnico 24/7",
        "Mantenimiento preventivo",
        "Monitoreo proactivo",
        "Actualizaciones de seguridad",
        "Backup y recuperación"
      ],
      icon: <FiSmartphone />,
      color: "orange",
      route: "/servicios/soporte-mantenimiento"
    }
  ];

  const serviceCategories = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables",
      href: "/servicios/desarrollo-web",
      icon: <FiGlobe />,
      color: "bg-blue-500",
      features: ["Landing page", "Diseño Responsivo", "Ecomerce", "web Apps"]
    },
    {
      id: 2,
      title: "Apps Móviles",
      description: "iOS, Android, aplicaciones nativas e híbridas",
      href: "/servicios/desarrollo-movil",
      icon: <FiSmartphone />,
      color: "bg-green-500",
      features: ["iOS", "Android", "Multiplataforma", "UI/UX" ]
    },
    {
      id: 3,
      title: "Marketing Digital",
      description: "Estrategias digitales para crecimiento online",
      href: "/servicios/marketing-digital",
      icon: <FiTrendingUp />,
      color: "bg-purple-500",
      features: ["SEO", "Redes Sociales", "Content", "Analytics"]
    },
    {
      id: 4,
      title: "Inteligencia Artificial",
      description: "Soluciones con IA y Automatización",
      href: "/servicios/inteligencia-artificial",
      icon: <FaRobot />,
      color: "bg-pink-500",
      features: ["Automatización", "NLP", "Chatbots", "Computer Vision"]
    },
    {
      id: 5,
      title: "Transformación Digital",
      description: "Análisis y procesamiento de datos",
      href: "/servicios/transformacion-digital",
      icon: <FiServer />,
      color: "bg-orange-500",
      features: ["Análisis de datos", "Reportes Kpi's", "Respaldo de datos", "Dashboards"]
    },
    {
      id: 6,
      title: "Ciberseguridad",
      description: "Protección de sistemas y datos",
      href: "/servicios/ciberseguridad",
      icon: <FaShieldAlt />,
      color: "bg-red-500",
      features: ["Seguridad", "Pentesting", "Compliance", "Auditoría"]
    }
  ];

  const methodologies = [
    {
      step: "01",
      title: "Descubrimiento",
      description: "Entendemos tus necesidades y objetivos"
    },
    {
      step: "02",
      title: "Estrategia",
      description: "Diseñamos una solución personalizada"
    },
    {
      step: "03",
      title: "Implementación",
      description: "Desarrollamos con metodologías ágiles"
    },
    {
      step: "04",
      title: "Optimización",
      description: "Mejoramos continuamente"
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <FiCode />
            NUESTROS SERVICIOS
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Soluciones de <span className="text-primary">Tecnología</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Ofrecemos una gama completa de servicios tecnológicos diseñados para 
          impulsar la innovación y el crecimiento de tu negocio.
        </p>
      </div>

      {/* Categorías de Servicios */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Nuestras Especialidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={category.href} className="block h-full">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 
                             hover:shadow-xl transition-all duration-300 h-full group">
                  <div className={`inline-flex p-3 ${category.color} text-white rounded-lg mb-4`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:underline">
                    <span>Ver servicio</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Servicios Principales con Layout Alternado */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
          Servicios Integrales
        </h2>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Imagen */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 lg:h-80 bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-full">
                      {service.color.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    SERVICIO {index + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FiCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.route}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium 
                           rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <span>Saber más</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Metodología */}
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un proceso estructurado que garantiza resultados excepcionales
          </p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((method, index) => (
            <motion.div
              key={method.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-gray-700"
              
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full 
                           flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                {method.step}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{method.title}</h4>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos 
            ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1c3D5B] text-white font-semibold 
                     rounded-lg hover:bg-[#1c3D5B]/90 transition-colors"
          >
            <span>Contactar Ahora</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}