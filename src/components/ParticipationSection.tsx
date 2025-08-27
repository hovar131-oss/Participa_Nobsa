import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const ParticipationSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>("que-es");

  const participationMechanisms = [
    {
      id: "que-es",
      title: "¿QUÉ ES?",
      content:
        "Aquí encontrará información sobre los espacios, mecanismos y acciones que la Alcaldía de Nobsa, Boyacá; implementa en cumplimiento de la política de participación ciudadana en la gestión pública, con el propósito de fortalecer la vinculación de la ciudadanía, grupos de interés y de valor, en las decisiones y acciones públicas, durante las fases del ciclo de la gestión pública (diagnóstico, formulación, implementación, evaluación y seguimiento), a partir de lo establecido en la Ley 1757 de 2015, la Ley 1712 de 2014, la Ley 489 de 1998, el Decreto 1499 de 2017, la Resolución 1519 de 2020 del Ministerio de Tecnologías de la Información y las Comunicaciones, así como los lineamientos y orientaciones del Departamento Administrativo de la Función Pública.",
    },
    {
      id: "mecanismos-participacion",
      title: "¿MECANISMOS DE PARTICIPACIÓN CIUDADANA?",
      content:
        "Los mecanismos de participación ciudadana son herramientas legales y constitucionales que permiten a los ciudadanos ejercer su derecho a participar en la vida pública del municipio.",
      subsections: [
        {
          id: "CONSULTAS",
          title: "CONSULTAS",
          content:
            "Estas solicitudes pueden ser escritas o verbales se generan ante la Entidad acerca de una materia que sea de sus atribuciones o competencias.",
        },
        {
          id: "PETICIÓN",
          title: "PETICIÓN",
          content:
            "Es aquel derecho que tiene toda persona a presentar peticiones respetuosas a las autoridades, en los términos señalados, por motivos de interés general o particular, y a obtener pronta resolución completa y de fondo sobre la misma.\n\nToda actuación que inicie cualquier persona ante las autoridades implica el ejercicio del derecho de petición consagrado en el artículo 23 de la Constitución Política, la Ley 1755 de 2015 o el Decreto 1166 de 2016, sin que sea necesario invocarlo.",
        },
        {
          id: "DENUNCIA",
          title: "DENUNCIA",
          content:
            "Es un mecanismo a través del cual cualquier persona puede dar noticia a las autoridades sobre la comisión de un delito o falta.",
        },
        {
          id: "QUEJA",
          title: "QUEJA",
          content:
            "Es la acción o expresión ya sea escrita o verbal que tiene un ciudadano ante un disgusto o insatisfacción con la conducta de un servidor público o persona natural que maneja una función estatal.",
        },
        {
          id: "RECLAMO",
          title: "RECLAMO",
          content:
            "Es cualquier expresión mediante la cual el ciudadano hace saber que la administración le viola un derecho o amenaza con hacerlo, por la deficiente prestación del servicio.",
        },
        {
          id: "SUGERENCIA",
          title: "SUGERENCIA",
          content:
            "Es aquella expresión que manifiesta un ciudadano donde busca colaborar con el mejoramiento de los servicios que presta la entidad.",
        },
        {
          id: "RENDICION",
          title: "RENDICIÓN DE CUENTAS",
          content:
            "Es la acción, como deber legal y ético que tiene todo funcionario o persona de responder e informar por la administración, manejo y rendimientos de fondos, bienes o recursos públicos asignados y los resultados en el cumplimiento del mandato que le ha sido conferido.",
        },
        {
          id: "ACCION-CUMPLIMIENTO",
          title: "ACCIÓN DE CUMPLIMIENTO",
          content:
            "Es la acción que tiene derecho todo ciudadano o funcionario de acudir a la autoridad judicial en búsqueda de exigir el cumplimiento de la ley o acto administrativo que está omitiendo la entidad. Esta se encamina a realizar la efectividad de las leyes y actos administrativos.",
        },
        {
          id: "ACCION-TUTELA",
          title: "ACCIÓN DE TUTELA",
          content:
            "El mecanismo por el cual todo Ciudadano puede solicitar ante los jueces protección inmediata a sus Derechos fundamentales, cuando estos son amenazados por un acto u omisión de la entidad o individuo en circunstancias establecidas por la ley.",
        },
        {
          id: "AUDIENCIAS",
          title: "AUDIENCIAS PÚBLICAS",
          content:
            "Son foros abiertos a la ciudadanía, convocados por la administración pública con el fin de involucrar a los ciudadanos y organizaciones de la sociedad civil en la formulación, ejecución, control y evaluación de la gestión pública.",
        },
        {
          id: "TRAMITE",
          title: "TRÁMITE",
          content:
            "Es una serie de actos regulados que los ciudadanos deben seguir para obtener o modificar derechos, cumplir obligaciones o realizar actos reglados. Comienza con los ciudadanos que ponen en marcha instituciones públicas y termina con decisiones sustantivas administrativas.",
        },
        {
          id: "VEEDURIAS",
          title: "VEEDURÍAS CIUDADANAS",
          content:
            "Es el mecanismo democrático que permite a los ciudadanos y sociedad civil en general ejercer vigilancia sobre la gestión pública en el territorio.",
        },
      ],
    },
    {
      id: "estrategias-participacion",
      title: "ESTRATEGIAS DE PARTICIPACIÓN CIUDADANA",
      content:
        "La Estrategia de Participación Ciudadana de la Alcaldía de Nobsa es una herramienta de gestión pública diseñada para promover la intervención activa, informada y corresponsable de la ciudadanía en los asuntos públicos del municipio.\n\nSu objetivo principal es fortalecer los lazos entre la administración municipal y la comunidad, garantizando canales efectivos, transparentes e incluyentes de diálogo, consulta, concertación, toma de decisiones y control social.",
    },
    {
      id: "estrategia-rendicion",
      title: "ESTRATEGIA ANUAL DE RENDICIÓN DE CUENTAS",
      content:
        "De acuerdo con el artículo 48 de la Ley 1757 de 2015, la rendición de cuentas es un proceso mediante el cual las entidades públicas informan, explican y dan a conocer los resultados de su gestión a la ciudadanía y organismos de control.\n\nLa estrategia de la Alcaldía de Nobsa se fundamenta en transparencia, buen gobierno y diálogo social, siguiendo lo establecido en el Conpes 3654 de 2010 y la versión 2 de 2015 de las Estrategias para el Plan Anticorrupción y de Atención al Ciudadano.",
    },
    {
      id: "PAAC",
      title:
        "PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO (PAAC) - Programa de Ética Pública",
      content: `Comprometidos con la Transparencia, la Integridad y el Buen Gobierno

En el marco del fortalecimiento institucional y el compromiso con una gestión pública ética, transparente y participativa, la Alcaldía de Nobsa presenta la evolución del Plan Anticorrupción y de Atención al Ciudadano (PAAC) al nuevo Programa de Ética.

Este programa nace como una estrategia integral que no solo da continuidad a las acciones del PAAC, sino que también amplía su alcance, promoviendo una cultura organizacional basada en principios éticos, el respeto por lo público, la rendición de cuentas y la lucha contra la corrupción.`,
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
          id: "rendicion-cuentas",
          title: "Componente rendición de cuentas. ",
          link: "https://drive.google.com/file/d/1ULwu-79uG8MZmwh9QRlXJEMG293LXw2I/view?usp=drive_link",
        },
      ],
    },

    {
      id: "informes-rendicion-cuentas-generales",
      title: "INFORMES DE RENDICIÓN DE CUENTAS GENERALES",

      subsections: [
        {
          id: "informe-rendicion-cuentas-generales",
          title: "INFORMES DE RENDICIÓN DE CUENTAS GENERALES",
          link: "https://www.nobsa-boyaca.gov.co/buscar?q=rendici%C3%B3n%20de%20cuentas",
        },
      ],
    },
    {
      id: "convocatorias-para-la-participacion-de-la-ciudadania",
      title: "CONVOCATORIAS PARA LA PARTICIPACIÓN DE LA CIUDADANÍA",

      subsections: [
        {
          id: "convocatoria-ciudadania",
          title: "INFORMES DE RENDICIÓN DE CUENTAS GENERALES",
          link: "https://www.nobsa-boyaca.gov.co/buscar?q=rendici%C3%B3n%20de%20cuentas",
        },
      ],
    },

    {
      id: "calendario-estrategia-participacion-ciudadana",
      title: "CALENDARIO DE LA ESTRATEGIA ANUAL DE PARTICIPACIÓN CIUDADANA.",

      subsections: [
        {
          id: "calendario-ciudadania",
          title:
            "CALENDARIO DE LA ESTRATEGIA ANUAL DE PARTICIPACIÓN CIUDADANA.",
          link: "https://drive.google.com/file/d/1ULwu-79uG8MZmwh9QRlXJEMG293LXw2I/view?usp=drive_link",
        },
      ],
    },
    {
      id: "formulario-participacion-ciudadana",
      title:
        "FORMULARIO DE INSCRIPCIÓN CIUDADANA A PROCESOS DE PARTICIPACIÓN, INSTANCIAS O ACCIONES QUE OFRECE LA ENTIDAD",

      subsections: [
        {
          id: "formulario-ciudadania",
          title:
            "FORMULARIO DE INSCRIPCIÓN CIUDADANA A PROCESOS DE PARTICIPACIÓN, INSTANCIAS O ACCIONES QUE OFRECE LA ENTIDAD",
          link: "https://www.nobsa-boyaca.gov.co/contactenos/",
        },
      ],
    },
    {
      id: "canal-participacion-ciudadana",
      title:
        "CANAL DE INTERACCIÓN DELIBERATORIA PARA LA PARTICIPACIÓN CIUDADANA",

      subsections: [
        {
          id: "formulario-ciudadania",
          title:
            "CANAL DE INTERACCIÓN DELIBERATORIA PARA LA PARTICIPACIÓN CIUDADANA.",
          link: "https://www.nobsa-boyaca.gov.co/contactenos/",
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
