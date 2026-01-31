"use client";

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    FiCode,
    FiSmartphone,
    FiTrendingUp
} from "react-icons/fi";


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Desarrollo Web", href: "/servicios/web", icon: <FiCode /> },
    { name: "Apps Móviles", href: "/servicios/mobile", icon: <FiSmartphone /> },
    { name: "Marketing Digital", href: "/servicios/marketing", icon: <FiTrendingUp /> },
    { name: "Consultoría IT", href: "/servicios/consultoria", icon: <FiCode /> },
    { name: "Transformación Digital", href: "/servicios/transformacion", icon: <FiCode /> },
  ];

  const isServicePage = pathname !== "/servicios";

  return (
    <div className="services-layout">
       <Navbar /> 

      {/* Main Content */}
      <main className="min-h-screen bg-white">
        {children}
      </main>

      {/* Sidebar de servicios (solo en página principal) */}
      {!isServicePage && (
        <aside className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Explora nuestros servicios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="p-2 bg-gray-100 group-hover:bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-primary">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      <Footer/>
    </div>
  );
}