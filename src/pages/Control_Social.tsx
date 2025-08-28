import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Search, AlertTriangle } from "lucide-react";

const SocialControlPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-red-600 hover:text-red-700 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Control Social
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Vigilancia ciudadana sobre la gestión pública
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Control Social Ciudadano
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              El control social es el derecho y deber de los ciudadanos de
              participar de manera individual o colectiva en la vigilancia de la
              gestión pública y sus resultados. Es una herramienta fundamental
              para garantizar la transparencia y eficiencia en el uso de los
              recursos públicos.
            </p>
          </div>

          {/* Control Mechanisms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Search className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Veedurías Ciudadanas
              </h3>
              <p className="text-gray-600 mb-4">
                Mecanismo democrático de representación que permite a los
                ciudadanos ejercer vigilancia sobre la gestión pública.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Crear veeduría →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Denuncias y Quejas
              </h3>
              <p className="text-gray-600 mb-4">
                Reporta irregularidades, mal uso de recursos públicos o
                deficiencias en la prestación de servicios municipales.
              </p>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200">
                Presentar denuncia →
              </button>
            </div>
          </div>

          {/* Active Oversight */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Veedurías Activas
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Veeduría Obras Públicas
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Vigilancia sobre la ejecución de proyectos de
                      infraestructura municipal
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Activa
                    </span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Ver detalles
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Veeduría Servicios Públicos
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Control sobre la calidad y cobertura de servicios públicos
                      domiciliarios
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Activa
                    </span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ejerce tu derecho al control social
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Tu participación en el control social es fundamental para
              garantizar una gestión pública transparente, eficiente y al
              servicio de la comunidad.
            </p>
            <button
              onClick={() => navigate("/contacto")}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Iniciar control social
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialControlPage;
