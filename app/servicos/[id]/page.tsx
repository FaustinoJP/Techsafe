"use client";

import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { serviceData } from "@/data/servicedata";
import { getTranslation, type Locale } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { CheckCircle, ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const lang = (searchParams.get("lang") as Locale) || "en";

  const [locale, setLocale] = useState<Locale>(lang);
  const t = getTranslation(locale);

  const service = serviceData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const title = t[service.titleKey];
  const description = t[service.descriptionKey];
  const details = t[service.detailsKey];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${service.whatsappMessage}`);
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} setLocale={setLocale} t={t} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/10 via-transparent to-[#007a4e]/10 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {locale === "pt" ? "Voltar para serviços" : "Back to services"}
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff0000] to-[#9a0436cd] rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Details & Gallery */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    {locale === "pt" ? "Sobre o Serviço" : "About the Service"}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ff0000] rounded-full"></div>
                  </h2>
                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {details}
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    {locale === "pt" ? "Galeria" : "Gallery"}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ff0000] rounded-full"></div>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-lg">
                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-lg">
                      <Image
                        src="/images/industrial-plant.jpg"
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6">
                    {locale === "pt"
                      ? "Por que nos escolher?"
                      : "Why choose us?"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#ff0000]" />
                        <span className="text-gray-700 font-medium">
                          {locale === "pt" ? `Benefício ${i}` : `Benefit ${i}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: CTA & Contact */}
              <div className="lg:sticky lg:top-24 space-y-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">
                    {locale === "pt"
                      ? "Interessado neste serviço?"
                      : "Interested in this service?"}
                  </h3>
                  <p className="text-gray-300 mb-8 relative z-10">
                    {locale === "pt"
                      ? "Entre em contato agora para uma consultoria gratuita ou solicite um orçamento personalizado."
                      : "Contact us now for a free consultation or request a personalized quote."}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-[#ff0000] to-[#9a0436cd] hover:from-[#9a0436cd] hover:to-[#ff0000] text-white rounded-xl py-4 px-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative z-10"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.contractService}
                    <Sparkles className="h-5 w-5" />
                  </button>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      {locale === "pt"
                        ? "Solicite um Orçamento"
                        : "Request a Quote"}
                    </h3>
                    <ContactForm locale={locale} translations={t} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <ContactInfo locale={locale} />
          </div>
        </section>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  );
}
