"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import {
    FiArrowUp,
    FiFacebook,
    FiGithub,
    FiHeart,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiPhone,
    FiTwitter
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Desarrollo Web", href: "/servicios/web" },
      { name: "Apps Móviles", href: "/servicios/mobile" },
      { name: "Marketing Digital", href: "/servicios/marketing" },
      { name: "Consultoría IT", href: "/servicios/consultoria" },
    ],
    company: [
      { name: "Sobre Nosotros", href: "/nosotros" },
      { name: "Portafolio", href: "/portafolio" },
      { name: "Blog", href: "/blog" },
      { name: "Carreras", href: "/carreras" },
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "/soporte" },
      { name: "FAQ", href: "/faq" },
      { name: "Políticas", href: "/politicas" },
      { name: "Términos", href: "/terminos" },
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://facebook.com/coretech", label: "Facebook" },
    { icon: <FiTwitter />, href: "https://twitter.com/coretech", label: "Twitter" },
    { icon: <FiInstagram />, href: "https://instagram.com/coretech", label: "Instagram" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/company/coretech", label: "LinkedIn" },
    { icon: <FiGithub />, href: "https://github.com/coretech", label: "GitHub" }
  ];

  return (
   <footer className="bg-gradient-to-b from-[#1C3D5B] to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                  <FaCode className="text-2xl text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tighter">CoRe</span>
                  <span className="text-2xl font-bold tracking-tighter text-primary">Tech</span>
                  <p className="text-xs text-gray-400 mt-1">Innovación Digital</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Especialistas en desarrollo web, aplicaciones móviles y marketing digital.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <FiPhone className="text-primary" />
                  <span>+505 8888888</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FiMail className="text-primary" />
                  <span>info@coretech.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <FiMapPin className="text-primary mt-1" />
                  <span>Av. Central <br />Managua, Nicaragua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {currentYear} CoReTech. Todos los derechos reservados.
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
             
            </span>
          </div>

          {/* Links legales */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacidad" className="text-gray-400 hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-400 hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>

          {/* Botón volver arriba */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800 hover:bg-primary rounded-lg transition-colors flex items-center gap-2"
            aria-label="Volver arriba"
          >
            <FiArrowUp />
            <span className="text-sm">Volver arriba</span>
          </motion.button>
        </div>

        {/* Newsletter (opcional) */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-3">Suscríbete a nuestro newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe las últimas noticias y ofertas especiales.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;