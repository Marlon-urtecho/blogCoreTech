"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiShield, FiTarget, FiHelpCircle, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactFormModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Sitio Web Corporativo',
    'E-commerce/Tienda Online',
    'Aplicación Web Personalizada',
    'Marketplace/Plataforma',
    'Sistema de Gestión Interna',
    'No estoy seguro, necesito asesoría'
  ];

  const timelines = [
    'Urgente (1-3 meses)',
    'Próximos 3-6 meses',
    'Planeando para el próximo año',
    'Solo explorando opciones'
  ];

  const budgets = [
    'Menos de $10,000',
    '$10,000 - $30,000',
    '$30,000 - $75,000',
    '$75,000 - $150,000',
    'Más de $150,000',
    'Necesito asesoría presupuestaria'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío a backend
    try {
      // Aquí iría tu llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular éxito
      console.log('Formulario enviado:', {
        plan: selectedPlan,
        ...formData
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reiniciar después de 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Opcional: resetear formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          timeline: '',
          budget: '',
          message: '',
          contactMethod: 'email'
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setIsSubmitting(false);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {isSuccess ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Gracias por tu interés!
              </h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud para <span className="font-semibold">{selectedPlan}</span>. 
                Uno de nuestros especialistas se pondrá en contacto contigo en menos de 24 horas.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-blue-700 font-medium">
                  ¿Necesitas respuesta inmediata?
                </p>
                <a 
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 font-bold mt-2 hover:text-green-700"
                >
                  <FaWhatsapp /> Chatea con nosotros por WhatsApp
                </a>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Solicita Tu Cotización Personalizada</h3>
                  {selectedPlan && (
                    <p className="text-gray-600 mt-1">{selectedPlan}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                  aria-label="Cerrar formulario"
                >
                  &times;
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-6 border border-blue-200">
                <div className="flex items-start gap-3">
                  <FiHelpCircle className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800">
                      Completa este formulario y recibirás una propuesta detallada con:
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full">
                        <FiCheck className="text-green-500" /> Presupuesto claro
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full">
                        <FiCheck className="text-green-500" /> Timeline realista
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full">
                        <FiCheck className="text-green-500" /> Plan de desarrollo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué tipo de proyecto necesitas? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {projectTypes.map((type, idx) => (
                      <label 
                        key={idx} 
                        className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                          formData.projectType === type
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={formData.projectType === type}
                          onChange={handleChange}
                          className="mr-3"
                          required
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline del proyecto *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="">Selecciona un timeline</option>
                      {timelines.map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto aproximado *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="">Selecciona un rango</option>
                      {budgets.map((budget, idx) => (
                        <option key={idx} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu proyecto, objetivos, características principales..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cómo prefieres que te contactemos?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: 'email', icon: FiMail, label: 'Email', color: 'blue' },
                      { value: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp', color: 'green' },
                      { value: 'llamada', icon: FiPhone, label: 'Llamada', color: 'purple' }
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.value}
                          className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${
                            formData.contactMethod === method.value
                              ? `border-${method.color}-500 bg-${method.color}-50`
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.value}
                            checked={formData.contactMethod === method.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon className={`text-lg ${
                            formData.contactMethod === method.value
                              ? `text-${method.color}-600`
                              : 'text-gray-400'
                          }`} />
                          <span className="font-medium">{method.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-3">
                    <FiShield className="inline mr-2 text-blue-500" />
                    Tu información está segura. No compartimos datos con terceros.
                  </p>
                  <p className="text-xs text-gray-500">
                    Al enviar este formulario, aceptas nuestra política de privacidad y recibir información relevante sobre tu proyecto.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando solicitud...
                    </>
                  ) : (
                    <>
                      <FiTarget />
                      Enviar Solicitud y Recibir Propuesta
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactFormModal;