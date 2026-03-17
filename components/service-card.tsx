import Link from "next/link";
import ServiceDetalhe from "./servicedetalhe";
import { serviceData } from "@/data/servicedata";
import { type Locale, getTranslation } from "@/lib/i18n";

export default function ServiceCard({ locale }: { locale: Locale }) {
  const t = getTranslation(locale);

  return (
    <div className="bg-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <ServiceDetalhe
              key={service.id}
              service={{
                ...service,
                title: t[service.titleKey],
                description: t[service.descriptionKey],
              }}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}