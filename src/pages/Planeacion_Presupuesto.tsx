import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PieChart, TrendingUp, DollarSign } from "lucide-react";

const PlanningBudgetPage: React.FC = () => {
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
            Planeación y Presupuesto
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Participa en las decisiones presupuestales del municipio
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <PieChart className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Planeación Participativa
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              La planeación participativa permite que los ciudadanos se
              involucren directamente en la definición de prioridades y la
              asignación de recursos públicos, garantizando que las inversiones
              respondan a las necesidades reales de la comunidad.
            </p>
          </div>

          {/* Budget Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Plan de Desarrollo
              </h3>
              <p className="text-gray-600 mb-4">
                Conoce los objetivos, metas y estrategias del Plan de Desarrollo
                Municipal y cómo puedes contribuir a su implementación.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Ver plan completo →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <DollarSign className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Presupuesto Participativo
              </h3>
              <p className="text-gray-600 mb-4">
                Participa en la definición de proyectos de inversión pública y
                ayuda a decidir cómo se utilizan los recursos del municipio.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                Participar en presupuesto →
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Participa en la planeación
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Tu conocimiento del territorio y tus necesidades son fundamentales
              para una planeación efectiva. Únete a los espacios de
              participación.
            </p>
            <button
              onClick={() => navigate("/contacto")}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Participar en planeación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningBudgetPage;
