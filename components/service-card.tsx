import { useState } from "react";
import ServiceDetalhe from "./servicedetalhe";
import ServiceModal from "./servicemodel";
import { serviceData } from "@/data/servicedata";

export default function ServiceCard() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
       

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <ServiceDetalhe
              key={service.id}
              service={service}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar o próximo nível
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços oferecidos.");
                const whatsappUrl = `https://wa.me/244951588735?text=${message}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Falar Conosco
            </button>
          </div>
        </div> */}
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}