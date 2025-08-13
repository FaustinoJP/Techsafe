"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  locale: Locale;
  seeDetailsText: string;
  contractServiceText: string;
  whatsappMessage: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  details,
  locale,
  seeDetailsText,
  contractServiceText,
  whatsappMessage,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${whatsappMessage} ${title}`);
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDetailsClick = () => {
    const encodedDetails = encodeURIComponent(JSON.stringify(details));
    router.push(`/details?title=${encodeURIComponent(title)}&details=${encodedDetails}`);
  };

  return (
    <div className="group relative h-full">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0000' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Card
        className="h-full bg-white/80 backdrop-blur-sm border-2 border-transparent group-hover:border-[#357af3]/20 transition-all duration-500 rounded-3xl shadow-lg group-hover:shadow-2xl relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#357af3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#357af3]/10 to-transparent rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>

        <CardHeader className="text-center pb-6 relative z-10">
          {/* Icon with Enhanced Effects */}
          <div className="relative mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#ff0000] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
            <div
              className={`relative w-20 h-20 bg-gradient-to-br from-[#ff0000]/10 to-[#ff0000]/5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:from-[#ff0000] group-hover:to-[#9a0436cd] group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}
            >
              <Icon
                className={`h-10 w-10 text-[#ff0000] transition-all duration-500 group-hover:text-white group-hover:scale-110`}
              />
            </div>
            {/* Pulse Ring */}
            <div className="absolute inset-0 border-2 border-[#ff0000]/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          </div>

          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-[#ff0000] transition-colors duration-300 mb-2">
            {title}
          </CardTitle>

          <div className="w-16 h-1 bg-gradient-to-r from-[#ff0000] to-[#ff0000] rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>
        </CardHeader>
                        
        <CardContent className="space-y-6 relative z-10">
          <CardDescription className="text-center text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </CardDescription>

          <div className="flex flex-col gap-4">
            {/* Details Button */}
            <Button
              onClick={handleDetailsClick}
              variant="outline"
              className="w-full border-2 border-gray-200 hover:border-[#ff0000] hover:text-[#b56b00] hover:bg-[#ff0000]/5 transition-all duration-300 rounded-xl py-3 group/btn"
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              {seeDetailsText}
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
            </Button>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#357af3] to-[#357af3] hover:from-[#447ce0] hover:to-[#447ce0] text-white rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 group/whatsapp"
            >
              <MessageCircle className="h-4 w-4 mr-2 group-hover/whatsapp:scale-110 transition-transform duration-300" />
              {contractServiceText}
              <Sparkles className="h-4 w-4 ml-auto opacity-0 group-hover/whatsapp:opacity-100 group-hover/whatsapp:rotate-12 transition-all duration-300" />
            </Button>
          </div>

          {/* Bottom Accent */}
          <div className="flex items-center justify-center pt-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-[#447ce0]/20 rounded-full group-hover:bg-[#447ce0]/60 transition-all duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}