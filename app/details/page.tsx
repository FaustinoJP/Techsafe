"use client";


import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { MissionVisionCard } from "@/components/mission-vision-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ProfessionalHero } from "@/components/professional-hero";
import { VideoSection } from "@/components/video-section";
import { ModernStats } from "@/components/enhanced-stats";
import { type Locale, getTranslation } from "@/lib/i18n";
import {
  Zap,
  Shield,
  Cog,
  Fuel,
  Settings,
  Menu,
  X,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Target,
  Eye,
  Facebook,
  Linkedin,
  AtSign,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

export default function DetailsPage() {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getTranslation(locale);

  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const title = searchParams.get("title") || "Detalhes do Serviço";
  let details: string[] = [];

  try {
    const rawDetails = searchParams.get("details");
    if (rawDetails) {
      const parsed = JSON.parse(decodeURIComponent(rawDetails));
      // Lida com casos de string única ou array
      details = Array.isArray(parsed) ? parsed : [parsed];
    }
  } catch (error) {
    console.error("Falha ao parsear detalhes:", error);
    details = ["Nenhum detalhe disponível"];
  }

  return (
    <div className="min-h-screen bg-white">
    <header className="group relative bg-white shadow-xl sticky top-0 z-50 transition-all duration-500">
        {/* Background Effects */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50/50 to-white"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#950000]/5 via-transparent to-[#7a0505a5]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent opacity-60"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group/logo">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#f6d853] to-[#007a4e] rounded-xl blur-lg opacity-0 group-hover/logo:opacity-20 transition-all duration-500 scale-110"></div> */}
                <Image
                  src="/logo_faustware.jpg"
                  alt="FaustWare Sistema e Soluções"
                  width={150}
                  height={150}
                  className=""
                />
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { href: "#home", label: t.home },
                { href: "#services", label: t.services },
                { href: "#about", label: t.about },
                { href: "#contact", label: t.contact },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/link relative text-gray-700  transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-[#ff0000]/5"
                >
                  {item.label}
                  {/* Enhanced underline effect */}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <LanguageSwitcher
                  currentLocale={locale}
                  onLocaleChange={setLocale}
                />
              </div>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher
                currentLocale={locale}
                onLocaleChange={setLocale}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative group/mobile hover:bg-[#950000]/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/20 to-[#9a0436cd]/20 rounded-lg opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#ff0000] relative z-10" />
                ) : (
                  <Menu className="h-6 w-6 text-[#ff0000] relative z-10" />
                )}
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
                  { href: "#contact", label: t.contact },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/mobile-link relative text-gray-700 hover:text-[#ff0000] transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-[#ff0000]/10 flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover/mobile-link:opacity-100 transform translate-x-1 group-hover/mobile-link:translate-x-0 transition-all duration-300" />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff0000] to-[#9a0436cd] scale-y-0 group-hover/mobile-link:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      
      <Card className="border-none">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="p-2 rounded-full hover:bg-[#ff0000]/10"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Button>
            <CardTitle className="text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {decodeURIComponent(title)}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 text-gray-600 text-base leading-relaxed">
            {details.map((detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
