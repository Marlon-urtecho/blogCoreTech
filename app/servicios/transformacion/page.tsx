"use client";

import { motion } from "framer-motion";
import { FaNetworkWired, FaRobot, FaTools } from "react-icons/fa";
import { FiBarChart2, FiCloud, FiDatabase, FiLock, FiRefreshCw, FiUsers } from "react-icons/fi";

export default function TransformacionDigitalPage() {
  const transformationPillars = [
    {
      pillar: "Automatización",
      icon: <FaRobot className="text-3xl" />,
      color: "from-blue-500 to-cyan-400",
      benefits: [
        "Reducción de errores humanos",
        "Aumento de productividad 40%",
        "Procesos 24/7",
        "Escalabilidad inmediata"
      ]
    },
    {
      pillar: "Migración Cloud",
      icon: <FiCloud className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Reducción de costos 30-50%",
        "Escalabilidad elástica",
        "Alta disponibilidad",
        "Actualizaciones automáticas"
      ]
    },
    {
      pillar: "Modernización de Datos",
      icon: <FiDatabase className="text-3xl" />,
      color: "from-green-500 to-emerald-400",
      benefits: [
        "Analítica en tiempo real",
        "Inteligencia empresarial",
        "Gobernanza de datos",
        "Predictibilidad avanzada"
      ]
    },
    {
      pillar: "Colaboración Digital",
      icon: <FiUsers className="text-3xl" />,
      color: "from-orange-500 to-yellow-400",
      benefits: [
        "Trabajo remoto eficiente",
        "Comunicación unificada",
        "Gestión de proyectos ágil",
        "Documentación centralizada"
      ]
    },
    {
      pillar: "Ciberseguridad",
      icon: <FiLock className="text-3xl" />,
      color: "from-red-500 to-rose-400",
      benefits: [
        "Protección multicapa",
        "Cumplimiento normativo",
        "Detección temprana",
        "Respuesta a incidentes"
      ]
    },
    {
      pillar: "Analítica Avanzada",
      icon: <FiBarChart2 className="text-3xl" />,
      color: "from-indigo-500 to-violet-400",
      benefits: [
        "Dashboards interactivos",
        "Machine Learning integrado",
        "ROI medible",
        "Toma de decisiones data-driven"
      ]
    },
    {
      pillar: "Integración de Sistemas",
      icon: <FaNetworkWired className="text-3xl" />,
      color: "from-teal-500 to-blue-400",
      benefits: [
        "Flujos de trabajo unificados",
        "APIs estandarizadas",
        "Legacy modernization",
        "Interoperabilidad total"
      ]
    },
    {
      pillar: "Gestión del Cambio",
      icon: <FaTools className="text-3xl" />,
      color: "from-gray-700 to-gray-500",
      benefits: [
        "Capacitación continua",
        "Cultura digital",
        "Adaptación organizacional",
        "Soporte especializado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformación Digital Integral
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ocho pilares fundamentales para modernizar su empresa y liderar en la era digital
          </p>
        </motion.div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationPillars.map((item, index) => (
            <motion.div
              key={item.pillar}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              {/* Header con icono */}
              <div className={`bg-gradient-to-r ${item.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    {item.icon}
                    <h3 className="text-xl font-bold mt-2">{item.pillar}</h3>
                  </div>
                  <span className="text-white/80 text-sm font-semibold">
                    {index + 1}/8
                  </span>
                </div>
              </div>
              
              {/* Lista de beneficios */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Beneficios Clave
                </h4>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start"
                    >
                      <div className={`bg-gradient-to-r ${item.color} rounded-full p-1 mr-3 mt-1`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Impacto:</span>
                  <span className="text-sm font-semibold text-gray-700">Alto</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 flex items-center">
              <FiRefreshCw className="mr-2" />
              Comenzar Transformación
            </button>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Implementación progresiva con resultados medibles en 90 días
          </p>
        </motion.div>
      </div>
    </div>
  );
}