import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare, Vote, Users2 } from "lucide-react";

const CitizenConsultationPage: React.FC = () => {
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
            Consulta Ciudadana
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Tu opinión cuenta en las decisiones importantes
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Procesos de Consulta
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Las consultas ciudadanas son mecanismos democráticos que permiten
              conocer la opinión de la comunidad sobre temas específicos que
              afectan el desarrollo del municipio. Tu participación es
              fundamental para la toma de decisiones informadas.
            </p>
          </div>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Vote className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consultas Populares
              </h3>
              <p className="text-gray-600 mb-4">
                Mecanismo constitucional para que los ciudadanos se pronuncien
                sobre temas de trascendencia nacional, departamental o
                municipal.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Ver consultas activas →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <Users2 className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Foros Ciudadanos
              </h3>
              <p className="text-gray-600 mb-4">
                Espacios de diálogo y debate donde puedes expresar tus opiniones
                y propuestas sobre diferentes temas municipales.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200">
                Participar en foros →
              </button>
            </div>
          </div>

          {/* Active Consultations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Consultas Activas
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Consulta sobre Desarrollo Urbano
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Tu opinión sobre los proyectos de desarrollo urbano
                  planificados para el centro del municipio.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Finaliza: 30 de Enero, 2025
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors duration-200">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Tu voz es importante</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Participa en nuestras consultas ciudadanas y ayuda a construir un
              municipio que refleje las necesidades y aspiraciones de todos.
            </p>
            <button
              onClick={() => navigate("/contacto")}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Participar en consultas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenConsultationPage;
