import { useState } from "react";
import Link from "next/link";
import { ExternalLink, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { type Locale, getTranslation } from "@/lib/i18n";

export default function ServiceDetalhe({ service, locale }: { service: any, locale: Locale }) {
  const [isHovered, setIsHovered] = useState(false);
  const t = getTranslation(locale);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${service.whatsappMessage}`);
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const Icon = service.icon;

  return (
    <div className="group relative h-full">
      <div
        className="absolute inset-0 opacity-5 rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0000' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="h-full bg-white/80 backdrop-blur-sm border-2 border-transparent group-hover:border-[#ff0000]/20 transition-all duration-500 rounded-3xl shadow-lg group-hover:shadow-2xl relative overflow-hidden p-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff0000]/10 to-transparent rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>

        <div className="text-center pb-6 relative z-10">
          <div className="relative mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
            <div
              className={`relative w-20 h-20 bg-gradient-to-br from-[#ff0000]/10 to-[#ff0000]/5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:from-[#ff0000] group-hover:to-[#9a0436cd] group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}
            >
              <Icon
                className={`h-10 w-10 text-center text-[#ff0000] transition-all duration-500 group-hover:text-white group-hover:scale-110`}
              />
            </div>
            <div className="absolute inset-0 border-2 border-[#ff0000]/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#ff0000] transition-colors duration-300 mb-2">
            {service.title}
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>
        </div>

        <div className="space-y-6 relative z-10">
          <p className="text-center text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href={`/servicos/${service.id}?lang=${locale}`}
              className="w-full border-2 border-gray-200 hover:border-[#ff0000] hover:text-[#ff0000] hover:bg-red-50 transition-all duration-300 rounded-xl py-3 px-4 group/btn flex items-center justify-center"
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              {t.seeDetails}
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
            </Link>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] hover:from-[#9a0436cd] hover:to-[#ff0000] text-white rounded-xl py-3 px-4 shadow-lg hover:shadow-xl transition-all duration-300 group/whatsapp flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2 group-hover/whatsapp:scale-110 transition-transform duration-300" />
              {t.contractService}
              <Sparkles className="h-4 w-4 ml-auto opacity-0 group-hover/whatsapp:opacity-100 group-hover/whatsapp:rotate-12 transition-all duration-300" />
            </button>
          </div>

          <div className="flex items-center justify-center pt-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-[#ff0000]/20 rounded-full group-hover:bg-[#ff0000]/60 transition-all duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}