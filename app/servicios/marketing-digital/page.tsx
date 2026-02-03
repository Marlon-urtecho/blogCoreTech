"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTrendingUp, FiTarget, FiBarChart2, FiUsers, FiSearch, 
  FiMessageCircle, FiDollarSign, FiClock, FiCheckCircle, 
  FiZap, FiGlobe, FiHeart, FiAward, FiShield, FiStar,
  FiArrowRight, FiCalendar, FiCoffee
} from "react-icons/fi";
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaGoogle, 
  FaChartLine, FaWhatsapp, FaRocket, FaHandshake,
  FaRegSmile, FaLightbulb, FaTrophy, FaMobileAlt
} from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import ContactFormModal from '../contacForm';

export default function MarketingDigitalPremiumPage() {
  const [activeService, setActiveService] = useState('redes-sociales');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Sección amigable para no técnicos
  const forNonTechSection = {
    title: "Marketing Digital Explicado para No Expertos",
    subtitle: "Hacemos que tu negocio destaque en internet, sin que tengas que aprender términos complicados",
    points: [
      {
        icon: <FaRegSmile className="text-3xl" />,
        title: "Te explicamos todo claramente",
        description: "Sin jerga de marketing. Te contamos exactamente qué haremos y por qué funciona."
      },
      {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Resultados que puedes ver y medir",
        description: "Más clientes, más ventas, más reconocimiento. Datos reales, no solo likes."
      },
      {
        icon: <FiDollarSign className="text-3xl" />,
        title: "Inversión con retorno garantizado",
        description: "Sabrás exactamente cuánto vas a invertir y cuánto puedes ganar."
      },
      {
        icon: <FaTrophy className="text-3xl" />,
        title: "No necesitas ser experto",
        description: "Nosotros hacemos el trabajo técnico, tú disfrutas los resultados."
      }
    ]
  };

  const marketingServices = [
    {
      id: 'redes-sociales',
      title: "Marketing en Redes Sociales",
      subtitle: "Conectamos tu marca con clientes reales que compran",
      description: "Gestión completa de tus redes sociales con estrategias que generan ventas, no solo likes. Creamos comunidad, engagement y conversiones.",
      icon: <FaInstagram className="text-4xl" />,
      color: "from-pink-500 to-purple-600",
      
      packages: [
        {
          name: 'Plan Básico Redes',
          price: '$800/mes',
          features: [
            'Gestión de 2 redes sociales',
            '15 publicaciones mensuales',
            'Respuesta a comentarios',
            'Reporte mensual básico',
            'Diseño de contenido',
            'Estrategia inicial'
          ],
          bestFor: 'Pequeños negocios que inician',
          popular: false
        },
        {
          name: 'Plan Avanzado Redes',
          price: '$1,500/mes',
          features: [
            'Gestión de 4 redes sociales',
            '30 publicaciones mensuales',
            'Respuesta a mensajes 24/7',
            'Reporte analítico semanal',
            'Campañas patrocinadas básicas',
            'Creación de comunidad activa',
            'Sesiones de estrategia mensual'
          ],
          bestFor: 'Negocios en crecimiento',
          popular: true
        },
        {
          name: 'Plan Empresarial Redes',
          price: '$3,000/mes',
          features: [
            'Gestión completa de todas las redes',
            'Contenido diario personalizado',
            'Campañas pagadas optimizadas',
            'Reportes en tiempo real',
            'Influencer marketing incluido',
            'Monitoreo de competencia',
            'Soporte telefónico prioritario'
          ],
          bestFor: 'Marcas establecidas que quieren dominar'
        }
      ],

      technologies: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Canva", "Meta Business"],
      features: ["Community Management", "Contenido Viral", "Ads Optimizados", "Analytics"],
      
      benefits: [
        {
          title: 'Crecimiento',
          value: '400%',
          description: 'Más interacciones en 3 meses',
          icon: <FiTrendingUp />
        },
        {
          title: 'ROI',
          value: '5:1',
          description: 'Retorno por cada dólar invertido',
          icon: <FiDollarSign />
        },
        {
          title: 'Alcance',
          value: '10x',
          description: 'Más personas ven tu marca',
          icon: <FiUsers />
        }
      ],

      advantages: [
        "Llegas a clientes que ya están buscando lo que vendes",
        "Costos mucho menores que publicidad tradicional",
        "Puedes medir exactamente cuánto ganas por cada dólar invertido",
        "Construyes una comunidad leal que compra repetidamente",
        "Tu competencia ya lo está haciendo (no te quedes atrás)"
      ],

      caseStudy: {
        client: 'Tienda de Ropa Local "Style Boutique"',
        challenge: 'Pocas ventas y poca visibilidad en redes',
        solution: 'Estrategia de Instagram + Facebook Ads',
        results: [
          'Aumento del 350% en seguidores',
          '150% más ventas en 2 meses',
          'Costo por cliente: $2.50 (vs $15 antes)'
        ]
      }
    },
    {
      id: 'seo',
      title: "SEO & Posicionamiento Web",
      subtitle: "Aparece en Google cuando te buscan",
      description: "Optimizamos tu sitio web para que aparezca en los primeros resultados de Google. Tráfico orgánico gratuito de calidad que se convierte en clientes.",
      icon: <FaGoogle className="text-4xl" />,
      color: "from-blue-500 to-cyan-500",
      
      packages: [
        {
          name: 'SEO Básico',
          price: '$1,200/mes',
          features: [
            'Optimización on-page completa',
            '10 palabras clave objetivo',
            'Reporte mensual de posiciones',
            'Optimización técnica básica',
            'Creación de meta descripciones',
            'Análisis de competencia inicial'
          ],
          bestFor: 'Negocios locales',
          popular: false
        },
        {
          name: 'SEO Avanzado',
          price: '$2,500/mes',
          features: [
            'SEO on-page + off-page',
            '30 palabras clave objetivo',
            'Link building estratégico',
            'Reporte semanal detallado',
            'Optimización técnica completa',
            'Creación de contenido SEO',
            'SEO local + Google My Business'
          ],
          bestFor: 'Empresas que quieren dominar su nicho',
          popular: true
        },
        {
          name: 'SEO Enterprise',
          price: '$5,000/mes',
          features: [
            'Estrategia SEO 360°',
            '50+ palabras clave',
            'Link building masivo de calidad',
            'Reportes diarios de rendimiento',
            'Auditoría técnica continua',
            'Contenido SEO ilimitado',
            'Estrategia internacional'
          ],
          bestFor: 'Corporaciones que quieren liderar'
        }
      ],

      technologies: ["Google Search Console", "Ahrefs", "SEMrush", "WordPress", "Schema Markup"],
      features: ["Posicionamiento Orgánico", "Tráfico Gratuito", "Autoridad de Dominio", "Conversiones"],
      
      benefits: [
        {
          title: 'Tráfico',
          value: '300%',
          description: 'Más visitas en 6 meses',
          icon: <FiGlobe />
        },
        {
          title: 'Conversión',
          value: '10x',
          description: 'Más efectivo que ads pagados',
          icon: <FiTarget />
        },
        {
          title: 'Costo',
          value: '$0',
          description: 'Por click después de posicionar',
          icon: <FiDollarSign />
        }
      ],

      advantages: [
        "El tráfico es gratuito después de posicionar (no pagas por cada click)",
        "Los usuarios de Google tienen alta intención de compra",
        "Construyes autoridad y confianza en tu industria",
        "Funciona 24/7 sin parar, incluso cuando duermes",
        "Competidores orgánicos pagan hasta 10 veces menos por cliente"
      ],

      caseStudy: {
        client: 'Abogado de Familia en Miami',
        challenge: 'No aparecía en Google cuando buscaban sus servicios',
        solution: 'SEO local + contenido especializado',
        results: [
          'Posición #1 para 15 palabras clave',
          '25 consultas mensuales desde Google',
          '10 nuevos clientes/mes (antes: 2)'
        ]
      }
    },
    {
      id: 'publicidad',
      title: "Publicidad Digital Pagada",
      subtitle: "Resultados inmediatos y medibles",
      description: "Campañas publicitarias en Google, Facebook e Instagram que generan clientes desde el primer día. Pagas solo por resultados reales.",
      icon: <SiGoogleads className="text-4xl" />,
      color: "from-green-500 to-emerald-600",
      
      packages: [
        {
          name: 'Ads Básico',
          price: '$500/mes + presupuesto ads',
          features: [
            'Campañas en 1 plataforma',
            'Optimización semanal',
            'Reporte básico de resultados',
            'Setup inicial completo',
            'Audiencia básica',
            'Pago solo por nuestro trabajo'
          ],
          bestFor: 'Probar el mercado',
          popular: false
        },
        {
          name: 'Ads Avanzado',
          price: '$1,200/mes + presupuesto ads',
          features: [
            'Campañas en 3 plataformas',
            'Optimización diaria',
            'Reporte detallado semanal',
            'Audiencias personalizadas',
            'Remarketing incluido',
            'A/B testing continuo',
            'ROI garantizado mínimo 3:1'
          ],
          bestFor: 'Empresas que buscan crecimiento rápido',
          popular: true
        },
        {
          name: 'Ads Enterprise',
          price: '$3,000/mes + presupuesto ads',
          features: [
            'Campañas en todas las plataformas',
            'Optimización en tiempo real',
            'Reportes diarios ejecutivos',
            'Machine learning aplicado',
            'Soporte telefónico 24/7',
            'Garantía de ROI 5:1 mínimo',
            'Estrategia omnicanal'
          ],
          bestFor: 'Corporaciones con presupuesto agresivo'
        }
      ],

      technologies: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Analytics"],
      features: ["Resultados Inmediatos", "ROI Medible", "Segmentación Avanzada", "Conversiones"],
      
      benefits: [
        {
          title: 'Velocidad',
          value: '24h',
          description: 'Resultados desde el primer día',
          icon: <FiZap />
        },
        {
          title: 'Control',
          value: '100%',
          description: 'Decides cuánto gastar y cuándo',
          icon: <FiTarget />
        },
        {
          title: 'ROI',
          value: '4:1',
          description: 'Retorno promedio comprobado',
          icon: <FiDollarSign />
        }
      ],

      advantages: [
        "Resultados desde el primer día (no hay que esperar meses)",
        "Pagas solo por lo que funciona (click, leads o ventas)",
        "Control total sobre tu presupuesto (gastas solo lo que quieres)",
        "Puedes pausar cuando quieras (flexibilidad total)",
        "Segmentación ultra precisa (llegas solo a tu cliente ideal)"
      ],

      caseStudy: {
        client: 'Academia de Inglés Online',
        challenge: 'Alto costo por lead con métodos tradicionales',
        solution: 'Campañas Google Ads + Facebook Retargeting',
        results: [
          'Costo por lead reducido de $85 a $22',
          '50 leads calificados/mes',
          'ROI: 8:1 (por cada $1, ganaron $8)'
        ]
      }
    }
  ];

  const activeServiceData = marketingServices.find(s => s.id === activeService) || marketingServices[0];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(`${activeServiceData.title} - ${planName}`);
    setShowContactForm(true);
  };

  const processSteps = [
    { 
      step: "01", 
      title: "Analizamos tu negocio", 
      desc: "Entendemos tus objetivos y competencia" 
    },
    { 
      step: "02", 
      title: "Creamos la estrategia", 
      desc: "Plan personalizado con KPIs claros" 
    },
    { 
      step: "03", 
      title: "Implementamos", 
      desc: "Ejecutamos la estrategia paso a paso" 
    },
    { 
      step: "04", 
      title: "Optimizamos continuamente", 
      desc: "Ajustamos según resultados en tiempo real" 
    },
    { 
      step: "05", 
      title: "Reportamos y crecemos", 
      desc: "Transparencia total y escalamiento" 
    }
  ];

  // Ventajas generales del marketing digital
  const generalAdvantages = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Costo-Efectividad",
      description: "Hasta 10 veces más barato que marketing tradicional con mejor medición"
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Segmentación Precisa",
      description: "Llega exactamente a tu cliente ideal, sin desperdiciar presupuesto"
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Totalmente Medible",
      description: "Sabes exactamente cuánto ganas por cada dólar invertido"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Resultados Rápidos",
      description: "Desde el primer día comienzas a ver resultados concretos"
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Alcance Global/Local",
      description: "Desde tu barrio hasta el mundo, controlas tu alcance"
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Flexibilidad Total",
      description: "Ajustas presupuesto y estrategia en tiempo real según resultados"
    }
  ];

  // Sección de Contacto Directo
  const ContactDirectSection = () => (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <FaChartLine className="text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para multiplicar tus ventas?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
          Agendemos una llamada gratuita. Analizaremos tu negocio y te diremos exactamente 
          cuánto puedes crecer con marketing digital.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => {
              setSelectedPlan('Análisis de Marketing Gratuito');
              setShowContactForm(true);
            }}
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md text-lg hover:scale-105"
          >
            <FiCalendar />
            Análisis Gratuito
          </button>
          <a 
            href="https://wa.me/5491112345678?text=Hola,%20me%20interesa%20saber%20más%20sobre%20marketing%20digital"
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
            <span className="text-center">Primera consulta sin costo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLightbulb className="text-white text-2xl" />
            <span className="text-center">Plan personalizado en 48 horas</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaHandshake className="text-green-300 text-2xl" />
            <span className="text-center">Sin compromiso inicial</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Preguntas frecuentes sobre beneficios
  const faqBenefits = [
    {
      question: "¿Realmente funciona el marketing digital para mi tipo de negocio?",
      answer: "Sí, para TODOS los negocios. Desde abogados hasta restaurantes, tiendas online o servicios locales. Cada negocio tiene clientes que buscan en internet."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Publicidad pagada: 24-48 horas. Redes sociales: 2-4 semanas. SEO: 3-6 meses. Pero todos generan resultados desde el inicio."
    },
    {
      question: "¿Es caro? ¿Realmente vale la pena?",
      answer: "Es la inversión más rentable que puedes hacer. Un cliente promedio genera entre 3x y 10x lo que invierte. Es decir, por cada $100 invertidos, ganas $300-$1000."
    },
    {
      question: "¿Qué pasa si no tengo tiempo para manejar esto?",
      answer: "¡Nosotros nos encargamos de TODO! Solo nos das acceso y nosotros hacemos el trabajo. Tú solo revisas los reportes y disfrutas los resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Rediseñada */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-800 to-rose-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070')] opacity-20 bg-cover" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <FiTrendingUp className="text-2xl" />
              <span className="font-semibold">MARKETING DIGITAL QUE GENERA VENTAS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Más Clientes, Más Ventas, 
              <br /><span className="text-pink-300">Menos Esfuerzo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            >
              Estrategias digitales probadas que convierten visitantes en clientes 
              y aumentan tus ganancias mes a mes. Sin misterios, solo resultados medibles.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: FiDollarSign, text: 'ROI Garantizado', color: 'green-400', value: '3:1 Mínimo' },
                { icon: FiCheckCircle, text: 'Sin Contrato Forzoso', color: 'blue-400', value: 'Flexible' },
                { icon: FiZap, text: 'Resultados Rápidos', color: 'yellow-400', value: 'Desde Día 1' },
                { icon: FiShield, text: 'Transparencia Total', color: 'purple-400', value: 'Reportes Claros' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex flex-col items-center bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-105"
                >
                  <item.icon className={`text-${item.color} text-3xl mb-3`} />
                  <span className="text-lg font-semibold">{item.text}</span>
                  <span className="text-sm text-white/70 mt-1">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección para no técnicos */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 mb-12 border border-pink-200 shadow-lg">
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
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas generales del marketing digital */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué <span className="text-purple-600">Tu Competencia</span> Ya Usa Marketing Digital?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas son las ventajas que están aprovechando mientras tú lees esto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 
                         shadow-sm hover:shadow-md transition-all hover:border-purple-300"
              >
                <div className="text-purple-600 mb-4">
                  {advantage.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📈 Datos que te harán tomar acción:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "70%", label: "de compradores investiga en internet antes de comprar" },
                  { value: "80%", label: "más probable que compre después de interactuar en redes" },
                  { value: "10x", label: "más efectivo que el marketing tradicional" },
                  { value: "24/7", label: "tu negocio trabaja, incluso cuando duermes" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                    <div className="text-gray-700 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación de servicios */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Qué área quieres potenciar primero?
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {marketingServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                  activeService === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
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
                            {benefit.icon || <FiCheckCircle />}
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

              {/* Ventajas específicas del servicio */}
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🚀 ¿Por qué {activeServiceData.title.split(' ')[0]} es IMPRESCINDIBLE para tu negocio?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeServiceData.advantages.map((advantage, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors"
                    >
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <FiCheckCircle className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{advantage}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Caso de éxito */}
                {activeServiceData.caseStudy && (
                  <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaTrophy className="text-yellow-500" />
                      Caso de Éxito Real:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-700 mb-2">
                          <strong>Cliente:</strong> {activeServiceData.caseStudy.client}
                        </p>
                        <p className="text-gray-700 mb-2">
                          <strong>Desafío:</strong> {activeServiceData.caseStudy.challenge}
                        </p>
                        <p className="text-gray-700">
                          <strong>Solución:</strong> {activeServiceData.caseStudy.solution}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">Resultados Obtenidos:</h5>
                        <ul className="space-y-2">
                          {activeServiceData.caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <FiCheckCircle className="text-green-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Paquetes de precios */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Paquetes para {activeServiceData.title.split(' ')[0]}
                  </h3>
                  <p className="text-gray-600">
                    Inversión con retorno garantizado. Elige según tus objetivos y presupuesto.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {activeServiceData.packages.map((pkg, idx) => (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                        pkg.popular
                          ? 'border-purple-500 shadow-xl scale-[1.02] bg-gradient-to-b from-purple-50 to-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                            MÁS RENTABLE
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
                            <FiCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handlePlanSelect(pkg.name)}
                        className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 hover:shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <FiTarget />
                        Quiero este paquete
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center text-sm text-gray-600">
                  <p>💡 <strong>Recuerda:</strong> Esto no es un gasto, es una inversión. 
                  El paquete más popular genera en promedio 5x lo que cuesta en nuevos negocios.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ sobre beneficios */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Todavía tienes dudas? <span className="text-purple-600">Te las aclaramos</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preguntas que hacen nuestros clientes antes de contratar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqBenefits.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  <FiSearch className="text-purple-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Implementación */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Así de <span className="text-purple-600">Simple</span> es Trabajar con Nosotros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un proceso transparente donde tú solo disfrutas los resultados
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 
                          bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2" />
            
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
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 
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
            <h3 className="text-2xl font-bold mb-8">Tu tranquilidad, nuestras garantías</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiCheckCircle className="text-3xl text-green-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Resultados Medibles</h4>
                <p className="text-gray-300 text-center">Sabrás exactamente cuánto ganas por cada dólar invertido.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiClock className="text-3xl text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Flexibilidad Total</h4>
                <p className="text-gray-300 text-center">Sin contratos forzosos. Cancelas cuando quieras.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                <FiDollarSign className="text-3xl text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">ROI Garantizado</h4>
                <p className="text-gray-300 text-center">Si no generamos resultados, no merecemos tu inversión.</p>
              </div>
            </div>
            <div className="mt-12 text-gray-400 text-sm">
              <p>💡 <strong>Dato importante:</strong> El 86% de nuestros clientes renueva su contrato 
              porque ven resultados reales en sus ventas.</p>
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