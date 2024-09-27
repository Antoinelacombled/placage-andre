import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const DoubleCard = () => {
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  return (
    <div className="flex flex-col space-y-6" style={{ width: "340px" }}>
      {/* Carte du dessus */}
      <div
        className="relative overflow-hidden transition-all duration-300 ease-out transform border border-gray-300 shadow-lg cursor-pointer rounded-xl"
        style={{
          height: "200px",
          transform: isHoveredTop
            ? "translateY(-10px) rotate(2deg)"
            : "translateY(0) rotate(0)",
          transition: "transform 0.3s ease-out",
        }}
        onMouseEnter={() => setIsHoveredTop(true)}
        onMouseLeave={() => setIsHoveredTop(false)}
      >
        <Image
          src="/test.avif"
          alt="Dernière réalisation"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-out transform"
          style={{ transform: isHoveredTop ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Dernière réalisation
          </h3>
          <div className="flex items-center text-white">
            <span className="mr-2 text-sm font-medium">Voir plus</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 ease-out"
              style={{
                transform: isHoveredTop ? "translateX(5px)" : "translateX(0)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Carte du dessous */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out bg-white border border-gray-300 shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl"
        style={{
          transform: isHoveredBottom ? "translateY(-5px)" : "translateY(0)",
        }}
        onMouseEnter={() => setIsHoveredBottom(true)}
        onMouseLeave={() => setIsHoveredBottom(false)}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full">
              <Image
                src="/map.png"
                alt="Carte"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                Comment nous trouver ?
              </h4>
            </div>
          </div>
          <div className="flex items-center mb-4 text-white">
            <MapPin size={18} className="mr-2" />
            <span className="text-sm">123 Rue de Paris, 75012 Paris</span>
          </div>
          <div className="flex items-center mb-4 text-white">
            <Clock size={18} className="mr-2" />
            <span className="text-sm text-white">Lun-Ven: 9h-18h</span>
          </div>
          <button className="flex items-center justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors duration-300 bg-green-600 rounded-full hover:bg-green-700">
            <a
              href="https://maps.app.goo.gl/T5nxXDsVJwcPCdx87"
              className="mr-2 text-white"
            >
              Voir sur la carte
            </a>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleCard;
