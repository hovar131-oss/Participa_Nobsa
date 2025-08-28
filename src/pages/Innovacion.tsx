import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lightbulb, FileText } from "lucide-react";

const InnovationPage: React.FC = () => {
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
            Colaboración e Innovación Abierta
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Interacción con la ciudadanía en la búsqueda de soluciones a
            problemáticas públicas y el fortalecimiento de la gestión pública.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introducción */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Innovación Abierta con la Ciudadanía
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              La colaboración e innovación abierta se entiende como la
              interacción con la ciudadanía en la búsqueda de soluciones a
              problemáticas públicas. Este enfoque aprovecha el conocimiento de
              los grupos de valor para resolver los desafíos de las entidades y
              abrir canales que permitan recibir ideas y propuestas de solución.
            </p>
          </div>

          {/* Mecanismos */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Mecanismos de la Innovación Abierta
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>A.</strong> Disponer un espacio para consulta sobre
                temas o problemáticas. <br />
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/informes-semestrales-control-interno"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Informe evaluación sobre la gestión del riesgo – Primer
                  cuatrimestre vigencia 2025
                </a>
              </li>
              <li>
                <strong>B.</strong> Convocatoria con el reto.
              </li>
              <li>
                <strong>C.</strong> Informar retos vigentes y reporte con la
                frecuencia de votaciones de soluciones en cada reto.
              </li>
              <li>
                <strong>D.</strong> Publicar la propuesta elegida y los
                criterios para su selección.
              </li>
              <li>
                <strong>E.</strong> Divulgar el plan de trabajo para implementar
                la solución diseñada.
              </li>
              <li>
                <strong>F.</strong> Publicar la información sobre los
                desarrollos o prototipos. <br />
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/story.php?story_fbid=1063802015925662&id=100068876213733&rdid=cGW6SyYmxQLy00Cy#"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Ver publicación en redes sociales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationPage;
