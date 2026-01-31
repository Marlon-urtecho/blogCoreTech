"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, FiClock, FiDollarSign, FiZap, 
  FiUsers, FiShield, FiTrendingUp, FiCode,
  FiDatabase, FiCloud, FiMessageSquare, 
  FiEye, FiGitBranch, FiBarChart2, FiLayers,
  FiDownload, FiCalendar, FiHeadphones,
  FiCpu, FiGlobe, FiPackage, FiTool,
  FiMail, FiPhone, FiMessageCircle, FiInfo
} from 'react-icons/fi';
import { 
  FaRobot, FaBrain, FaMicrochip, 
  FaChartLine, FaAws, FaGoogle,
  FaMicrosoft, FaPython, FaNodeJs,
  FaReact, FaDocker, FaServer,
  FaWhatsapp
} from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai, SiN8N } from 'react-icons/si';

const IAProposalsPage = () => {
  const [activeService, setActiveService] = useState('crm-ia');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services = [
    {
      id: 'crm-ia',
      category: 'CRM & Automatización',
      title: 'CRM Inteligente con IA Embebida',
      subtitle: 'Transforma tu CRM en un asistente predictivo',
      icon: <FaBrain className="text-4xl" />,
      color: 'from-blue-500 to-cyan-400',
      
      overview: {
        description: 'Integración de modelos de IA directamente en tu CRM para análisis predictivo, scoring de leads y automatización inteligente de procesos comerciales.',
        target: 'Empresas de ventas, retail, servicios profesionales',
        timeToValue: '2-3 semanas',
        successRate: '95%'
      },

      pricing: {
        packages: [
          {
            name: 'Starter',
            price: '$3,500/mes',
            features: [
              'Hasta 5 usuarios',
              'Predicción básica de ventas',
              'Scoring de leads automatizado',
              'Soporte básico',
              'Integración con 3 sistemas'
            ],
            bestFor: 'Pequeñas empresas'
          },
          {
            name: 'Professional',
            price: '$7,500/mes',
            features: [
              'Hasta 25 usuarios',
              'Análisis predictivo avanzado',
              'Automatización completa de workflows',
              'Soporte prioritario 12/5',
              'Integración con 10 sistemas',
              'Dashboards personalizados'
            ],
            bestFor: 'Empresas en crecimiento',
            popular: true
          },
          {
            name: 'Enterprise',
            price: 'Personalizado',
            features: [
              'Usuarios ilimitados',
              'IA personalizada por departamento',
              'Soporte 24/7 dedicado',
              'Integración con todos tus sistemas',
              'Custom development',
              'ROI garantizado en contrato'
            ],
            bestFor: 'Corporaciones'
          }
        ]
      },

      technologies: {
        core: ['TensorFlow', 'Scikit-learn', 'XGBoost', 'Custom ML Models'],
        integration: ['Salesforce API', 'HubSpot API', 'Microsoft Dynamics', 'REST APIs'],
        infrastructure: ['AWS SageMaker', 'Google AI Platform', 'Docker', 'Kubernetes']
      },

      timeline: {
        phases: [
          { week: '1-2', task: 'Análisis y configuración inicial', status: 'Implementación' },
          { week: '3-4', task: 'Entrenamiento de modelos y pruebas', status: 'Desarrollo' },
          { week: '5-6', task: 'Integración y capacitación', status: 'Entrega' },
          { week: '7-8', task: 'Optimización y soporte', status: 'Soporte' }
        ]
      },

      servicesIncluded: [
        'Análisis inicial de procesos',
        'Desarrollo de modelos personalizados',
        'Integración completa con CRM',
        'Capacitación de equipo',
        'Soporte técnico 6 meses',
        'Reportes mensuales de desempeño',
        'Actualizaciones gratuitas por 1 año'
      ],

      benefits: [
        {
          title: 'Aumento en Conversiones',
          value: '40-60%',
          description: 'Mejora en tasa de conversión de leads a clientes',
          icon: <FiTrendingUp />
        },
        {
          title: 'Reducción de Tiempos',
          value: '70%',
          description: 'Menos tiempo en procesos manuales de seguimiento',
          icon: <FiClock />
        },
        {
          title: 'ROI Promedio',
          value: '300%',
          description: 'Retorno de inversión en primeros 6 meses',
          icon: <FiDollarSign />
        },
        {
          title: 'Satisfacción Cliente',
          value: '4.8/5',
          description: 'Calificación promedio de usuarios',
          icon: <FiUsers />
        }
      ],

      caseStudy: {
        client: 'RetailChain Corp',
        challenge: 'Procesos manuales de seguimiento de leads, baja conversión',
        solution: 'Implementación de CRM Inteligente con IA',
        results: [
          'Aumento del 45% en ventas',
          'Reducción del 60% en tiempo de gestión',
          'ROI del 320% en 5 meses'
        ]
      }
    },

    {
      id: 'chatbots-avanzados',
      category: 'Atención al Cliente',
      title: 'Chatbots Conversacionales Avanzados',
      subtitle: 'Atención 24/7 con inteligencia humana',
      icon: <FaRobot className="text-4xl" />,
      color: 'from-purple-500 to-pink-400',
      
      overview: {
        description: 'Chatbots con NLP avanzado, contexto conversacional profundo y capacidad de aprendizaje continuo para atención al cliente automatizada.',
        target: 'Servicio al cliente, soporte técnico, ventas',
        timeToValue: '1-2 semanas',
        successRate: '90%'
      },

      pricing: {
        packages: [
          {
            name: 'Básico',
            price: '$1,500/mes',
            features: [
              'Hasta 1,000 conversaciones/mes',
              '1 canal (web o WhatsApp)',
              'Respuestas predefinidas',
              'Soporte básico',
              'Dashboard básico'
            ],
            bestFor: 'Startups'
          },
          {
            name: 'Avanzado',
            price: '$4,500/mes',
            features: [
              'Hasta 10,000 conversaciones/mes',
              '3 canales simultáneos',
              'NLP avanzado con contexto',
              'Integración con CRM',
              'Soporte prioritario',
              'Análisis de sentimientos'
            ],
            bestFor: 'Empresas medianas',
            popular: true
          },
          {
            name: 'Enterprise',
            price: '$8,500/mes',
            features: [
              'Conversaciones ilimitadas',
              'Todos los canales',
              'Aprendizaje automático',
              'Transferencia inteligente a agentes',
              'Soporte 24/7 dedicado',
              'Custom development'
            ],
            bestFor: 'Grandes empresas'
          }
        ]
      },

      technologies: {
        core: ['GPT-4', 'Dialogflow', 'Rasa', 'Custom NLP Models'],
        channels: ['WhatsApp Business', 'Facebook Messenger', 'Web Chat', 'Telegram', 'SMS'],
        analytics: ['Google Analytics', 'Custom Dashboards', 'Sentiment Analysis']
      },

      timeline: {
        phases: [
          { week: '1', task: 'Configuración y entrenamiento inicial', status: 'Setup' },
          { week: '2', task: 'Integración con canales', status: 'Integración' },
          { week: '3', task: 'Pruebas y ajustes', status: 'Testing' },
          { week: '4', task: 'Lanzamiento y monitoreo', status: 'Live' }
        ]
      },

      servicesIncluded: [
        'Configuración inicial del bot',
        'Entrenamiento con datos de la empresa',
        'Integración con canales seleccionados',
        'Capacitación del equipo',
        'Soporte técnico 24/7',
        'Reportes de desempeño semanales',
        'Actualizaciones mensuales'
      ],

      benefits: [
        {
          title: 'Atención 24/7',
          value: '100%',
          description: 'Cobertura total sin costos adicionales',
          icon: <FiClock />
        },
        {
          title: 'Reducción Costos',
          value: '80%',
          description: 'Menor necesidad de agentes humanos',
          icon: <FiDollarSign />
        },
        {
          title: 'Satisfacción',
          value: '4.7/5',
          description: 'Calificación de usuarios del servicio',
          icon: <FiUsers />
        },
        {
          title: 'Respuesta Inmediata',
          value: '< 2s',
          description: 'Tiempo promedio de respuesta',
          icon: <FiZap />
        }
      ],

      caseStudy: {
        client: 'Banco Digital Plus',
        challenge: 'Alto volumen de consultas básicas, tiempos de espera largos',
        solution: 'Chatbot avanzado multicanal',
        results: [
          'Reducción del 75% en carga de agentes',
          'Tiempos de espera de 10 min a 10 seg',
          'Satisfacción cliente aumentó 35%'
        ]
      }
    },

    {
      id: 'vision-ia',
      category: 'Operaciones & Producción',
      title: 'Visión por Computadora Empresarial',
      subtitle: 'Ojos inteligentes para tu operación',
      icon: <FiEye className="text-4xl" />,
      color: 'from-green-500 to-emerald-400',
      
      overview: {
        description: 'Sistemas de visión artificial para control de calidad, seguridad, inventario y análisis de comportamiento en tiempo real.',
        target: 'Manufactura, retail, logística, seguridad',
        timeToValue: '4-6 semanas',
        successRate: '98%'
      },

      pricing: {
        packages: [
          {
            name: 'Control Calidad',
            price: '$6,000/mes',
            features: [
              'Detección de defectos en productos',
              'Hasta 5 cámaras simultáneas',
              'Análisis en tiempo real',
              'Alertas automáticas',
              'Dashboard básico'
            ],
            bestFor: 'Manufactura pequeña'
          },
          {
            name: 'Seguridad Avanzada',
            price: '$12,000/mes',
            features: [
              'Reconocimiento facial',
              'Detección de comportamientos sospechosos',
              'Hasta 20 cámaras',
              'Integración con sistemas de seguridad',
              'Soporte prioritario'
            ],
            bestFor: 'Empresas con alto riesgo',
            popular: true
          },
          {
            name: 'Operaciones Completa',
            price: 'Desde $25,000/mes',
            features: [
              'Solución end-to-end',
              'Control de calidad + seguridad + inventario',
              'Cámaras ilimitadas',
              'Custom AI models',
              'Soporte 24/7 dedicado',
              'Hardware incluido'
            ],
            bestFor: 'Grandes operaciones'
          }
        ]
      },

      technologies: {
        core: ['OpenCV', 'YOLOv8', 'TensorFlow', 'PyTorch'],
        hardware: ['NVIDIA Jetson', 'IP Cameras', 'Edge Devices', 'Cloud GPUs'],
        deployment: ['AWS IoT', 'Azure Edge', 'On-premise Servers']
      },

      timeline: {
        phases: [
          { week: '1-2', task: 'Evaluación de infraestructura', status: 'Análisis' },
          { week: '3-4', task: 'Desarrollo de modelos', status: 'Desarrollo' },
          { week: '5-6', task: 'Implementación hardware/software', status: 'Implementación' },
          { week: '7-8', task: 'Pruebas y optimización', status: 'Optimización' }
        ]
      },

      servicesIncluded: [
        'Evaluación de infraestructura',
        'Desarrollo de modelos personalizados',
        'Instalación y configuración de hardware',
        'Capacitación del personal',
        'Soporte técnico 24/7',
        'Mantenimiento preventivo',
        'Actualizaciones de modelos'
      ],

      benefits: [
        {
          title: 'Precisión',
          value: '99.8%',
          description: 'En detección de defectos',
          icon: <FiCheck />
        },
        {
          title: 'Reducción Errores',
          value: '90%',
          description: 'En control de calidad manual',
          icon: <FiShield />
        },
        {
          title: 'Ahorro',
          value: '65%',
          description: 'En costos de inspección',
          icon: <FiDollarSign />
        },
        {
          title: 'Velocidad',
          value: '10x',
          description: 'Más rápido que inspección humana',
          icon: <FiZap />
        }
      ],

      caseStudy: {
        client: 'AutoParts Manufacturing',
        challenge: 'Control de calidad manual lento y propenso a errores',
        solution: 'Sistema de visión artificial para inspección',
        results: [
          'Reducción del 95% en defectos no detectados',
          'Aumento del 300% en velocidad de inspección',
          'ROI del 400% en 4 meses'
        ]
      }
    },

    {
      id: 'automatizacion-flujos',
      category: 'Productividad',
      title: 'Automatización de Flujos de Trabajo',
      subtitle: 'Conecta todas tus aplicaciones con IA',
      icon: <SiN8N className="text-4xl" />,
      color: 'from-orange-500 to-yellow-400',
      
      overview: {
        description: 'Orquestación inteligente de procesos empresariales conectando 500+ aplicaciones con toma de decisiones automatizada basada en IA.',
        target: 'Todas las empresas con múltiples sistemas',
        timeToValue: '3-4 semanas',
        successRate: '92%'
      },

      pricing: {
        packages: [
          {
            name: 'Departamental',
            price: '$2,500/mes',
            features: [
              'Hasta 10 workflows',
              '5 aplicaciones conectadas',
              'Automatización básica',
              'Soporte básico',
              'Dashboard simple'
            ],
            bestFor: 'Un departamento'
          },
          {
            name: 'Empresarial',
            price: '$8,500/mes',
            features: [
              'Workflows ilimitados',
              '50 aplicaciones conectadas',
              'Toma de decisiones con IA',
              'Soporte prioritario 24/7',
              'Dashboards avanzados',
              'API management'
            ],
            bestFor: 'Empresa completa',
            popular: true
          },
          {
            name: 'Corporativo',
            price: '$15,000/mes',
            features: [
              'Todo en Empresarial +',
              'Custom development',
              'Integración con sistemas legacy',
              'Soporte dedicado onsite',
              'ROI garantizado',
              'Training completo'
            ],
            bestFor: 'Corporaciones grandes'
          }
        ]
      },

      technologies: {
        platform: ['n8n Pro', 'Zapier Enterprise', 'Custom Automation Engine'],
        integrations: ['REST APIs', 'Webhooks', 'Database Connections', 'Legacy Systems'],
        ai: ['Decision Trees', 'ML Models', 'Natural Language Processing']
      },

      timeline: {
        phases: [
          { week: '1', task: 'Mapeo de procesos actuales', status: 'Análisis' },
          { week: '2-3', task: 'Desarrollo de workflows', status: 'Desarrollo' },
          { week: '4', task: 'Implementación y testing', status: 'Implementación' },
          { week: '5-6', task: 'Optimización y escalado', status: 'Optimización' }
        ]
      },

      servicesIncluded: [
        'Análisis completo de procesos',
        'Desarrollo de workflows personalizados',
        'Integración con todas tus aplicaciones',
        'Capacitación del equipo',
        'Soporte técnico ilimitado',
        'Monitoreo 24/7',
        'Optimización continua'
      ],

      benefits: [
        {
          title: 'Reducción Manual',
          value: '80%',
          description: 'De procesos manuales',
          icon: <FiUsers />
        },
        {
          title: 'Velocidad',
          value: '15x',
          description: 'Más rápido que procesos manuales',
          icon: <FiZap />
        },
        {
          title: 'Error Cero',
          value: '100%',
          description: 'En procesos automatizados',
          icon: <FiCheck />
        },
        {
          title: 'ROI',
          value: '6 meses',
          description: 'Tiempo promedio para ROI',
          icon: <FiTrendingUp />
        }
      ],

      caseStudy: {
        client: 'Tech Services Inc',
        challenge: '15 sistemas desconectados, procesos manuales repetitivos',
        solution: 'Automatización completa de flujos de trabajo',
        results: [
          'Eliminación del 70% de tareas manuales',
          'Ahorro de $250,000 anuales en salarios',
          'ROI del 450% en 5 meses'
        ]
      }
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService) || services[0];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(`${activeServiceData.title} - ${planName}`);
    setShowContactForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    if (!contactMethod) {
      alert('Por favor selecciona un método de contacto preferido');
      return;
    }

    // Aquí normalmente enviarías los datos a tu backend
    console.log('Solicitud recibida:', {
      plan: selectedPlan,
      contactMethod,
      ...contactInfo
    });

    // Mensaje de confirmación
    alert(`¡Gracias ${contactInfo.name}!\n\nHemos recibido tu solicitud para:\n${selectedPlan}\n\nTe contactaremos por ${getContactMethodName()} en las próximas 24 horas.`);
    
    // Resetear formulario
    setShowContactForm(false);
    setSelectedPlan('');
    setContactMethod('');
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const getContactMethodName = () => {
    switch(contactMethod) {
      case 'whatsapp': return 'WhatsApp';
      case 'email': return 'Email';
      case 'llamada': return 'Llamada telefónica';
      case 'videollamada': return 'Videollamada';
      default: return 'el método seleccionado';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluciones de IA Empresarial
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Propuestas completas con tecnologías, precios, tiempos y beneficios claros
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                <FiCheck className="text-green-500" />
                <span className="font-semibold">ROI Garantizado en Todos Nuestros Servicios</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Contacto */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Solicitar Información</h3>
                  <button
                    onClick={() => setShowContactForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <p className="font-semibold text-blue-800 text-center">{selectedPlan}</p>
                </div>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      ¿Cómo prefieres que te contactemos? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp', color: 'green' },
                        { id: 'email', icon: FiMail, label: 'Email', color: 'blue' },
                        { id: 'llamada', icon: FiPhone, label: 'Llamada', color: 'purple' },
                        { id: 'videollamada', icon: FiMessageCircle, label: 'Videollamada', color: 'red' }
                      ].map((method) => {
                        const Icon = method.icon;
                        return (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setContactMethod(method.id)}
                            className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                              contactMethod === method.id
                                ? `border-${method.color}-500 bg-${method.color}-50`
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Icon className={`text-2xl mb-2 ${
                              contactMethod === method.id ? `text-${method.color}-600` : 'text-gray-400'
                            }`} />
                            <span className="text-sm font-medium">{method.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactInfo.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+54 9 11 1234-5678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactInfo.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje adicional
                    </label>
                    <textarea
                      name="message"
                      value={contactInfo.message}
                      onChange={handleInputChange}
                      placeholder="¿Alguna pregunta específica o requerimiento adicional?"
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!contactMethod}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      contactMethod 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:from-green-600 hover:to-emerald-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Enviar Solicitud
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    Te contactaremos en menos de 24 horas por tu método preferido
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Servicios */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Nuestros Servicios</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeService === service.id
                        ? `bg-gradient-to-r ${service.color} text-white shadow-md`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        activeService === service.id ? 'bg-white/20' : 'bg-white'
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm opacity-90">{service.category}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Nuestros Números</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Clientes Satisfechos</span>
                    <span className="font-bold text-green-600">250+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tasa de Éxito</span>
                    <span className="font-bold text-blue-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Soporte 24/7</span>
                    <span className="font-bold text-purple-600">100%</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => {
                  setSelectedPlan('Consulta Personalizada');
                  setShowContactForm(true);
                }}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <FiCalendar />
                Agenda Consulta Gratuita
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Hero Card */}
                <div className={`bg-gradient-to-r ${activeServiceData.color} rounded-3xl p-8 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          {activeServiceData.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{activeServiceData.title}</h2>
                          <p className="text-white/90">{activeServiceData.subtitle}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-sm">Tiempo a Valor</div>
                          <div className="font-bold">{activeServiceData.overview.timeToValue}</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-sm">Tasa de Éxito</div>
                          <div className="font-bold">{activeServiceData.overview.successRate}</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-sm">Para</div>
                          <div className="font-bold">{activeServiceData.overview.target}</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-sm">Categoría</div>
                          <div className="font-bold">{activeServiceData.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Descripción del Servicio</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {activeServiceData.overview.description}
                  </p>
                  
                  {/* Services Included */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiPackage className="text-blue-500" />
                      Servicios Incluidos
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeServiceData.servicesIncluded.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <FiCheck className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiCpu className="text-purple-500" />
                      Tecnologías Utilizadas
                    </h4>
                    <div className="space-y-6">
                      {Object.entries(activeServiceData.technologies).map(([category, techs]) => (
                        <div key={category}>
                          <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing - CORREGIDO */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <FiDollarSign className="text-green-500" />
                    Planes y Precios
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {activeServiceData.pricing.packages.map((pkg, idx) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${
                          pkg.popular
                            ? 'border-blue-500 shadow-xl scale-[1.02]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {/* Badge "Más Popular" CORREGIDO */}
                        {pkg.popular && (
                          <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                              MÁS POPULAR
                            </div>
                          </div>
                        )}
                        
                        <div className={`text-center mb-6 ${pkg.popular ? 'pt-2' : ''}`}>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                          <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                          <div className="text-gray-600 mt-1">{pkg.bestFor}</div>
                        </div>
                        
                        <div className="space-y-3 mb-8">
                          {pkg.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <FiCheck className="text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Botón con llamada a acción MEJORADA */}
                        <button 
                          onClick={() => handlePlanSelect(pkg.name)}
                          className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                            pkg.popular
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:from-blue-600 hover:to-cyan-500'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <FiCalendar className="text-lg" />
                          Solicitar Plan
                        </button>
                        
                        <p className="text-center text-xs text-gray-500 mt-3">
                          Te contactamos en 24 horas
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Nota de Precios */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <FiInfo className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Nota Importante</h4>
                        <p className="text-sm text-gray-600">
                          Todos los precios incluyen: Implementación completa, capacitación del equipo, 
                          soporte técnico y mantenimiento. No hay costos ocultos. 
                          <span className="font-semibold text-green-600"> ROI garantizado en contrato.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline & Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Timeline */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <FiClock className="text-orange-500" />
                      Cronograma de Implementación
                    </h3>
                    <div className="space-y-6">
                      {activeServiceData.timeline.phases.map((phase, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            phase.status === 'Implementación' ? 'bg-blue-100 text-blue-600' :
                            phase.status === 'Desarrollo' ? 'bg-purple-100 text-purple-600' :
                            phase.status === 'Entrega' ? 'bg-green-100 text-green-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            <span className="font-bold">{phase.week}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{phase.task}</h4>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                              phase.status === 'Implementación' ? 'bg-blue-100 text-blue-800' :
                              phase.status === 'Desarrollo' ? 'bg-purple-100 text-purple-800' :
                              phase.status === 'Entrega' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {phase.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <FiTrendingUp className="text-green-500" />
                      Beneficios Comprobados
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {activeServiceData.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${
                              idx === 0 ? 'bg-blue-100 text-blue-600' :
                              idx === 1 ? 'bg-green-100 text-green-600' :
                              idx === 2 ? 'bg-purple-100 text-purple-600' :
                              'bg-orange-100 text-orange-600'
                            }`}>
                              {benefit.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{benefit.value}</div>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Caso de Éxito Real</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">{activeServiceData.caseStudy.client}</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-semibold text-blue-300 mb-1">Desafío:</div>
                          <p className="text-gray-300">{activeServiceData.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <div className="font-semibold text-green-300 mb-1">Nuestra Solución:</div>
                          <p className="text-gray-300">{activeServiceData.caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">Resultados Medibles</h4>
                      <div className="space-y-3">
                        {activeServiceData.caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                            <FiTrendingUp className="text-green-300" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sección de Contacto Directo */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-lg p-8 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                      Cuéntanos sobre tus necesidades específicas y crearemos una propuesta a medida
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <button 
                        onClick={() => {
                          setSelectedPlan('Consulta Personalizada');
                          setShowContactForm(true);
                        }}
                        className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md"
                      >
                        <FiMessageCircle />
                        Solicitar Consulta
                      </button>
                      <a 
                        href="https://wa.me/5491112345678?text=Hola,%20me%20interesa%20saber%20más%20sobre%20soluciones%20de%20IA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md"
                      >
                        <FaWhatsapp />
                        WhatsApp Directo
                      </a>
                      <a 
                        href="tel:+5491112345678"
                        className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all"
                      >
                        <FiPhone />
                        Llamar Ahora
                      </a>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <FiClock className="text-yellow-300" />
                        <span>Respuesta en menos de 2 horas</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <FiShield className="text-green-300" />
                        <span>Soporte 24/7 incluido</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <FiCheck className="text-white" />
                        <span>Propuesta gratuita</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAProposalsPage;