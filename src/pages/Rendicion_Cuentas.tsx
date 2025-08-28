import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const AccountabilityPage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "A",
      title: "Habilitar un espacio para que la ciudadanía postule temáticas",
      link: "https://www.nobsa-boyaca.gov.co/rendicion-de-cuentas/participa-de-nuestra-rendicion-de-cuentas-2024",
    },
    {
      id: "B",
      title: "Estrategia de comunicación para la rendición de cuentas",
      link: "https://www.nobsa-boyaca.gov.co/rendicion-de-cuentas/participa-de-nuestra-rendicion-de-cuentas-2024",
    },
    {
      id: "C",
      title: "Calendario eventos de diálogo",
      link: null, // Falta
    },
    {
      id: "D",
      title:
        "Articular a los informes de rendición de cuentas en el menú Transparencia",
      link: "https://www.nobsa-boyaca.gov.co/control/informe-de-rendicion-de-cuentas-periodo-evaluado-2024",
    },
    {
      id: "E",
      title:
        "Habilitar un canal para eventos de diálogo articulación con Sistema Nacional",
      sublinks: [
        {
          label: "Audiencia Pública de Rendición de Cuentas",
          url: "https://www.nobsa-boyaca.gov.co/control/informe-de-rendicion-de-cuentas-periodo-evaluado-2024",
        },
        {
          label: "Encuesta Rendición de Cuentas",
          url: "https://www.nobsa-boyaca.gov.co/rendicion-de-cuentas/participa-de-nuestra-rendicion-de-cuentas-2024",
        },
      ],
    },
    {
      id: "F",
      title: "Preguntas y respuestas de eventos de diálogo",
      link: null, // Falta
    },
    {
      id: "G",
      title: "Memorias de cada evento",
      link: "https://www.nobsa-boyaca.gov.co/control/informe-de-rendicion-de-cuentas-periodo-evaluado-2024",
    },
    {
      id: "H",
      title: "Acciones de mejora incorporadas",
      sublinks: [
        {
          label: "Evaluación Estrategia Rendición de Cuentas informe 2024",
          url: null, // Falta
        },
        {
          label: "Plan de Rendición de Cuentas 2024",
          url: null, // Falta
        },
        {
          label: "Informe de Audiencia Pública de Rendición de Cuentas 2024",
          url: "https://www.nobsa-boyaca.gov.co/control/informe-de-rendicion-de-cuentas-periodo-evaluado-2024",
        },
      ],
    },
  ];

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
            Proceso mediante el cual nuestra entidad informa, explica y da a
            conocer los resultados de la gestión realizada con base en las metas
            establecidas en el Plan de Desarrollo, en compromiso con los
            ciudadanos de Nobsa, la sociedad civil y los organismos de control,
            promoviendo un diálogo de doble vía.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {section.id}. {section.title}
              </h3>

              {/* Si solo hay un link */}
              {section.link && (
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver más <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              )}

              {/* Si hay varios sublinks */}
              {section.sublinks && (
                <ul className="list-disc list-inside space-y-2">
                  {section.sublinks.map((sublink, idx) => (
                    <li key={idx}>
                      {sublink.url ? (
                        <a
                          href={sublink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {sublink.label}
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      ) : (
                        <span className="text-gray-500">
                          {sublink.label} (Falta)
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {/* Si está pendiente */}
              {!section.link && !section.sublinks && (
                <p className="text-gray-500 italic">Información pendiente</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountabilityPage;
