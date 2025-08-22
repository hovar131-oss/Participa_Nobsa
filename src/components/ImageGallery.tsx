import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Reunión ciudadana en el municipio",
      title: "Participación Ciudadana",
      description:
        "Ciudadanos participando activamente en las decisiones municipales",
    },
    {
      id: "2",
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Foro comunitario",
      title: "Foros Comunitarios",
      description: "Espacios de diálogo y construcción colectiva",
    },
    {
      id: "3",
      src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Audiencia pública",
      title: "Audiencias Públicas",
      description: "Rendición de cuentas transparente a la comunidad",
    },
    {
      id: "4",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Consulta ciudadana",
      title: "Consultas Ciudadanas",
      description: "Tu opinión cuenta en las decisiones importantes",
    },
    {
      id: "5",
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Propuestas ciudadanas",
      title: "Propuestas Ciudadanas",
      description: "Ideas innovadoras para el desarrollo municipal",
    },
    {
      id: "6",
      src: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Eventos municipales",
      title: "Eventos Municipales",
      description: "Actividades que fortalecen nuestra comunidad",
    },
  ];

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + galleryImages.length) % galleryImages.length
        : (currentIndex + 1) % galleryImages.length;

    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Galería de Participación
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Conoce las diferentes actividades y espacios donde los ciudadanos de
          Nobsa participan activamente en la construcción de nuestro municipio.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => openModal(image, index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="text-sm font-semibold">Ver más</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                {image.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              title="Cerrar"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              title="Cerrar"
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              title="Cerrar"
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
