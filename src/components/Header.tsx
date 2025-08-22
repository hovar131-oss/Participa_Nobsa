import React from "react";
import { Shield } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b-4 border-red-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/logo_alcaldia.png"
              alt="Logo"
              className="h-full w-full md:h-3/6 md:w-52"
            />
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Participa - Municipio de Nobsa
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
