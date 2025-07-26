"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onLocaleChange("en")}>🇺🇸 English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange("pt")}>🇵🇹 Português</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange("fr")}>🇫🇷 Français</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange("it")}>🇮🇹 Italiano</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
