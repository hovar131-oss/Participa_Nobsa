import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, FileText } from "lucide-react";

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
              El control social es el derecho y el deber de los ciudadanos a
              participar, de manera individual o a través de sus organizaciones,
              redes sociales e instituciones, en la vigilancia de la gestión
              pública y sus resultados, de acuerdo con la regulación aplicable y
              la correcta utilización de los recursos y bienes públicos.
            </p>
          </div>

          {/* Modalidades */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Mecanismos del Control Social
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>A.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/directorio-institucional/entes-de-control"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Informar las modalidades de control social
                </a>
              </li>
              <li>
                <strong>B.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/convocatorias"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Convocar cuando inicie ejecución de programas, proyectos o
                  contratos
                </a>
              </li>
              <li>
                <strong>C.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Resumen del tema objeto de vigilancia
                </a>
              </li>
              <li>
                <strong>D.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/control/informes-de-gestion-evaluacion-y-auditoria"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Informes del interventor o supervisor
                </a>
              </li>
              <li>
                <strong>E.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Facilitar herramientas de evaluación
                </a>
              </li>
              <li>
                <strong>F.</strong>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Publicar registro de observaciones de veedurías
                </a>
              </li>
              <li>
                <strong>G.</strong> Acciones de mejora
              </li>
            </ul>
          </div>

          {/* Pasos para veedurías */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pasos para crear Veedurías Ciudadanas
            </h3>
            <p className="text-gray-700 mb-4">
              Consulta la guía oficial para conocer los pasos y requisitos para
              conformar una veeduría ciudadana:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-blue-600">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.funcionpublica.gov.co/veedurias/Paginas/preguntas"
                  target="_blank"
                  className="hover:underline"
                >
                  Preguntas frecuentes sobre veedurías
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.funcionpublica.gov.co/veedurias/Content/Doc/PASOS3.pdf"
                  target="_blank"
                  className="hover:underline"
                >
                  Documento: Pasos para la creación de veedurías (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Aquí seguirían tus secciones de mecanismos activos y CTA */}
        </div>
      </div>
    </div>
  );
};

export default SocialControlPage;
