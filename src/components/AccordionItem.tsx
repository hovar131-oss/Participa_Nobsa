import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Subsection {
  id: string;
  title: string;
  content?: string;
  link?: string;
}

interface AccordionItemProps {
  id: string;
  title: string;
  content?: string;
  subsections?: Subsection[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  subsections,
  isOpen,
  onToggle,
}) => {
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
      {/* Botón principal */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left transition-all duration-200 ${
          isOpen
            ? "bg-red-600 text-white"
            : "bg-white text-gray-900 hover:bg-gray-50"
        }`}
      >
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        {isOpen ? (
          <Minus className="h-6 w-6 flex-shrink-0" />
        ) : (
          <Plus className="h-6 w-6 flex-shrink-0" />
        )}
      </button>

      {/* Contenido */}
      {isOpen && (
        <div className="p-6 border-t border-gray-100">
          {content && (
            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line justify-center text-justify">
              {content}
            </p>
          )}

          {subsections && (
            <div className="space-y-4">
              {subsections.map((subsection) =>
                subsection.link ? (
                  // 🔗 Caso con link
                  <a
                    key={subsection.id}
                    href={subsection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-justify block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 hover:underline text-black font-semibold text-sm md:text-base transition"
                  >
                    {subsection.title}
                  </a>
                ) : (
                  // 📖 Caso con contenido desplegable (subacordeón)
                  <div
                    key={subsection.id}
                    className="rounded-lg border border-gray-200"
                  >
                    <button
                      onClick={() =>
                        setOpenSub(
                          openSub === subsection.id ? null : subsection.id
                        )
                      }
                      className={`w-full flex justify-between text-justify items-center p-4 text-left font-semibold text-sm md:text-base transition
                        ${
                          openSub === subsection.id
                            ? "bg-gray-200 text-gray-900"
                            : "bg-gray-50 text-black hover:bg-gray-100"
                        }`}
                    >
                      {subsection.title}
                      {openSub === subsection.id ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </button>
                    {openSub === subsection.id && subsection.content && (
                      <div className="px-4 pb-4 text-gray-700 text-sm md:text-base leading-relaxed bg-white whitespace-pre-line">
                        {subsection.content}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
