"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { type Locale, getTranslation } from "@/lib/i18n"

interface HeroCarouselProps {
  locale: Locale
}

export default function HeroCarousel({ locale }: HeroCarouselProps) {
  const t = getTranslation(locale)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      image: "/images/industrial-plant.jpg",
    },
    {
      title:
        locale === "pt"
          ? "Segurança Contra Incêndios Avançada"
          : locale === "fr"
            ? "Sécurité Incendie Avancée"
            : locale === "it"
              ? "Sicurezza Antincendio Avanzata"
              : "Advanced Fire Safety Systems",
      subtitle:
        locale === "pt"
          ? "Sistemas completos de detecção e supressão de incêndios com tecnologia de ponta e monitoramento 24/7."
          : locale === "fr"
            ? "Systèmes complets de détection et suppression d'incendie avec technologie de pointe et surveillance 24/7."
            : locale === "it"
              ? "Sistemi completi di rilevazione e soppressione incendi con tecnologia all'avanguardia e monitoraggio 24/7."
              : "Complete fire detection and suppression systems with cutting-edge technology and 24/7 monitoring.",
      image: "/images/fire-safety.jpg",
    },
    {
      title:
        locale === "pt"
          ? "Instalações Elétricas Profissionais"
          : locale === "fr"
            ? "Installations Électriques Professionnelles"
            : locale === "it"
              ? "Installazioni Elettriche Professionali"
              : "Professional Electrical Installations",
      subtitle:
        locale === "pt"
          ? "Projetos e instalações elétricas de alta qualidade seguindo rigorosamente as normas internacionais de segurança."
          : locale === "fr"
            ? "Projets et installations électriques de haute qualité suivant rigoureusement les normes internationales de sécurité."
            : locale === "it"
              ? "Progetti e installazioni elettriche di alta qualità seguendo rigorosamente le norme internazionali di sicurezza."
              : "High-quality electrical projects and installations strictly following international safety standards.",
      image: "/images/electrical-installation.jpg",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length, isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-[700px] md:h-[800px] overflow-hidden group">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#00955e]/5 to-transparent rounded-full transform -translate-x-40 translate-y-40"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : index < currentSlide
                ? "opacity-0 scale-105 -translate-x-full"
                : "opacity-0 scale-95 translate-x-full"
          }`}
        >
          {/* Background Image with Enhanced Overlay */}
          <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/10 via-transparent to-[#00955e]/5" />

            {/* Main Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-6xl">
                {/* Enhanced Title with Gradient */}
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mb-2"></div>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#007a4e] to-[#00955e] rounded-full mx-auto opacity-60"></div>
                </div>

                {/* Enhanced Subtitle */}
                <div className="mb-12">
                  <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-200 font-light">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Enhanced CTA Button */}
                <div className="relative inline-block">
                  <Button className="relative bg-gradient-to-r from-[#00955e] to-[#007a4e] hover:from-[#007a4e] hover:to-[#006640] text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,149,94,0.4)] transition-all duration-500 hover:scale-105 group">
                    <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    {t.heroButton}
                  </Button>
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-2xl blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-[#00955e]/20 hover:border-[#00955e]/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-[#00955e]/20 hover:border-[#00955e]/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? "w-12 h-4 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full shadow-lg" 
                : "w-4 h-4 bg-white/50 hover:bg-white/70 rounded-full hover:scale-110"
            }`}
            onClick={() => goToSlide(index)}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full blur-md opacity-50"></div>
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-[#00955e] to-[#007a4e] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Company Branding */}
      <div className="absolute top-8 left-8 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-xl flex items-center justify-center shadow-xl">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
          </div>
          <div>
            <div className="text-xl font-bold">TechSafe Solutions</div>
            <div className="text-sm text-gray-300">Excellence in Safety</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-12 w-2 h-2 bg-[#00955e] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-12 w-2 h-2 bg-[#00955e]/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}