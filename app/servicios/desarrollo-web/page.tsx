"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaHandshake,
  FaLightbulb,
  FaMobileAlt,
  FaRegSmile,
  FaRocket,
  FaWhatsapp
} from 'react-icons/fa';
import {
  FiAward,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCode,
  FiCoffee,
  FiDollarSign,
  FiGlobe,
  FiLayers,
  FiShield,
  FiSmile,
  FiStar,
  FiTarget,
  FiThumbsUp,
  FiTrendingUp,
  FiUsers, FiZap
} from 'react-icons/fi';

// Componente de formulario (el que creamos arriba)
import ContactFormModal from '../contacForm';

export default function PremiumWebDevelopmentPage() {
  const [activeService, setActiveService] = useState('frontend');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Secciones amigables para no técnicos
  const forNonTechSection = {
    title: "¿No eres experto en tecnología? ¡Perfecto!",
    subtitle: "Hacemos que el desarrollo web sea fácil y comprensible para todos",
    points: [
      {
        icon: <FaRegSmile className="text-3xl" />,
        title: "Hablamos tu idioma",
        description: "Sin términos técnicos complicados. Te explicamos todo de manera clara y sencilla."
      },
      {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Proceso guiado",
        description: "Te acompañamos en cada paso, desde la idea hasta el lanzamiento."
      },
      {
        icon: <FiThumbsUp className="text-3xl" />,
        title: "Decisiones fáciles",
        description: "Te presentamos opciones claras con beneficios y costos transparentes."
      },
      {
        icon: <FiAward className="text-3xl" />,
        title: "Resultados visibles",
        description: "Verás cómo tu sitio web atrae más clientes y crece tu negocio."
      }
    ]
  };

  const services = [
    {
      id: 'frontend',
      title: "Tu Sitio Web que Impresiona",
      subtitle: "La cara digital de tu negocio que atrae y convierte clientes",
      description: "Creamos sitios web que no solo se ven increíbles, sino que también funcionan perfectamente en celulares y computadoras. Hacemos que tu negocio destaque online.",
      icon: <FiGlobe className="text-4xl" />,
      color: 'from-blue-500 to-cyan-400',
      
      packages: [
        {
          name: 'Sitio Web Inicial',
          price: '$8,500',
          features: [
            'Diseño moderno y profesional',
            'Funciona perfecto en celulares',
            'Fácil de actualizar tú mismo',
            'Aparece en Google fácilmente',
            'Listo en 6 semanas',
            'Ayuda por 3 meses'
          ],
          bestFor: 'Para empezar tu presencia online',
          popular: false
        },
        {
          name: 'Sitio Web Avanzado',
          price: '$18,500',
          features: [
            'Diseño totalmente personalizado',
            'Sistema de cotizaciones online',
            'Conexión con redes sociales',
            'Ver cuántos visitantes tienes',
            'Formularios inteligentes',
            'Ayuda por 6 meses',
            'Panel de control fácil'
          ],
          bestFor: 'Para destacar y vender más',
          popular: true
        },
        {
          name: 'Sitio Premium',
          price: 'Personalizado',
          features: [
            'Diseño exclusivo para tu marca',
            'Sistema de gestión avanzado',
            'Soporte disponible 24/7',
            'Equipo dedicado a tu proyecto',
            'Capacitación para tu equipo',
            'Garantía de satisfacción',
            'Multi-idioma si lo necesitas'
          ],
          bestFor: 'Empresas grandes que necesitan lo mejor'
        }
      ],

      benefits: [
        {
          title: 'Velocidad',
          value: '95+',
          unit: 'Puntuación Google',
          description: 'Tu sitio cargará súper rápido'
        },
        {
          title: 'Más Ventas',
          value: '40%',
          description: 'Aumento promedio en conversiones',
          icon: <FiTrendingUp />
        },
        {
          title: 'Ahorro de Tiempo',
          value: '30%',
          description: 'Más rápido que hacerlo por tu cuenta',
          icon: <FiClock />
        }
      ],

      caseStudy: {
        client: 'Tienda de Moda "StyleHub"',
        challenge: 'Sitio lento, pocas ventas desde celulares',
        solution: 'Sitio web optimizado y fácil de usar',
        results: [
          '92% más rápido en celulares',
          '45% más ventas online',
          '60% menos abandonos del sitio'
        ]
      }
    },
    {
      id: 'fullstack',
      title: "Sistema Web Completo",
      subtitle: "Todo lo que tu negocio necesita en una sola plataforma",
      description: "Desarrollamos sistemas completos que manejan todo: clientes, inventario, ventas y más. Todo integrado y fácil de usar para tu equipo.",
      icon: <FiLayers className="text-4xl" />,
      color: 'from-green-500 to-emerald-400',
      
      packages: [
        {
          name: 'Sistema Básico',
          price: '$25,000',
          features: [
            'Gestión de clientes',
            'Control de inventario simple',
            'Sistema de cotizaciones',
            'Panel de control intuitivo',
            'Reportes básicos',
            'Capacitación incluida'
          ],
          bestFor: 'Pequeñas empresas',
          popular: false
        },
        {
          name: 'Sistema Avanzado',
          price: '$65,000',
          features: [
            'Multi-usuario simultáneo',
            'Sistema de pagos integrado',
            'App para celular incluida',
            'Chat con clientes',
            'Sistema de reseñas',
            'Soporte por 12 meses'
          ],
          bestFor: 'Empresas en crecimiento',
          popular: true
        },
        {
          name: 'Sistema Empresarial',
          price: 'Desde $120,000',
          features: [
            'Miles de productos',
            'Múltiples formas de pago',
            'Logística integrada',
            'Recomendaciones automáticas',
            'Soporte 24/7 dedicado',
            'ROI garantizado'
          ],
          bestFor: 'Grandes empresas'
        }
      ],

      benefits: [
        {
          title: 'Eficiencia',
          value: '80%',
          description: 'Menos trabajo manual',
          icon: <FiZap />
        },
        {
          title: 'ROI',
          value: '6 meses',
          description: 'Retorno de inversión promedio',
          icon: <FiDollarSign />
        },
        {
          title: 'Satisfacción',
          value: '4.9/5',
          description: 'Clientes satisfechos',
          icon: <FiUsers />
        }
      ],

      caseStudy: {
        client: 'Clínica SaludTotal',
        challenge: 'Sistema manual, citas perdidas',
        solution: 'Sistema web con reservas online',
        results: [
          'Lanzado en 4 meses',
          '10,000 pacientes en primer mes',
          '300% retorno en 5 meses'
        ]
      }
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService) || services[0];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(`${activeServiceData.title} - ${planName}`);
    setShowContactForm(true);
  };

  // Sección de Contacto Directo Mejorada
  const ContactDirectSection = () => (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <FaHandshake className="text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Hablamos de tu proyecto?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
          Agenda una llamada gratuita con nuestro equipo. Te explicaremos todo en palabras simples y te daremos un plan claro para tu proyecto.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => {
              setSelectedPlan('Consulta Inicial Gratuita');
              setShowContactForm(true);
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md text-lg hover:scale-105"
          >
            <FiCalendar />
            Agendar Llamada Gratuita
          </button>
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20me%20gustaría%20hablar%20sobre%20un%20proyecto%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md text-lg hover:scale-105"
          >
            <FaWhatsapp />
            Chatear por WhatsApp
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col items-center gap-2">
            <FiCoffee className="text-yellow-300 text-2xl" />
            <span className="text-center">Primera conversación sin compromiso</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaMobileAlt className="text-green-300 text-2xl" />
            <span className="text-center">Te mostramos ejemplos en vivo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaRocket className="text-white text-2xl" />
            <span className="text-center">Propuesta en 24 horas</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section Mejorada */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <FiCode />
              DESARROLLO WEB SIN COMPLICACIONES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tu <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sitio Web Perfecto</span>,
              <br />Sin <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Dolor de Cabeza</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creamos sitios web que realmente funcionan para tu negocio. 
              Sin términos técnicos complicados, sin sorpresas. Solo resultados que puedes ver y medir.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: FiCheck, text: 'Precio claro desde el inicio', color: 'green-400' },
                { icon: FiShield, text: 'Garantía de satisfacción', color: 'blue-400' },
                { icon: FiZap, text: 'Entrega más rápida', color: 'yellow-400' },
                { icon: FiSmile, text: 'Atención humana 24/7', color: 'purple-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <item.icon className={`text-${item.color} text-2xl mb-2`} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                setSelectedPlan('Consulta Inicial Gratuita');
                setShowContactForm(true);
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Quiero Mi Sitio Web
            </button>
          </motion.div>
        </div>
      </div>

      {/* Sección para no técnicos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 mb-12 border border-purple-200 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{forNonTechSection.title}</h2>
            <p className="text-gray-700 text-lg">{forNonTechSection.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forNonTechSection.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  {point.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navegación de servicios */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Qué necesitas para tu negocio?
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeService === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.icon}
                <span className="font-semibold">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido Principal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
            {/* Hero del servicio */}
            <div className={`bg-gradient-to-r ${activeServiceData.color} rounded-3xl p-8 text-white shadow-xl`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {activeServiceData.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{activeServiceData.title}</h2>
                      <p className="text-white/90 text-lg">{activeServiceData.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/90 mb-6">
                    {activeServiceData.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {activeServiceData.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-2">
                          {benefit.icon || <FiCheck />}
                          <span className="font-bold">{benefit.value}{benefit.unit || ''}</span>
                          {benefit.description && (
                            <span className="text-white/80 text-sm ml-2">{benefit.description}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Paquetes */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Opciones que se adaptan a lo que necesitas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {activeServiceData.packages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                      pkg.popular
                        ? 'border-blue-500 shadow-xl scale-[1.02]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                          MÁS POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className={`text-center mb-6 ${pkg.popular ? 'pt-2' : ''}`}>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                      <div className="text-gray-600 text-sm bg-gray-100 inline-block px-3 py-1 rounded-full">
                        {pkg.bestFor}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <FiCheck className="text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => handlePlanSelect(pkg.name)}
                      className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500 hover:shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FiTarget />
                      Elegir este paquete
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Caso de Éxito */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center mb-8">
                <FiStar className="text-yellow-300 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Historia de Éxito</h3>
                <p className="text-gray-300">Un cliente como tú que logró grandes resultados</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <FaLightbulb /> El Desafío
                  </div>
                  <p className="text-gray-300">{activeServiceData.caseStudy.challenge}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                    <FiCheck /> Nuestra Solución
                  </div>
                  <p className="text-gray-300">{activeServiceData.caseStudy.solution}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                    <FiTrendingUp /> Resultados
                  </div>
                  <div className="space-y-3">
                    {activeServiceData.caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Contacto Directo */}
            <ContactDirectSection />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer con garantías */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Tu tranquilidad es nuestra prioridad</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiShield className="text-3xl text-green-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Garantía de Calidad</h4>
                <p className="text-gray-300 text-center">Si no estás satisfecho, trabajamos hasta que lo estés.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiClock className="text-3xl text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Soporte Continuo</h4>
                <p className="text-gray-300 text-center">Te ayudamos incluso después de lanzar tu sitio.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiDollarSign className="text-3xl text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Sin Sorpresas</h4>
                <p className="text-gray-300 text-center">Precio fijo, sin cargos ocultos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del Formulario */}
      <ContactFormModal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}