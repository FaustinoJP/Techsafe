"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { MissionVisionCard } from "@/components/mission-vision-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ProfessionalHero } from "@/components/professional-hero";
import { VideoSection } from "@/components/video-section";
import { ModernStats } from "@/components/enhanced-stats";
import {
  Zap,
  Shield,
  Cog,
  Fuel,
  Settings,
  Menu,
  X,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Target,
  Eye,
  Facebook,
  Linkedin,
  AtSign,
  ChevronRight,
} from "lucide-react";
import { type Locale, getTranslation } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ServiceCard from "@/components/service-card";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getTranslation(locale);

  const services = [
    {
      icon: Zap,
      title: t.electricalInstallation,
      description: t.electricalDesc,
      details: t.electricalDetails,
    },
    {
      icon: Shield,
      title: t.fireSafety,
      description: t.fireDesc,
      details: t.fireDetails,
    },
    {
      icon: Cog,
      title: t.industrialAutomation,
      description: t.automationDesc,
      details: t.automationDetails,
    },
    {
      icon: Fuel,
      title: t.oilGas,
      description: t.oilGasDesc,
      details: t.oilGasDetails,
    },
    {
      icon: Settings,
      title: t.electricalManufacturing,
      description: t.manufacturingDesc,
      details: t.manufacturingDetails,
    },
  ];

  const missionPoints = [t.mission1, t.mission2, t.mission3, t.mission4];

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} setLocale={setLocale} t={t} />

      {/* Hero Section with Carousel */}
      <section id="home">
        <ProfessionalHero locale={locale} />
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff0000]/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff0000]/3 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.servicesTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.servicesSubtitle}
            </p>
          </div>

          <ServiceCard locale={locale} />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#ff0000] rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#ff0000] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#ff0000] rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.aboutTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.aboutText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <MissionVisionCard
              icon={Target}
              title={
                locale === "pt"
                  ? "Nossa Missão"
                  : locale === "fr"
                    ? "Notre Mission"
                    : locale === "it"
                      ? "La Nostra Missione"
                      : "Our Mission"
              }
              description={
                locale === "pt"
                  ? "Oferecer soluções de alta qualidade em eletricidade, segurança contra incêndios e automação industrial, garantindo a satisfação total dos nossos clientes através de serviços especializados e tecnologia de ponta."
                  : locale === "fr"
                    ? "Offrir des solutions de haute qualité en électricité, sécurité incendie et automatisation industrielle, garantissant la satisfaction totale de nos clients grâce à des services spécialisés et une technologie de pointe."
                    : locale === "it"
                      ? "Offrire soluzioni di alta qualità in elettricità, sicurezza antincendio e automazione industriale, garantendo la soddisfazione totale dei nostri clienti attraverso servizi specializzati e tecnologia all'avanguardia."
                      : "To provide high-quality solutions in electricity, fire safety, and industrial automation, ensuring total customer satisfaction through specialized services and cutting-edge technology."
              }
            />
            <MissionVisionCard
              icon={Eye}
              title={
                locale === "pt"
                  ? "Nossa Visão"
                  : locale === "fr"
                    ? "Notre Vision"
                    : locale === "it"
                      ? "La Nostra Visione"
                      : "Our Vision"
              }
              description={
                locale === "pt"
                  ? "Ser referência no setor de soluções industriais na África Ocidental, reconhecida pela excelência técnica, inovação constante e compromisso com a segurança e eficiência dos processos industriais."
                  : locale === "fr"
                    ? "Être une référence dans le secteur des solutions industrielles en Afrique de l'Ouest, reconnue pour l'excellence technique, l'innovation constante et l'engagement envers la sécurité et l'efficacité des processus industriels."
                    : locale === "it"
                      ? "Essere un riferimento nel settore delle soluzioni industriali nell'Africa Occidentale, riconosciuta per l'eccellenza tecnica, l'innovazione costante e l'impegno verso la sicurezza e l'efficienza dei processi industriali."
                      : "To be a reference in the industrial solutions sector in West Africa, recognized for technical excellence, constant innovation, and commitment to the safety and efficiency of industrial processes."
              }
            />
          </div>

          {/* Enhanced Mission Points */}
          <div className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-8 mb-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff0000]/10 to-transparent rounded-2xl transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-[#ff0000]/20 transition-all duration-500"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 group-hover:from-[#9a0436cd] group-hover:to-[#9a0436cd] transition-all duration-500">
                {t.missionTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-full blur-lg opacity-0 group-hover/item:opacity-30 transition-opacity duration-500 -z-10"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <VideoSection locale={locale} />
          <ModernStats locale={locale} />
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#ff0000]/5 to-transparent rounded-full transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#ff0000]/3 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.contactTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ContactForm locale={locale} translations={t} />
            </div>

            {/* Contact Info */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ContactInfo locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} t={t} />
    </div>
  );
}
