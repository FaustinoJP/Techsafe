"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { type Locale, getTranslation } from "@/lib/i18n"

interface ProfessionalHeroProps {
  locale: Locale
}

export function ProfessionalHero({ locale }: ProfessionalHeroProps) {
  const t = getTranslation(locale)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      image: "/images/industrial-plant.jpg",
      gradient: "from-black/70 via-black/50 to-transparent",
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
      gradient: "from-red-900/70 via-red-800/50 to-transparent",
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
      gradient: "from-primary-900/70 via-primary-800/50 to-transparent",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[700px] md:h-[800px] overflow-hidden">
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
          <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-6xl">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30">
                    TechSafe Solutions
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {slide.title}
                </h1>

                <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto text-gray-200">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {t.heroButton}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-xl backdrop-blur-sm"
                  >
                    {locale === "pt"
                      ? "Ver Projetos"
                      : locale === "fr"
                        ? "Voir Projets"
                        : locale === "it"
                          ? "Vedi Progetti"
                          : "View Projects"}
                  </Button>
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
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-xl h-12 w-12 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-xl h-12 w-12 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125 shadow-lg" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-primary transition-all duration-7000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
