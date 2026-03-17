"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, AtSign, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  t: any;
}

export function Footer({ locale, t }: FooterProps) {
  return (
    <footer className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/5 via-transparent to-[#007a4e]/5 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff0000]/10 to-transparent rounded-full transform translate-x-32 -translate-y-32 group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff0000]/5 to-transparent rounded-full transform -translate-x-48 translate-y-48 group-hover:scale-110 transition-transform duration-1000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="group/footer-logo">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-xl blur-lg opacity-0 group-hover/footer-logo:opacity-30 transition-all duration-500 scale-110"></div>
              <Image
                src="/logo_faustwarefooter2.jpg"
                alt="TechSafe Solutions"
                width={250}
                height={150}
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 group-hover/footer-logo:text-gray-200 transition-colors duration-300">
              {t.footerText}
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: AtSign, label: "Email" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href="#"
                  className="group/social relative w-12 h-12 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-full blur-lg opacity-0 group-hover/social:opacity-50 transition-opacity duration-500 scale-110"></div>
                  <div className="absolute inset-0 border-2 border-[#ff0000]/30 rounded-full scale-110 opacity-0 group-hover/social:opacity-100 group-hover/social:scale-125 transition-all duration-500"></div>
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="group/services">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/services:from-[#3dc3c6] group-hover/services:to-[#00787a] transition-all duration-500">
              {t.services}
            </h3>
            <ul className="space-y-3">
              {[
                t.electricalInstallation,
                t.fireSafety,
                t.industrialAutomation,
                t.oilGas,
                t.electricalManufacturing,
              ].map((service, index) => (
                <li key={index} className="group/service-item">
                  <Link
                    href="/#services"
                    className="text-gray-300 hover:text-[#3dc3c6] transition-all duration-300 cursor-pointer relative flex items-center group-hover/service-item:translate-x-2"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover/service-item:opacity-100 transition-all duration-300 text-[#ff0000]" />
                    <span className="relative">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#ff0000] to-[#ff0000] group-hover/service-item:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="group/contact">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/contact:from-[#3dc3c6] group-hover/contact:to-[#007a76] transition-all duration-500">
              {locale === "pt" ? "Contato" : locale === "fr" ? "Contact" : locale === "it" ? "Contatto" : "Contact"}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@faustware.solucoes.com", href: "mailto:info@faustware-solucoes.com" },
                { icon: Phone, text: "+244 951 588 735", href: "tel:+244951588735" },
                { icon: MapPin, text: "Luanda, Angola", href: "#" },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group/contact-item flex items-center gap-3 text-gray-300 hover:text-[#ff0000] transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/20 rounded-lg flex items-center justify-center group-hover/contact-item:scale-110 transition-all duration-300">
                      <contact.icon className="h-5 w-5 text-[#ff0000]" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#ff0000] rounded-lg opacity-0 group-hover/contact-item:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <span className="group-hover/contact-item:translate-x-1 transition-transform duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-px mb-8"></div>
          <div className="pt-8 text-center">
            <div className="inline-block group/copyright">
              <p className="text-gray-400 group-hover/copyright:text-gray-300 transition-colors duration-300">
                &copy; 2025 FaustWare Serviços e Soluções {t.allRightsReserved}
              </p>
              <div className="w-0 h-px bg-gradient-to-r from-[#ff0000] to-[#ff0000] group-hover/copyright:w-full transition-all duration-500 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
