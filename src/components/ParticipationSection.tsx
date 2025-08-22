import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const ParticipationSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>("what-is");

  const participationMechanisms = [
    {
      id: "what-is",
      title: "¿QUÉ ES?",
      content:
        "La participación ciudadana es el derecho que tienen todos los ciudadanos a intervenir en las decisiones que los afectan y en la vida económica, política, administrativa y cultural de la nación. Es un proceso que permite a la comunidad influir en las políticas públicas y contribuir al desarrollo de su municipio.",
    },
    {
      id: "mechanisms",
      title: "¿MECANISMOS DE PARTICIPACIÓN CIUDADANA?",
      content:
        "Los mecanismos de participación ciudadana son herramientas legales y constitucionales que permiten a los ciudadanos ejercer su derecho a participar en la vida pública del municipio.",
      subsections: [
        {
          id: "definition",
          title: "DEFINICIÓN",
          content:
            "Son los instrumentos mediante los cuales los ciudadanos pueden participar activamente en la toma de decisiones públicas que afectan su entorno y calidad de vida.",
        },
        {
          id: "compliance",
          title: "ACCIÓN DE CUMPLIMIENTO",
          content:
            "Mecanismo judicial para hacer efectivo el cumplimiento de una ley o acto administrativo. Cualquier persona puede interponer esta acción ante las autoridades competentes.",
        },
        {
          id: "tutela",
          title: "ACCIÓN DE TUTELA",
          content:
            "Mecanismo constitucional de protección inmediata de los derechos fundamentales cuando estos resulten vulnerados o amenazados por la acción u omisión de cualquier autoridad pública.",
        },
        {
          id: "public-hearing",
          title: "AUDIENCIA PÚBLICA DE RENDICIÓN DE CUENTAS",
          content:
            "Espacio de participación donde los servidores públicos informan, explican y dan cuenta de su gestión a la ciudadanía, promoviendo la transparencia y el control social.",
        },
        {
          id: "consultations",
          title: "CONSULTAS VERBALES O ESCRITAS",
          content:
            "Mecanismo que permite a los ciudadanos solicitar información sobre la gestión municipal, proyectos en curso, presupuesto y cualquier tema de interés público.",
        },
      ],
    },
    {
      id: "who-can-participate",
      title: "PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO (PAAC)",
      content:
        "El Plan Anticorrupción y Atención al Ciudadano (PAAC) es un instrumento de gobierno abierto que promueve la transparencia, la integridad, la eficiencia y la eficacia de la administración gubernamental. ",
      subsections: [
        {
          id: "paac-2024",
          title: "Plan Anticorrupción y Atención al Ciudadano (PAAC) 2024",
          link: "https://drive.google.com/file/d/15OK7vgi2gwkEPerjgH2YuCE_aUCD0i5i/view",
        },
        {
          id: "paac-2023",
          title: "Plan Anticorrupción y Atención al Ciudadano (PAAC) 2023",
          link: "https://drive.google.com/file/d/15OK7vgi2gwkEPerjgH2YuCE_aUCD0i5i/view",
        },
        {
          id: "paac-reports",
          title: "Informes y seguimientos PAAC",
          link: "https://drive.google.com/file/d/15OK7vgi2gwkEPerjgH2YuCE_aUCD0i5i/view",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mecanismos de Participación Ciudadana
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Conoce las diferentes formas en que puedes participar activamente en
          las decisiones que afectan a nuestro municipio. Tu voz es importante
          para construir una Nobsa mejor.
        </p>
      </div>

      <div className="space-y-4">
        {participationMechanisms.map((mechanism) => (
          <AccordionItem
            key={mechanism.id}
            id={mechanism.id}
            title={mechanism.title}
            content={mechanism.content}
            subsections={mechanism.subsections}
            isOpen={openSection === mechanism.id}
            onToggle={() =>
              setOpenSection(openSection === mechanism.id ? null : mechanism.id)
            }
          />
        ))}
      </div>

    </div>
  );
};

export default ParticipationSection;
