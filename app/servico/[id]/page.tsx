// app/servico/[id]/page.tsx
import { services } from "@/data/services";
import { notFound } from "next/navigation";

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = parseInt(params.id, 10); // ← converte string para número
  const service = services.find((s) => s.id === serviceId);

  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-[#00bcd5] rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="text-white w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
      </div>

      <p className="text-lg text-gray-600 mb-4">{service.description}</p>
      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
        <p className="text-gray-700 leading-relaxed">{service.details}</p>
      </div>
    </div>
  );
}
