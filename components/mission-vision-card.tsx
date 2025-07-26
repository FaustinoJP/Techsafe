import type { LucideIcon } from "lucide-react"

interface MissionVisionCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function MissionVisionCard({ 
  icon: Icon, 
  title, 
  description, 
  className = "" 
}: MissionVisionCardProps) {
  return (
    <div className={`group relative h-full ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00955e]/10 to-transparent rounded-2xl transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-[#00955e]/20 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full transform -translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>
      
      {/* Main Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            {/* Icon Container */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
              <Icon className="h-8 w-8 text-white" />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            {/* Pulse Ring */}
            <div className="absolute inset-0 border-2 border-[#00955e]/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 group-hover:from-[#00955e] group-hover:to-[#007a4e] transition-all duration-500">
              {title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom Border */}
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
  )
}