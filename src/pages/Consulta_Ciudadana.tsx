import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MessageSquare,
  FileText,
  ExternalLink,
  ClipboardList,
} from "lucide-react";

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
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Intro */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                ¿Qué es la Consulta Ciudadana?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              La Consulta Ciudadana es un mecanismo de participación que busca
              conocer las opiniones, sugerencias o propuestas, comentarios y
              aportes de los usuarios, ciudadanos y grupos de interés con
              respecto a los proyectos, normas, políticas, programas o trámites
              adelantados por la entidad antes de la formulación de los mismos o
              la toma de decisiones.
              <br />
              <br />
              Este mecanismo sirve para priorizar problemáticas, seleccionar o
              evaluar programas, obras o proyectos de inversión en cualquier
              momento del ciclo de la gestión pública y para la mejora de
              trámites y disposiciones legales.
            </p>
          </div>

          {/* Secciones principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                A. Tema de Consulta
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <a
                    href="https://www.nobsa-boyaca.gov.co/tema/normatividad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Normas, Políticas, Programas y Proyectos
                  </a>
                </li>
                <li>Informes de seguimiento a Políticas Públicas</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <ClipboardList className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                B. Canales de Consulta
              </h3>
              <a
                href="https://www.nobsa-boyaca.gov.co/peticiones-quejas-reclamos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Peticiones, Quejas y Reclamos (PQRs)
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <ExternalLink className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                C. Observaciones y Respuestas
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.nobsa-boyaca.gov.co/tema/normatividad"
                    target="_blank"
                    className="text-purple-600 hover:underline"
                  >
                    Normatividad Vigente
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.sucop.gov.co/"
                    target="_blank"
                    className="text-purple-600 hover:underline"
                  >
                    SUCOP
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <ClipboardList className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                D. Sección Normativa
              </h3>
              <a
                rel="noopener noreferrer"
                href="https://www.nobsa-boyaca.gov.co/tema/normatividad"
                target="_blank"
                className="text-orange-600 hover:underline"
              >
                Ir a la sección normativa →
              </a>
            </div>
          </div>

          {/* Herramientas */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              E. Herramientas de Evaluación
            </h3>
            <a
              rel="noopener noreferrer"
              href="https://community.secop.gov.co/STS/Users/Login/Index"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Acceso a SECOP Community
            </a>
            <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
              <li>Normatividad Nacional (Pendiente publicación)</li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/normatividad"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Normatividad de la Entidad
                </a>
              </li>
              <li>Normatividad de Orden Territorial</li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/tema/politicas-y-lineamientos"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Políticas y Lineamientos Sectoriales
                </a>
              </li>
              <li>Gaceta Municipal (Pendiente creación)</li>
              <li>Agenda Normativa (Pendiente creación)</li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.nobsa-boyaca.gov.co/buscar?q=NORMATIVIDAD"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Búsqueda de Normas
                </a>
              </li>
            </ul>
          </div>

          {/* Encuestas */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Encuestas y Formularios
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>
                Encuesta de Medición de la Satisfacción del Cliente Externo
              </li>
              <li>Encuesta Transparencia y Acceso a la Información Pública</li>
              <li>Plan de Participación Ciudadana</li>
              <li>Encuesta Usabilidad y Accesibilidad Página Web</li>
              <li>Encuesta Usabilidad según WCAG Página Web Alcaldía</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              (Estas encuestas están pendientes de creación y publicación)
            </p>
          </div>

          {/* CTA final */}
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
