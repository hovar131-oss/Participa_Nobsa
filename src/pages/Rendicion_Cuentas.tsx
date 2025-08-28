import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Eye, Download } from "lucide-react";

const AccountabilityPage: React.FC = () => {
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
            Rendición de Cuentas
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Transparencia en la gestión pública municipal
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Transparencia y Rendición de Cuentas
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              La rendición de cuentas es un proceso mediante el cual informamos,
              explicamos y damos a conocer los resultados de nuestra gestión a
              la ciudadanía. Es un ejercicio de transparencia que fortalece la
              confianza entre la administración y la comunidad.
            </p>
          </div>

          {/* Accountability Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Eye className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Informes de Gestión
              </h3>
              <p className="text-gray-600 mb-4">
                Accede a los informes detallados sobre el cumplimiento de metas,
                ejecución presupuestal y avances en proyectos municipales.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Ver informes →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <Download className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Documentos Públicos
              </h3>
              <p className="text-gray-600 mb-4">
                Descarga contratos, resoluciones, decretos y otros documentos
                oficiales de la administración municipal.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                Descargar documentos →
              </button>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informes Recientes
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Informe de Gestión 2024
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Resultados y logros de la administración durante el año
                      2024
                    </p>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200">
                    Descargar
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Ejecución Presupuestal Q4 2024
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Detalle de la ejecución presupuestal del último trimestre
                    </p>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200">
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Mantente informado</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              La transparencia es fundamental para una buena gestión pública.
              Accede regularmente a nuestros informes y documentos oficiales.
            </p>
            <button
              onClick={() => navigate("/contacto")}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Solicitar información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountabilityPage;
