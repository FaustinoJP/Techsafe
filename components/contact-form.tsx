"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, CheckCircle, User, Phone, Building, MessageSquare, Sparkles, Star } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface ContactFormProps {
  locale: Locale
  translations: any
}

export function ContactForm({ locale, translations: t }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const services = [t.electricalInstallation, t.fireSafety, t.industrialAutomation, t.oilGas, t.electricalManufacturing]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-green-50/30 rounded-3xl"></div>
        <div 
          className="absolute inset-0 opacity-5 rounded-3xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#00955e]/10 to-emerald-500/5 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-green-400/10 to-[#00955e]/10 rounded-full blur-md animate-bounce"></div>

        <div className="relative bg-white/90 backdrop-blur-sm border border-green-100/50 rounded-3xl p-12 shadow-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl mb-6 shadow-lg animate-bounce">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          <div className="flex items-center justify-center mb-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            {locale === "pt" ? "Mensagem Enviada!" : "Message Sent!"}
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            {locale === "pt"
              ? "Obrigado pelo seu interesse. Entraremos em contato em breve!"
              : "Thank you for your interest. We will contact you soon!"}
          </p>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-[#00955e]/10 to-green-50/50 rounded-xl border border-[#00955e]/20">
            <div className="flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[#00955e] mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                {locale === "pt" 
                  ? "Resposta dentro de 24 horas" 
                  : "Response within 24 hours"
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-green-50/30 rounded-3xl"></div>
      <div 
        className="absolute inset-0 opacity-5 rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300955e' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#00955e]/10 to-emerald-500/5 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-green-400/10 to-[#00955e]/10 rounded-full blur-md animate-bounce"></div>

      <div className="relative bg-white/90 backdrop-blur-sm border border-green-100/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00955e] to-[#007a4e] rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            {t.requestQuote}
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00955e] to-[#007a4e] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium max-w-md mx-auto">
            {locale === "pt"
              ? "Preencha o formulário e receba um orçamento personalizado"
              : "Fill out the form and receive a personalized quote"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <User className="h-4 w-4 text-[#00955e] mr-2" />
                  {t.formName}
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-12 border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium"
                  placeholder={locale === "pt" ? "Seu nome completo" : "Your full name"}
                />
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Mail className="h-4 w-4 text-[#00955e] mr-2" />
                  {t.formEmail}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12 border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium"
                  placeholder={locale === "pt" ? "seu.email@exemplo.com" : "your.email@example.com"}
                />
              </div>
            </div>
          </div>

          {/* Phone and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Phone className="h-4 w-4 text-[#00955e] mr-2" />
                  {t.formPhone}
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12 border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium"
                  placeholder={locale === "pt" ? "+244 000 000 000" : "+244 000 000 000"}
                />
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Label htmlFor="company" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Building className="h-4 w-4 text-[#00955e] mr-2" />
                  {t.formCompany}
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="h-12 border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium"
                  placeholder={locale === "pt" ? "Nome da sua empresa" : "Your company name"}
                />
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Label htmlFor="service" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <Sparkles className="h-4 w-4 text-[#00955e] mr-2" />
                {t.formService}
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium">
                  <SelectValue placeholder={t.selectService} />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-gray-200 bg-white/95 backdrop-blur-sm">
                  {services.map((service, index) => (
                    <SelectItem 
                      key={index} 
                      value={service}
                      className="rounded-lg hover:bg-[#00955e]/10 focus:bg-[#00955e]/10 transition-colors duration-200"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00955e]/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <MessageSquare className="h-4 w-4 text-[#00955e] mr-2" />
                {t.formMessage}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={5}
                className="border-2 border-gray-200 focus:border-[#00955e] focus:ring-[#00955e] resize-none rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#00955e]/50 font-medium"
                placeholder={locale === "pt" ? "Descreva detalhadamente seu projeto ou necessidade..." : "Describe your project or need in detail..."}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-[#00955e] to-[#007a4e] hover:from-[#007a4e] hover:to-[#00955e] text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{locale === "pt" ? "Enviando..." : "Sending..."}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Send className="h-6 w-6" />
                  <span>{t.formSubmit}</span>
                </div>
              )}
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-4 bg-gradient-to-r from-[#00955e]/10 to-green-50/50 rounded-xl border border-[#00955e]/20">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#00955e] mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  {locale === "pt" 
                    ? "Resposta em 24h" 
                    : "24h Response"
                  }
                </span>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-[#00955e]/10 to-green-50/50 rounded-xl border border-[#00955e]/20">
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-[#00955e] mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  {locale === "pt" 
                    ? "Orçamento Gratuito" 
                    : "Free Quote"
                  }
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}