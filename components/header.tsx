"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
}

export function Header({ locale, setLocale, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: t.home },
    { href: "/#services", label: t.services },
    { href: "/#about", label: t.about },
    { href: "/#contact", label: t.contact },
  ];

  return (
    <header className="group relative bg-white shadow-xl sticky top-0 z-50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-[#950000]/5 via-transparent to-[#7a0505a5]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group/logo">
            <Link href="/" className="relative">
              <Image
                src="/logo_faustware.jpg"
                alt="FaustWare Sistema e Soluções"
                width={150}
                height={150}
                className=""
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/link relative text-gray-700 transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-[#ff0000]/5"
              >
                {item.label}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <LanguageSwitcher
                currentLocale={locale}
                onLocaleChange={setLocale}
              />
            </div>
          </nav>

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
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#ff0000] relative z-10" />
              ) : (
                <Menu className="h-6 w-6 text-[#ff0000] relative z-10" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-gradient-to-r from-slate-50/50 to-white backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
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
  );
}
