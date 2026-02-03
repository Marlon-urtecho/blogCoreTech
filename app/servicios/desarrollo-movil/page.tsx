"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSmartphone, FiCheck, FiDownload, FiShield, FiZap,
  FiClock, FiUsers, FiTrendingUp, FiPackage, FiCalendar,
  FiDollarSign, FiStar, FiThumbsUp, FiAward, FiTarget,
  FiMessageCircle, FiMail, FiPhone, FiCoffee
} from 'react-icons/fi';
import { 
  FaApple, FaAndroid, FaReact, FaGooglePlay,
  FaWhatsapp, FaRegSmile, FaLightbulb, FaMobileAlt,
  FaRocket, FaHandshake
} from 'react-icons/fa';
import { SiFlutter, SiReact } from 'react-icons/si';

// Importar el formulario que ya creamos
import ContactFormModal from '../contacForm';

export default function DesarrolloMovilPremiumPage() {
  const [activeService, setActiveService] = useState('ios');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Sección amigable para no técnicos
  const forNonTechSection = {
    title: "Tu App Móvil Sin Complicaciones Técnicas",
    subtitle: "Hacemos que desarrollar una app sea tan fácil como contar tu idea",
    points: [
      {
        icon: <FaRegSmile className="text-3xl" />,
        title: "Explicamos todo en palabras simples",
        description: "Sin jerga técnica. Te decimos exactamente qué necesitas y por qué."
      },
      {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Te guiamos en cada paso",
        description: "Desde la idea hasta las tiendas de apps, estamos contigo."
      },
      {
        icon: <FiThumbsUp className="text-3xl" />,
        title: "Opciones claras y transparentes",
        description: "Sabrás exactamente qué obtienes y cuánto cuesta desde el inicio."
      },
      {
        icon: <FiAward className="text-3xl" />,
        title: "Resultados que ves y sientes",
        description: "Tu app funcionando y generando valor para tu negocio."
      }
    ]
  };

  const mobileServices = [
    {
      id: 'ios',
      title: "Apps para iPhone y iPad",
      subtitle: "Experiencia premium para usuarios Apple",
      //description: "Desarrollamos apps nativas para iOS que aprovechan al máximo las capacidades de los dispositivos Apple. Rapidez, seguridad y diseño impecable.",
      icon: <FaApple className="text-4xl" />,
      color: "from-gray-800 to-gray-900",
      
      packages: [
        {
          name: 'App Básica iOS',
          price: '$15,000',
          features: [
            'Diseño nativo para iPhone',
            'Publicación en App Store',
            'Soporte por 6 meses',
            'Actualizaciones de iOS incluidas',
            'Integración con Apple Pay',
            'Notificaciones push'
          ],
          bestFor: 'Empresas que inician en iOS',
          popular: false
        },
        {
          name: 'App Avanzada iOS',
          price: '$35,000',
          features: [
            'Compatibilidad iPhone + iPad',
            'Face ID / Touch ID integrado',
            'Widgets de pantalla de inicio',
            'Soporte por 12 meses',
            'Integración con Siri',
            'Análisis de uso avanzado'
          ],
          bestFor: 'Empresas que quieren destacar',
          popular: true
        },
        {
          name: 'App Enterprise iOS',
          price: 'Personalizado',
          features: [
            'Distribución empresarial',
            'MDM (Mobile Device Management)',
            'Seguridad empresarial',
            'Soporte 24/7 dedicado',
            'Integración con sistemas internos',
            'Capacitación para equipos'
          ],
          bestFor: 'Corporaciones grandes'
        }
      ],

      technologies: ["Swift", "SwiftUI", "Objective-C", "Xcode", "ARKit", "CoreML"],
      features: ["App Store Optimization", "Widgets", "Apple Pay", "iCloud Sync"],
      apps: ["Empresariales", "E-commerce", "Salud", "Educación"],

      benefits: [
        {
          title: 'Rendimiento',
          value: '100%',
          description: 'Nativo - Máxima velocidad',
          icon: <FiZap />
        },
        {
          title: 'Ingresos',
          value: '30%',
          description: 'Más que apps híbridas',
          icon: <FiTrendingUp />
        },
        {
          title: 'Satisfacción',
          value: '4.8★',
          description: 'Rating promedio App Store',
          icon: <FiStar />
        }
      ],

      caseStudy: {
        client: 'Boutique de Moda "StyleApp"',
        challenge: 'Necesitaban app para ventas exclusivas a clientes VIP',
        solution: 'App iOS nativa con catálogo personalizado',
        results: [
          '87% más ventas desde la app',
          '4.9★ rating en App Store',
          '2,000+ descargas en primer mes'
        ]
      }
    },
    {
      id: 'android',
      title: "Apps para Android",
      subtitle: "Alcanza a millones de usuarios Android",
      //description: "Desarrollamos apps nativas para Android que funcionan perfectamente en miles de dispositivos. Optimización, personalización y alcance masivo.",
      icon: <FaAndroid className="text-4xl" />,
      color: "from-green-500 to-emerald-600",
      
      packages: [
        {
          name: 'App Básica Android',
          price: '$12,000',
          features: [
            'Compatibilidad múltiples dispositivos',
            'Publicación en Google Play',
            'Material Design nativo',
            'Soporte por 6 meses',
            'Integración con Google Pay',
            'Notificaciones push'
          ],
          bestFor: 'Llegar a mercado masivo',
          popular: false
        },
        {
          name: 'App Avanzada Android',
          price: '$28,000',
          features: [
            'Optimización para todas las marcas',
            'Modo offline disponible',
            'Widgets personalizables',
            'Soporte por 12 meses',
            'Integración con Google Assistant',
            'Análisis de usuario detallado'
          ],
          bestFor: 'Experiencia premium Android',
          popular: true
        },
        {
          name: 'App Enterprise Android',
          price: 'Personalizado',
          features: [
            'Distribución privada',
            'Seguridad empresarial avanzada',
            'Integración con sistemas legacy',
            'Soporte 24/7 dedicado',
            'Control de versiones por empresa',
            'Training completo'
          ],
          bestFor: 'Corporaciones con equipos Android'
        }
      ],

      technologies: ["Kotlin", "Java", "Jetpack Compose", "Android Studio", "Room DB"],
      features: ["Material Design", "Google Play", "Kotlin Coroutines", "Offline First"],
      apps: ["Negocios", "Productividad", "Fitness", "Educación"],

      benefits: [
        {
          title: 'Alcance',
          value: '2.5B',
          description: 'Usuarios activos Android',
          icon: <FiUsers />
        },
        {
          title: 'Flexibilidad',
          value: '1000+',
          description: 'Dispositivos compatibles',
          icon: <FiSmartphone />
        },
        {
          title: 'Costo',
          value: '25%',
          description: 'Menor que desarrollo iOS',
          icon: <FiDollarSign />
        }
      ],

      caseStudy: {
        client: 'Restaurante "FoodExpress"',
        challenge: 'Sistema de pedidos lento y poco confiable',
        solution: 'App Android con pedidos y pagos integrados',
        results: [
          '65% más pedidos desde app',
          '4.7★ rating en Google Play',
          'Reducción del 40% en errores'
        ]
      }
    },
    {
      id: 'crossplatform',
      title: "App para Todas las Plataformas",
      subtitle: "Una sola app que funciona en iPhone y Android",
      description: "Desarrollamos apps cross-platform que funcionan perfectamente en iOS y Android desde un solo código. Rápido desarrollo, menor costo, mismo resultado.",
      icon: <SiFlutter className="text-4xl" />,
      color: "from-blue-500 to-cyan-400",
      
      packages: [
        {
          name: 'App Cross-Platform Básica',
          price: '$18,000',
          features: [
            'Funciona en iOS y Android',
            'Publicación en ambas tiendas',
            'Diseño responsive',
            'Soporte por 6 meses',
            'Base de datos en tiempo real',
            'Notificaciones push'
          ],
          bestFor: 'Startups y MVPs',
          popular: false
        },
        {
          name: 'App Cross-Platform Avanzada',
          price: '$42,000',
          features: [
            'Rendimiento casi nativo',
            'Actualizaciones en vivo (hot reload)',
            'UI/UX personalizada',
            'Soporte por 12 meses',
            'Integración con múltiples APIs',
            'Analytics avanzado'
          ],
          bestFor: 'Empresas que necesitan ambas plataformas',
          popular: true
        },
        {
          name: 'App Multi-Plataforma Enterprise',
          price: 'Personalizado',
          features: [
            'iOS + Android + Web',
            'Arquitectura escalable',
            'Testing automatizado',
            'Soporte 24/7 dedicado',
            'CI/CD configurado',
            'Monitoreo en tiempo real'
          ],
          bestFor: 'Soluciones corporativas completas'
        }
      ],

      technologies: ["Flutter", "Dart", "React Native", "Firebase", "GraphQL"],
      features: ["Single Codebase", "Hot Reload", "Native Performance", "UI Toolkit"],
      apps: ["MVPs", "Startups", "Prototipos", "Multi-Plataforma"],

      benefits: [
        {
          title: 'Tiempo',
          value: '40%',
          description: 'Más rápido que desarrollar por separado',
          icon: <FiClock />
        },
        {
          title: 'Costo',
          value: '50%',
          description: 'Menor que apps nativas separadas',
          icon: <FiDollarSign />
        },
        {
          title: 'Cobertura',
          value: '100%',
          description: 'Mercado iOS + Android',
          icon: <FiUsers />
        }
      ],

      caseStudy: {
        client: 'Servicio de Delivery "QuickDeliver"',
        challenge: 'Necesitaban app rápida para iOS y Android con presupuesto limitado',
        solution: 'App cross-platform con Flutter',
        results: [
          'Lanzamiento en 3 meses (vs 6 meses separado)',
          'Ahorro del 45% en desarrollo',
          'Funciona perfecto en ambas plataformas'
        ]
      }
    }
  ];

  const activeServiceData = mobileServices.find(s => s.id === activeService) || mobileServices[0];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(`${activeServiceData.title} - ${planName}`);
    setShowContactForm(true);
  };

  const processSteps = [
    { 
      step: "01", 
      title: "Conversamos sobre tu idea", 
      desc: "Entendemos tu negocio y objetivos" 
    },
    { 
      step: "02", 
      title: "Diseñamos la experiencia", 
      desc: "Creamos prototipos que te enamorarán" 
    },
    { 
      step: "03", 
      title: "Desarrollamos tu app", 
      desc: "Codificamos con las mejores prácticas" 
    },
    { 
      step: "04", 
      title: "Probamos todo", 
      desc: "Garantizamos que funcione perfecto" 
    },
    { 
      step: "05", 
      title: "Publicamos y damos soporte", 
      desc: "Tu app en las tiendas y nosotros cuidándola" 
    }
  ];

  // Sección de Contacto Directo Mejorada
  const ContactDirectSection = () => (
    <div className="bg-gradient-to-r from-blue-600 to-[#1c3D5B] rounded-2xl shadow-xl p-8 text-white">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <FaMobileAlt className="text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Tienes una idea para una app?
        </h3>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
          Conversa gratis con nuestros expertos. Te diremos cuánto cuesta, cuánto tiempo toma y cómo puedes empezar.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => {
              setSelectedPlan('Consulta para App Móvil');
              setShowContactForm(true);
            }}
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md text-lg hover:scale-105"
          >
            <FiCalendar />
            Hablar sobre mi App
          </button>
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20me%20gustaría%20cotizar%20una%20app%20móvil"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md text-lg hover:scale-105"
          >
            <FaWhatsapp />
            WhatsApp Directo
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col items-center gap-2">
            <FiCoffee className="text-yellow-300 text-2xl" />
            <span className="text-center">Primera conversación sin costo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLightbulb className="text-green-300 text-2xl" />
            <span className="text-center">Te damos ideas para mejorar tu app</span>
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
      {/* Hero Section - Rediseñada */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2070')] opacity-20 bg-cover" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <FiSmartphone className="text-2xl" />
              <span className="font-semibold">APPS MÓVILES QUE TRIUNFAN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Tu <span className="text-cyan-300">App Móvil</span>, 
              <br />Sin <span className="text-pink-300">Complicaciones Técnicas</span>
            </motion.h1>


            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: FiCheck, text: 'Precio claro desde el inicio', color: 'green-400' },
                { icon: FiShield, text: 'Garantía de publicación', color: 'blue-400' },
                { icon: FiZap, text: 'Entrega más rápida', color: 'yellow-400' },
                { icon: FiStar, text: 'Soporte post-lanzamiento', color: 'purple-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <item.icon className={`text-${item.color} text-2xl mb-2`} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección para info de enganche */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 mb-12 border border-cyan-200 shadow-lg">
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
                  <div className="text-blue-600 mb-4">
                    {point.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navegación de servicios */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Para qué dispositivo necesitas tu app?
          </h3>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {mobileServices.map((service) => (
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
      </section>

      {/* Servicio Seleccionado */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                            <span className="font-bold">{benefit.value}</span>
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

              {/* Paquetes de precios */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Paquetes para tu App {activeServiceData.title.split(' ')[0]}
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
                            <span className="text-gray-700 text-sm">{feature}</span>
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
                        Quiero este paquete
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Proceso de Desarrollo */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Creamos Tu App <span className="text-blue-600">Paso a Paso</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un proceso claro y transparente que te mantiene informado en cada etapa
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-#1c3D5B] to-cyan-40 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 
                                 rounded-full flex items-center justify-center text-white 
                                 font-bold text-xl mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Directo */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactDirectSection />
        </div>
      </section>

      {/* Footer con garantías */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Tu tranquilidad, nuestra garantía</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiShield className="text-3xl text-green-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Publicación Garantizada</h4>
                <p className="text-gray-300 text-center">Tu app estará en las tiendas o te devolvemos el dinero.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiClock className="text-3xl text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Soporte Post-Lanzamiento</h4>
                <p className="text-gray-300 text-center">Te ayudamos después de publicar, sin costos adicionales.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiDollarSign className="text-3xl text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Sin Costos Ocultos</h4>
                <p className="text-gray-300 text-center">El precio que ves es el precio que pagas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal del Formulario */}
      <ContactFormModal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}