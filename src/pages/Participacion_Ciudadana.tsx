import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  FileText,
  Database,
  BookOpen,
  CheckCircle,
  Globe,
} from "lucide-react";

const ParticipationPage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600 mb-4" />,
      title: "Publicación Temas de Interés",
      links: [
        {
          label: "Página principal de la Alcaldía",
          url: "https://www.nobsa-boyaca.gov.co/",
        },
      ],
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600 mb-4" />,
      title: "Caja de Herramientas",
      links: [
        {
          label: "Planes institucionales",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes-estrategicos",
        },
      ],
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />,
      title: "Herramientas de Evaluación",
      links: [
        {
          label: "Encuesta de satisfacción del cliente externo",
          url: "#", // ← aquí pon el link de la encuesta
        },
        {
          label: "Rendición de cuentas",
          url: "https://www.nobsa-boyaca.gov.co/tema/rendicion-de-cuentas",
        },
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600 mb-4" />,
      title: "Divulgación de Resultados",
      links: [
        {
          label: "Plan de desarrollo Nobsa 2024-2027",
          url: "https://www.nobsa-boyaca.gov.co/planes/plan-de-desarrollo-nobsa-a-otro-nivel-2024--2027",
        },
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-yellow-600 mb-4" />,
      title: "Datos Abiertos",
      links: [
        {
          label: "Informe de PQR",
          url: "https://www.nobsa-boyaca.gov.co/tema/informe-de-pqr",
        },
        {
          label: "Registro de Activos de Información",
          url: "https://www.nobsa-boyaca.gov.co/control/registro-de-actividad-de-informacion",
        },
        {
          label: "Índice de Información Clasificada y Reservada",
          url: "https://www.nobsa-boyaca.gov.co/control-interno/indice-de-informacion-clasificada-y-reservada-562780",
        },
        {
          label: "Esquema de Publicación de Información",
          url: "https://www.nobsa-boyaca.gov.co/control-interno/esquema-de-publicacion-de-informacion-296605",
        },
        {
          label: "Programa de Gestión Documental",
          url: "https://www.nobsa-boyaca.gov.co/control/programa-de-gestion-documental",
        },
        {
          label: "Tablas de Retención Documental",
          url: "https://www.nobsa-boyaca.gov.co/control/tabla-de-retencion-documental",
        },
        {
          label: "Costos de Reproducción de Información Pública",
          url: "https://www.nobsa-boyaca.gov.co/control/costo-de-reproduccion",
        },
        {
          label: "Portal Nacional de Datos Abiertos",
          url: "https://www.datos.gov.co/",
        },
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600 mb-4" />,
      title: "Información Específica de Grupos de Interés",
      links: [
        {
          label: "Niñas, niños y adolescentes",
          url: "https://www.nobsa-boyaca.gov.co/tema/ninos-ninas-adolescentes",
        },
        {
          label: "Población vulnerable",
          url: "#", // pendiente link Secretaría de la Mujer
        },
      ],
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600 mb-4" />,
      title: "Planes de Mejoramiento",
      links: [
        {
          label: "Planes de mejoramiento",
          url: "https://www.nobsa-boyaca.gov.co/tema/planes/planes-de-mejoramiento",
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
            Participación Ciudadana
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Espacios y mecanismos para tu participación activa
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Participación para el diagnóstico e identificación de problemas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              La participación ciudadana es la vinculación de los ciudadanos e
              interesados en el proceso de recolección y análisis de
              información, para identificar y explicar los problemas que les
              afectan con base en datos, ideas, hechos, experiencias y
              propuestas.
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

export default ParticipationPage;
