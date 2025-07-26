"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MissionVisionCard } from "@/components/mission-vision-card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ProfessionalHero } from "@/components/professional-hero"
import { VideoSection } from "@/components/video-section"
import {  ModernStats } from "@/components/enhanced-stats"
import { Zap, Shield, Cog, Fuel, Settings, Menu, X, CheckCircle, Mail, Phone, MapPin, Target, Eye, Facebook, Linkedin, AtSign, ChevronRight } from "lucide-react"
import { type Locale, getTranslation } from "@/lib/i18n"

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = getTranslation(locale)

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
  ]

  const missionPoints = [t.mission1, t.mission2, t.mission3, t.mission4]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="group relative bg-white shadow-xl sticky top-0 z-50 transition-all duration-500">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 via-transparent to-[#00955e]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00955e] to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group/logo">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-xl blur-lg opacity-0 group-hover/logo:opacity-20 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-[#00955e] to-[#007a4e] p-2 rounded-xl group-hover/logo:scale-105 transition-all duration-300">
                  <Image
                    src="/techsafe-logo.svg"
                    alt="TechSafe Solutions"
                    width={150}
                    height={50}
                    className="h-8 w-auto brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { href: "#home", label: t.home },
                { href: "#services", label: t.services },
                { href: "#about", label: t.about },
                { href: "#contact", label: t.contact }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/link relative text-gray-700 hover:text-[#00955e] transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-[#00955e]/5"
                >
                  {item.label}
                  {/* Enhanced underline effect */}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00955e] to-[#007a4e] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/10 to-[#007a4e]/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
              </div>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative group/mobile hover:bg-[#00955e]/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/20 to-[#007a4e]/20 rounded-lg opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
                {mobileMenuOpen ? <X className="h-6 w-6 text-[#00955e] relative z-10" /> : <Menu className="h-6 w-6 text-[#00955e] relative z-10" />}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-100 bg-gradient-to-r from-slate-50/50 to-white backdrop-blur-sm">
              <nav className="flex flex-col space-y-2">
                {[
                  { href: "#home", label: t.home },
                  { href: "#services", label: t.services },
                  { href: "#about", label: t.about },
                  { href: "#contact", label: t.contact }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/mobile-link relative text-gray-700 hover:text-[#00955e] transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-[#00955e]/10 flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover/mobile-link:opacity-100 transform translate-x-1 group-hover/mobile-link:translate-x-0 transition-all duration-300" />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00955e] to-[#007a4e] scale-y-0 group-hover/mobile-link:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="home">
        <ProfessionalHero locale={locale} />
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00955e]/3 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.servicesTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                  locale={locale}
                  seeDetailsText={t.seeDetails}
                  contractServiceText={t.contractService}
                  whatsappMessage={t.whatsappMessage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00955e] rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#00955e] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#00955e] rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.aboutTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.aboutText}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-2xl transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-[#00955e]/20 transition-all duration-500"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 group-hover:from-[#00955e] group-hover:to-[#007a4e] transition-all duration-500">
                {t.missionTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPoints.map((point, index) => (
                  <div key={index} className="group/item flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full blur-lg opacity-0 group-hover/item:opacity-30 transition-opacity duration-500 -z-10"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">{point}</span>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-full transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00955e]/3 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative">
                {t.contactTitle}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.contactSubtitle}</p>
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

      {/* Enhanced Footer */}
      <footer className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 via-transparent to-[#007a4e]/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00955e] to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-full transform translate-x-32 -translate-y-32 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00955e]/5 to-transparent rounded-full transform -translate-x-48 translate-y-48 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Enhanced Logo Section */}
            <div className="group/footer-logo">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-xl blur-lg opacity-0 group-hover/footer-logo:opacity-30 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-[#00955e] to-[#007a4e] p-3 rounded-xl inline-block group-hover/footer-logo:scale-105 transition-all duration-300">
                  <Image
                    src="/techsafe-logo.svg"
                    alt="TechSafe Solutions"
                    width={150}
                    height={50}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 group-hover/footer-logo:text-gray-200 transition-colors duration-300">
                {t.footerText}
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: AtSign, label: "Email" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href="#"
                    className="group/social relative w-12 h-12 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="h-5 w-5 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full blur-lg opacity-0 group-hover/social:opacity-50 transition-opacity duration-500 scale-110"></div>
                    <div className="absolute inset-0 border-2 border-[#00955e]/30 rounded-full scale-110 opacity-0 group-hover/social:opacity-100 group-hover/social:scale-125 transition-all duration-500"></div>
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Services Section */}
            <div className="group/services">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/services:from-[#00955e] group-hover/services:to-[#007a4e] transition-all duration-500">
                {t.services}
              </h3>
              <ul className="space-y-3">
                {[
                  t.electricalInstallation,
                  t.fireSafety,
                  t.industrialAutomation,
                  t.oilGas,
                  t.electricalManufacturing
                ].map((service, index) => (
                  <li key={index} className="group/service-item">
                    <a 
                      href="#services"
                      className="text-gray-300 hover:text-[#00955e] transition-all duration-300 cursor-pointer relative flex items-center group-hover/service-item:translate-x-2"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover/service-item:opacity-100 transition-all duration-300 text-[#00955e]" />
                      <span className="relative">
                        {service}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#00955e] to-[#007a4e] group-hover/service-item:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Section */}
            <div className="group/contact">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/contact:from-[#00955e] group-hover/contact:to-[#007a4e] transition-all duration-500">
                {locale === "pt" ? "Contato" : locale === "fr" ? "Contact" : locale === "it" ? "Contatto" : "Contact"}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "info@techsafe-solutions.com", href: "mailto:info@techsafe-solutions.com" },
                  { icon: Phone, text: "+244 951 588 735", href: "tel:+244951588735" },
                  { icon: MapPin, text: "Luanda, Angola", href: "#" }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group/contact-item flex items-center gap-3 text-gray-300 hover:text-[#00955e] transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00955e]/20 to-[#007a4e]/20 rounded-lg flex items-center justify-center group-hover/contact-item:scale-110 transition-all duration-300">
                        <contact.icon className="h-5 w-5 text-[#00955e]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-lg opacity-0 group-hover/contact-item:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <span className="group-hover/contact-item:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-px mb-8"></div>
            <div className="pt-8 text-center">
              <div className="inline-block group/copyright">
                <p className="text-gray-400 group-hover/copyright:text-gray-300 transition-colors duration-300">
                  &copy; 2024 TechSafe Solutions Sen. {t.allRightsReserved}
                </p>
                <div className="w-0 h-px bg-gradient-to-r from-[#00955e] to-[#007a4e] group-hover/copyright:w-full transition-all duration-500 mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}