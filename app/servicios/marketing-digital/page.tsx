"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiTarget, FiBarChart2, FiUsers, FiSearch, FiMessageCircle } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle, FaChartLine } from "react-icons/fa";

export default function MarketingDigitalPage() {
  const services = [
    {
      category: "SEO & Posicionamiento",
      icon: <FiSearch className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      items: [
        { title: "SEO On-Page", desc: "Optimización técnica y de contenido" },
        { title: "SEO Off-Page", desc: "Link building y autoridad" },
        { title: "SEO Local", desc: "Posicionamiento geográfico" },
        { title: "SEO Técnico", desc: "Performance y estructura" }
      ]
    },
    {
      category: "Redes Sociales",
      icon: <FiUsers className="text-3xl" />,
      color: "from-blue-500 to-cyan-400",
      items: [
        { title: "Gestión de Comunidad", desc: "Engagement y moderación" },
        { title: "Contenido Visual", desc: "Reels, Stories, Posts" },
        { title: "Campañas Pagadas", desc: "Facebook/Instagram Ads" },
        { title: "Influencer Marketing", desc: "Colaboraciones estratégicas" }
      ]
    },
    {
      category: "Content Marketing",
      icon: <FiMessageCircle className="text-3xl" />,
      color: "from-green-500 to-emerald-400",
      items: [
        { title: "Blog Estratégico", desc: "Contenido de valor" },
        { title: "Email Marketing", desc: "Newsletters automatizadas" },
        { title: "Video Marketing", desc: "YouTube y TikTok" },
        { title: "E-books & Guías", desc: "Lead generation" }
      ]
    },
    {
      category: "Publicidad Digital",
      icon: <FiTarget className="text-3xl" />,
      color: "from-orange-500 to-yellow-400",
      items: [
        { title: "Google Ads", desc: "Búsqueda y Display" },
        { title: "Remarketing", desc: "Conversión de abandonos" },
        { title: "LinkedIn Ads", desc: "Marketing B2B" },
        { title: "Programmatic", desc: "Compra automatizada" }
      ]
    }
  ];

  const metrics = [
    { value: "300%", label: "ROI Promedio", desc: "Retorno de inversión" },
    { value: "24/7", label: "Monitoreo", desc: "Análisis continuo" },
    { value: "89%", label: "Satisfacción", desc: "Clientes felices" },
    { value: "15 días", label: "Resultados", desc: "Tiempo promedio" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero con Datos */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-pink-800 text-white py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8"
            >
              <FiTrendingUp className="text-2xl" />
              <span className="font-semibold">MARKETING DIGITAL</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Conectamos Marcas con <span className="text-pink-300">Resultados Reales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-purple-200 mb-12"
            >
              Estrategias digitales data-driven que transforman visitantes en clientes 
              y métricas en crecimiento sostenible.
            </motion.p>
          </div>

          {/* Métricas Impactantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-purple-200">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estrategias <span className="text-purple-600">Integrales</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos múltiples disciplinas para maximizar tu impacto digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 
                             hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} 
                               text-white mb-6`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {service.category}
                  </h3>

                  <div className="space-y-4">
                    {service.items.map((item) => (
                      <div key={item.title} className="flex items-start gap-4 p-4 
                                                    bg-gray-50 rounded-xl hover:bg-gray-100 
                                                    transition-colors">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          <FiTrendingUp className="text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Estratégico */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metodología <span className="text-pink-400">Data-Driven</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Un enfoque científico basado en datos y resultados medibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Análisis",
                icon: <FiBarChart2 />,
                desc: "Auditoría completa y análisis competitivo",
                color: "bg-blue-500"
              },
              {
                step: "Estrategia",
                icon: <FiTarget />,
                desc: "Plan personalizado con KPIs claros",
                color: "bg-purple-500"
              },
              {
                step: "Optimización",
                icon: <FaChartLine />,
                desc: "Ajustes continuos basados en datos",
                color: "bg-pink-500"
              }
            ].map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: idx === 1 ? 0 : idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className={`inline-flex p-6 ${stage.color} rounded-full mb-6`}>
                  <div className="text-2xl">{stage.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{stage.step}</h3>
                <p className="text-gray-300">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA con Portafolio */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-12 
                       border-2 border-purple-200 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Listo para escalar tu negocio?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Solicita un análisis gratuito de tu presencia digital y descubre 
                oportunidades de crecimiento específicas para tu industria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 
                             text-white font-semibold rounded-full hover:shadow-xl 
                             transition-all">
                  Análisis Gratuito
                </button>
                <button className="px-8 py-3 bg-white text-purple-600 font-semibold 
                             rounded-full border-2 border-purple-200 hover:border-purple-400 
                             transition-all">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}