"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  value: string
  label: string
  index?: number
}

export function StatsCard({ icon: Icon, value, label, index = 0 }: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group relative h-full">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div
        className="h-full bg-white/90 backdrop-blur-sm border-2 border-transparent group-hover:border-[#00955e]/20 transition-all duration-500 rounded-3xl shadow-lg group-hover:shadow-2xl relative overflow-hidden p-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          {/* Icon with Enhanced Effects */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
            <div
              className={`relative w-16 h-16 bg-gradient-to-br from-[#00955e]/10 to-[#00955e]/5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:from-[#00955e] group-hover:to-[#007a4e] group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}
            >
              <Icon className={`h-8 w-8 text-[#00955e] transition-all duration-500 group-hover:text-white group-hover:scale-110`} />
            </div>
            {/* Pulse Ring */}
            <div className="absolute inset-0 border-2 border-[#00955e]/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          </div>
          
          {/* Stats Content */}
          <div className="text-center">
            {/* Value with Enhanced Typography */}
            <div className="text-4xl font-bold text-gray-800 group-hover:text-[#00955e] transition-colors duration-300 mb-3 relative">
              {value}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e] to-[#007a4e] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {value}
              </div>
            </div>
            
            {/* Label */}
            <div className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300 uppercase tracking-wider">
              {label}
            </div>
            
            {/* Decorative Line */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mt-4 group-hover:w-20 transition-all duration-500"></div>
          </div>
          
          {/* Bottom Accent Dots */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 bg-[#00955e]/20 rounded-full group-hover:bg-[#00955e]/60 transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#00955e]/20 via-transparent to-[#00955e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  )
}