import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  Carrera 10 # 6-40<br />
                  Nobsa, Boyacá, Colombia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">(+57) 8 740 0123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">participacion@nobsa-boyaca.gov.co</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Horarios de Atención</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Lunes a Viernes</p>
                  <p className="text-sm text-gray-400">7:30 AM - 11:30 AM</p>
                  <p className="text-sm text-gray-400">1:30 PM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">Transparencia</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">PQRS</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">Normatividad</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">Plan de Desarrollo</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Alcaldía Municipal de Nobsa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;