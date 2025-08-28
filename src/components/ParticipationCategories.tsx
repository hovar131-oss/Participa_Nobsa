import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  PieChart,
  MessageSquare,
  FileText,
  Shield,
  Lightbulb,
} from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
  icon: React.ReactNode;
  color: string;
}

const ParticipationCategories: React.FC = () => {
  const navigate = useNavigate();

  const categories: CategoryCard[] = [
    {
      id: "participation",
      title: "Participación",
      description:
        "para diagnostico de necesidades e identificación de problemas",
      imageUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/participacion",
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "planning-budget",
      title: "Planeación y Presupuesto",
      description:
        "Información sobre la planificación municipal y participación en decisiones presupuestales",
      imageUrl:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/planeacion-presupuesto",
      icon: <PieChart className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: "citizen-consultation",
      title: "Consulta Ciudadana",
      description:
        "Procesos de consulta y diálogo directo con la comunidad para la toma de decisiones",
      imageUrl:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/consulta-ciudadana",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "innovation",
      title: "Colaboración e Innovación Abierta",
      description:
        "Fomentar la co-creación de soluciones y la participación activa de la comunidad en procesos de innovación pública.",
      imageUrl:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/innovacion",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600",
    },

    {
      id: "accountability",
      title: "Rendición de Cuentas",
      description:
        "Transparencia en la gestión pública y rendición de cuentas a la ciudadanía",
      imageUrl:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/rendicion-cuentas",
      icon: <FileText className="h-8 w-8" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: "social-control",
      title: "Control Social",
      description:
        "Mecanismos de vigilancia y control ciudadano sobre la gestión pública municipal",
      imageUrl:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      route: "/control-social",
      icon: <Shield className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Áreas de Participación Ciudadana
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explora las diferentes áreas donde puedes participar activamente en la
          gestión pública del Municipio de Nobsa. Cada sección contiene
          información detallada y herramientas específicas para tu
          participación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCardClick(category.route)}
            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
              />

              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {React.cloneElement(category.icon as React.ReactElement, {
                    className: "h-5 w-5",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                {category.description}
              </p>

              {/* Call to Action */}
              <div className="mt-4 flex items-center text-red-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Explorar</span>
                <svg
                  className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipationCategories;
