"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Award, Users, Clock } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface VideoSectionProps {
  locale: Locale
}

export function VideoSection({ locale }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const handlePlayPause = () => {
    const video = document.getElementById("company-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    const video = document.getElementById("company-video") as HTMLVideoElement
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const getTitle = () => {
    switch (locale) {
      case "pt":
        return "Conheça a TechSafe Solutions"
      case "fr":
        return "Découvrez TechSafe Solutions"
      case "it":
        return "Scopri TechSafe Solutions"
      default:
        return "Discover TechSafe Solutions"
    }
  }

  const getSubtitle = () => {
    switch (locale) {
      case "pt":
        return "Veja como transformamos ideias em soluções industriais de excelência"
      case "fr":
        return "Découvrez comment nous transformons les idées en solutions industrielles d'excellence"
      case "it":
        return "Scopri come trasformiamo le idee in soluzioni industriali di eccellenza"
      default:
        return "See how we transform ideas into industrial solutions of excellence"
    }
  }

  const features = [
    {
      icon: Award,
      number: "15+",
      title: {
        pt: "Anos de Experiência",
        fr: "Années d'Expérience", 
        it: "Anni di Esperienza",
        en: "Years of Experience"
      },
      description: {
        pt: "Soluções comprovadas no mercado",
        fr: "Solutions éprouvées sur le marché",
        it: "Soluzioni comprovate sul mercato", 
        en: "Proven market solutions"
      }
    },
    {
      icon: Users,
      number: "500+",
      title: {
        pt: "Projetos Realizados",
        fr: "Projets Réalisés",
        it: "Progetti Realizzati",
        en: "Completed Projects"
      },
      description: {
        pt: "Resultados que falam por si",
        fr: "Des résultats qui parlent d'eux-mêmes",
        it: "Risultati che parlano da soli",
        en: "Results that speak for themselves"
      }
    },
    {
      icon: Clock,
      number: "24/7",
      title: {
        pt: "Suporte Técnico",
        fr: "Support Technique",
        it: "Supporto Tecnico",
        en: "Technical Support"
      },
      description: {
        pt: "Sempre disponível quando precisar",
        fr: "Toujours disponible quand vous en avez besoin",
        it: "Sempre disponibile quando ne hai bisogno",
        en: "Always available when you need it"
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full transform -translate-x-40 translate-y-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            {getTitle()}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {getSubtitle()}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Container */}
          <div className="group relative mb-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Video Wrapper */}
            <div className="relative p-4 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
                <video
                  id="company-video"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  poster="/placeholder.svg?height=500&width=800&text=TechSafe+Solutions+Video"
                  muted={isMuted}
                  loop
                  playsInline
                >
                  <source src="/video/tech-safe.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    {/* Play/Pause Button */}
                    <div className="relative">
                      <Button
                        onClick={handlePlayPause}
                        size="lg"
                        className="bg-gradient-to-br from-[#00955e] to-[#007a4e] hover:from-[#007a4e] hover:to-[#00955e] text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-0"
                      >
                        {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10 ml-1" />}
                      </Button>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 border-2 border-[#00955e]/30 rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                    </div>

                    {/* Mute Button */}
                    <div className="relative">
                      <Button
                        onClick={handleMuteToggle}
                        variant="outline"
                        size="lg"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50 rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                      >
                        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        TechSafe Solutions
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {locale === "pt"
                          ? "Excelência em Soluções Industriais"
                          : locale === "fr"
                            ? "Excellence en Solutions Industrielles"
                            : locale === "it"
                              ? "Eccellenza nelle Soluzioni Industriali"
                              : "Excellence in Industrial Solutions"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">
                        {locale === "pt" ? "Duração" : locale === "fr" ? "Durée" : locale === "it" ? "Durata" : "Duration"}
                      </div>
                      <div className="text-2xl font-bold text-[#00955e]">2:30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00955e]/20 transition-all duration-500"></div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative h-full">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-2xl transform rotate-45 translate-x-12 -translate-y-12 group-hover:from-[#00955e]/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Main Content */}
                <div className="relative p-8 h-full flex flex-col text-center">
                  {/* Icon and Number */}
                  <div className="relative mb-6 mx-auto">
                    {/* Icon Container */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto mb-4">
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 border-2 border-[#00955e]/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#00955e] to-[#007a4e] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      {feature.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 group-hover:from-[#00955e] group-hover:to-[#007a4e] transition-all duration-500">
                    {feature.title[locale] || feature.title.en}
                  </h4>
                  
                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {feature.description[locale] || feature.description.en}
                  </p>

                  {/* Bottom Elements */}
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-[#00955e]/20 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-[#00955e]/30 rounded-full group-hover:bg-[#00955e] transition-all duration-500"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs font-semibold text-[#00955e]/60 group-hover:text-[#00955e] transition-colors duration-300">
                        TechSafe Solutions
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00955e]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}