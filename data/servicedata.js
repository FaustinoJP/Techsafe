import { Zap, Shield, Cog, Fuel, Settings } from "lucide-react";

export const serviceData = [
  {
    id: "electrical-installation",
    icon: Zap,
    titleKey: "electricalInstallation",
    descriptionKey: "electricalDesc",
    detailsKey: "electricalDetails",
    image: "/images/electrical-installation.jpg",
    whatsappMessage: "Hello! I would like to hire the service of Electrical Installation"
  },
  {
    id: "fire-safety",
    icon: Shield,
    titleKey: "fireSafety",
    descriptionKey: "fireDesc",
    detailsKey: "fireDetails",
    image: "/images/fire-safety.jpg",
    whatsappMessage: "Hello! I would like to hire the service of Fire Safety"
  },
  {
    id: "industrial-automation",
    icon: Cog,
    titleKey: "industrialAutomation",
    descriptionKey: "automationDesc",
    detailsKey: "automationDetails",
    image: "/images/industrial-plant.jpg",
    whatsappMessage: "Hello! I would like to hire the service of Industrial Automation"
  },
  {
    id: "oil-gas",
    icon: Fuel,
    titleKey: "oilGas",
    descriptionKey: "oilGasDesc",
    detailsKey: "oilGasDetails",
    image: "/images/industrial-plant.jpg", // Placeholder or relevant image
    whatsappMessage: "Hello! I would like to hire the service of Oil & Gas Solutions"
  },
  {
    id: "electrical-manufacturing",
    icon: Settings,
    titleKey: "electricalManufacturing",
    descriptionKey: "manufacturingDesc",
    detailsKey: "manufacturingDetails",
    image: "/images/electrical-installation.jpg", // Placeholder or relevant image
    whatsappMessage: "Hello! I would like to hire the service of Electrical Manufacturing"
  }
];
