import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    // État initial
    gsap.set(header, {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      padding: "1rem 2rem",
      zIndex: 1000,
      backgroundColor: "rgba(250, 250, 250, 0.1)", // Gris initial avec opacité
    });

    // Animation déclenchée après 800px de défilement
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "body",
          start: "600px top",
          end: "+=100",
          scrub: true,
        },
      })
      .to(header, {
        top: "20px",
        left: "20%",
        right: "20%",
        borderRadius: "2rem",
        padding: ".8rem 3rem",
        mixBlendMode: "difference", // Effet d'inversion de couleur
        backdropFilter: "blur(5px)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.01)",
      });
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex items-center justify-between text-white transition-all duration-300 ease-in-out"
    >
      <div className="text-2xl font-bold tracking-normal">Placages André</div>
      <nav>
        <ul className="flex space-x-20">
          {["Produits", "À propos", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="transition-colors hover:text-gray-200 hover:underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
