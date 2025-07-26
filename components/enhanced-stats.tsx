"use client"

import { useEffect, useState } from "react"
import { Award, BarChart, Users, Clock, Shield, Zap, TrendingUp, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface ModernStatsProps {
  locale: Locale
}

interface StatItem {
  icon: LucideIcon
  value: string
  label: string
  color: string
  description: string
}

export function ModernStats({ locale }: ModernStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})

  const stats: StatItem[] = [
    {
      icon: Award,
      value: "15+",
      label: locale === "pt" ? "Anos de Experiência" : "Years of Experience",
      color: "from-[#00955e] to-[#007a4e]",
      description: locale === "pt" ? "Décadas de expertise no mercado" : "Decades of market expertise"
    },
    {
      icon: BarChart,
      value: "500+",
      label: locale === "pt" ? "Projetos Concluídos" : "Completed Projects",
      color: "from-blue-500 to-blue-600",
      description: locale === "pt" ? "Soluções entregues com sucesso" : "Successfully delivered solutions"
    },
    {
      icon: Users,
      value: "100+",
      label: locale === "pt" ? "Clientes Satisfeitos" : "Satisfied Clients",
      color: "from-purple-500 to-purple-600",
      description: locale === "pt" ? "Parcerias duradouras estabelecidas" : "Long-lasting partnerships established"
    },
    {
      icon: Clock,
      value: "24/7",
      label: locale === "pt" ? "Suporte Técnico" : "Technical Support",
      color: "from-orange-500 to-orange-600",
      description: locale === "pt" ? "Assistência contínua disponível" : "Continuous assistance available"
    },
    {
      icon: Shield,
      value: "100%",
      label: locale === "pt" ? "Conformidade" : "Compliance",
      color: "from-red-500 to-red-600",
      description: locale === "pt" ? "Total aderência às normas" : "Full compliance with standards"
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: locale === "pt" ? "Taxa de Sucesso" : "Success Rate",
      color: "from-green-500 to-green-600",
      description: locale === "pt" ? "Eficiência comprovada" : "Proven efficiency"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numeric values
          stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ''))
            if (numericValue) {
              let current = 0
              const increment = numericValue / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= numericValue) {
                  current = numericValue
                  clearInterval(timer)
                }
                setAnimatedValues(prev => ({ 
                  ...prev, 
                  [index]: Math.floor(current) 
                }))
              }, 40)
            }
          })
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("modern-stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="modern-stats-section" 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00955e] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00955e]/20 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500/20 rotate-45 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#00955e]/10 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-[#00955e]" />
            <span className="text-[#00955e] font-semibold text-sm uppercase tracking-wider">
              {locale === "pt" ? "Nossos Números" : "Our Numbers"}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {locale === "pt" ? "Resultados que " : "Results that "}
            </span>
            <span className="bg-gradient-to-r from-[#00955e] to-[#007a4e] bg-clip-text text-transparent">
              {locale === "pt" ? "Impressionam" : "Impress"}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {locale === "pt" 
              ? "Nossa trajetória de excelência refletida em números que demonstram comprometimento, qualidade e inovação em cada projeto desenvolvido."
              : "Our excellence trajectory reflected in numbers that demonstrate commitment, quality and innovation in every project developed."
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible 
                  ? "translate-y-0 opacity-100 scale-100" 
                  : "translate-y-20 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-[#00955e]/20 overflow-hidden">
                
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-5 rounded-3xl"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110`}></div>
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}
                    >
                      <stat.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 border-2 border-current rounded-2xl scale-110 opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500`} style={{ color: stat.color.split(' ')[1] }}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    {/* Animated Value */}
                    <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-[#00955e] transition-colors duration-300 relative">
                      {stat.value.includes('+') || stat.value.includes('%') || stat.value.includes('/') 
                        ? stat.value 
                        : animatedValues[index] || 0
                      }
                      {stat.value.includes('+') && '+'}
                      {stat.value.includes('%') && '%'}
                      {stat.value.includes('/') && stat.value.substring(stat.value.indexOf('/'))}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#00955e] transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {stat.description}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-500`}></div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="flex items-center justify-center mt-8">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1.5 h-1.5 bg-[#00955e]/20 rounded-full group-hover:bg-[#00955e]/60 transition-all duration-500"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00955e]/20 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00955e] to-[#007a4e] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <TrendingUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">
              {locale === "pt" ? "Seja parte desta história de sucesso" : "Be part of this success story"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}