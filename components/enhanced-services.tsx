"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface EnhancedServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  details: string
  features: string[]
  locale: Locale
  seeDetailsText: string
  contractServiceText: string
  whatsappMessage: string
  gradient: string
}

export function EnhancedServiceCard({
  icon: Icon,
  title,
  description,
  details,
  features,
  locale,
  seeDetailsText,
  contractServiceText,
  whatsappMessage,
  gradient,
}: EnhancedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${whatsappMessage} ${title}`)
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card
      className="h-full transition-all duration-500 hover:shadow-2xl border-0 bg-white relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Top Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
      ></div>

      <CardHeader className="text-center pb-4 relative z-10">
        <div
          className={`mx-auto w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${
            isHovered ? "scale-110 shadow-xl" : ""
          }`}
        >
          <Icon className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        <CardDescription className="text-center text-gray-600 leading-relaxed text-base">{description}</CardDescription>

        {/* Features Preview */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full hover:border-primary hover:text-primary transition-all duration-300 group/btn"
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                {seeDetailsText}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-3xl">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  {title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-6 text-gray-600">
                  {details}
                </DialogDescription>

                {/* Full Features List */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    {locale === "pt"
                      ? "Características Principais:"
                      : locale === "fr"
                        ? "Caractéristiques Principales:"
                        : locale === "it"
                          ? "Caratteristiche Principali:"
                          : "Key Features:"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handleWhatsAppClick}
            className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg text-white transition-all duration-300 group/btn`}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            {contractServiceText}
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
