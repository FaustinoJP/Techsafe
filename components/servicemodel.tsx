import { X, CheckCircle, MessageCircle, Sparkles } from "lucide-react";

export default function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`${service.whatsappMessage} ${service.title}`);
    const whatsappUrl = `https://wa.me/244951588735?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-8 bg-gradient-to-br from-red-50 to-blue-50 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                <service.icon className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {service.title}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              O que está incluído:
            </h3>
            
            <div className="grid gap-4">
              {service.details.map((detail, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 hover:border-red-500 text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 font-medium"
            >
              Voltar
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contratar Serviço
              <Sparkles className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}