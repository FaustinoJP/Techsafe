import { Mail, Phone, MapPin, Clock, Globe, Shield } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface ContactInfoProps {
  locale: Locale
}

export function ContactInfo({ locale }: ContactInfoProps) {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-green-50/30 rounded-2xl"></div>
      <div 
        className="absolute inset-0 opacity-5 rounded-2xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative bg-white/80 backdrop-blur-sm border border-green-100/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl mb-4 shadow-lg">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            {locale === "pt" ? "Entre em Contato" : "Get In Touch"}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center p-4 rounded-xl border border-transparent group-hover:border-[#00955e]/20 transition-all duration-300">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00955e]/10 to-[#00955e]/5 rounded-xl flex items-center justify-center group-hover:from-[#00955e]/20 group-hover:to-[#00955e]/10 transition-all duration-300">
                  <Mail className="h-6 w-6 text-[#00955e]" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00955e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                <a 
                  href="mailto:info@techsafe-solutions.com" 
                  className="text-gray-600 hover:text-[#00955e] transition-colors duration-300 font-medium"
                >
                  info@techsafe-solutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center p-4 rounded-xl border border-transparent group-hover:border-[#00955e]/20 transition-all duration-300">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00955e]/10 to-[#00955e]/5 rounded-xl flex items-center justify-center group-hover:from-[#00955e]/20 group-hover:to-[#00955e]/10 transition-all duration-300">
                  <Phone className="h-6 w-6 text-[#00955e]" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00955e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {locale === "pt" ? "Telefone" : "Phone"}
                </h4>
                <a 
                  href="tel:+244951588735" 
                  className="text-gray-600 hover:text-[#00955e] transition-colors duration-300 font-medium"
                >
                  +244 951 588 735
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center p-4 rounded-xl border border-transparent group-hover:border-[#00955e]/20 transition-all duration-300">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00955e]/10 to-[#00955e]/5 rounded-xl flex items-center justify-center group-hover:from-[#00955e]/20 group-hover:to-[#00955e]/10 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-[#00955e]" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00955e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {locale === "pt" ? "Localização" : "Location"}
                </h4>
                <p className="text-gray-600 font-medium">Luanda, Angola</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="relative mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00955e]/5 to-green-50/50 rounded-xl"></div>
            <div className="relative p-6 rounded-xl border border-[#00955e]/10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-lg flex items-center justify-center shadow-md">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 ml-3">
                  {locale === "pt" ? "Horário de Atendimento" : "Business Hours"}
                </h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/60">
                  <span className="font-semibold text-gray-700">
                    {locale === "pt" ? "Segunda - Sexta:" : "Monday - Friday:"}
                  </span>
                  <span className="text-[#00955e] font-bold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/60">
                  <span className="font-semibold text-gray-700">
                    {locale === "pt" ? "Sábado:" : "Saturday:"}
                  </span>
                  <span className="text-[#00955e] font-bold">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/60">
                  <span className="font-semibold text-gray-700">
                    {locale === "pt" ? "Domingo:" : "Sunday:"}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {locale === "pt" ? "Fechado" : "Closed"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[#00955e]/10 to-green-50/50 rounded-xl border border-[#00955e]/20">
            <div className="flex items-center justify-center">
              <Shield className="h-5 w-5 text-[#00955e] mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                {locale === "pt" 
                  ? "Soluções Certificadas & Confiáveis" 
                  : "Certified & Trusted Solutions"
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}