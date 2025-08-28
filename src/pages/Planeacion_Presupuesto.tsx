import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  DollarSign,
  FileText,
  CheckCircle,
  Link as LinkIcon,
} from "lucide-react";

const PlanningBudgetPage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600 mb-4" />,
      title: "Porcentaje del presupuesto para el proceso",
      links: [
        {
          label: "Ejecución Presupuestal Histórica",
          url: "https://www.nobsa-boyaca.gov.co/tema/presupuesto/ejecucion-presupuestal-historica-anual",
        },
        {
          label: "Plan de Acción",
          url: "https://www.nobsa-boyaca.gov.co/planes-estrategicos/plan-de-accion-332943",
        },
        {
          label: "Proyectos de Inversión",
          url: "https://www.nobsa-boyaca.gov.co/tema/proyectos-de-inversion",
        },
        {
          label: "Informes de Gestión",
          url: "https://www.nobsa-boyaca.gov.co/control/informe-150-dias-de-gobierno-nobsa-a-otro-nivel-2024",
        },
        {
          label: "Metas, objetivos e indicadores",
          url: "https://www.nobsa-boyaca.gov.co/tema/metas-objetivos-e-indicadores",
        },
        {
          label: "Planes Estratégicos",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes-estrategicos",
        },
      ],
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-blue-600 mb-4" />,
      title: "Canales de Interacción y Caja de Herramientas",
      links: [
        {
          label: "Peticiones, Quejas y Reclamos (PQR)",
          url: "https://www.nobsa-boyaca.gov.co/peticiones-quejas-reclamos",
        },
      ],
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600 mb-4" />,
      title: "Publicación de Información sobre decisiones",
      links: [
        {
          label: "Plan Anticorrupción",
          url: "https://www.nobsa-boyaca.gov.co/paac/informe-paac-cuatrimestre-septiembre-a-diciembre-2024",
        },
        {
          label: "Programa de Transparencia y Ética Pública",
          url: "https://www.nobsa-boyaca.gov.co/planes-estrategicos/planes-institucionales-y-estrategicos-al-plan-de-accion",
        },
        {
          label: "Plan de Desarrollo Municipal 2024-2027",
          url: "https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027",
        },
        {
          label: "Acciones de Participación Vigencia 2025",
          url: "#", // Falta link del Plan de Participación Ciudadana
        },
        {
          label: "Planes Institucionales y Estratégicos 2025",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes-estrategicos",
        },
      ],
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600 mb-4" />,
      title: "Visibilizar avances de decisiones y su estado (Semáforo)",
      links: [
        {
          label: "Plan de Acción",
          url: "https://www.nobsa-boyaca.gov.co/planes-estrategicos/plan-de-accion-332943",
        },
        {
          label: "Plan de Gasto Público (POAI)",
          url: "#", // Falta link del Plan Operativo Anual de Inversiones
        },
        {
          label: "Plan de Desarrollo",
          url: "https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027",
        },
        {
          label: "Plan Anticorrupción",
          url: "https://www.nobsa-boyaca.gov.co/paac/informe-paac-cuatrimestre-septiembre-a-diciembre-2024",
        },
        {
          label: "Programa de Transparencia y Ética Pública (PTEP)",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes-estrategicos",
        },
        {
          label: "Plan de Tratamiento de Riesgos",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes-estrategicos",
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
            Planeación y Presupuesto Participativo
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Mecanismos de participación en la definición de políticas, planes y
            recursos del municipio
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Planeación Participativa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La Planeación Participativa es el mecanismo mediante el cual la
              sociedad civil decide el rumbo de las políticas, planes, programas
              o proyectos de acuerdo con sus necesidades. La participación puede
              darse en la delimitación de resultados esperados y en la
              definición de actividades.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Presupuesto Participativo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El Presupuesto Participativo es un instrumento mediante el cual la
              comunidad discute y decide en qué invertir un porcentaje de los
              fondos públicos, formula proyectos, hace seguimiento a su
              inclusión en el presupuesto anual y vigila su ejecución.
            </p>
            <p className="text-gray-600 mt-4 italic">
              Según el Art.100 del Estatuto de Participación: los gobiernos
              territoriales podrán realizar ejercicios de presupuesto
              participativo, en los que se defina de manera concertada la
              orientación de los ingresos municipales en consonancia con los
              objetivos del Plan de Desarrollo.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
              >
                {section.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningBudgetPage;
