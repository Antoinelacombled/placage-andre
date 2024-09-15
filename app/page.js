"use client";

import React, { useRef, useEffect } from "react";

import { ExpertiseSection } from "../components/expertise";
import { ProductsSection } from "../components/expertise";
import googleMapReact from "google-map-react";
import Maps from "@/components/maps";

export default function Home() {
  const videoRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Lecture de la vidéo
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erreur lors de la lecture de la vidéo :", error);
      });
    }
  }, []);

  const testimonials = [
    {
      name: "Simona Mirea",
      role: "Founder Hearth Agency",
      comment:
        "Wonderful, life saving experience a lot of time and energy. I highly recommend them and will definitely be back!",
      rating: 5,
    },
    {
      name: "Leila Lina",
      role: "Manager, Avallonis LLC",
      comment:
        "The flight and service went very smoothly, all the staff were very pleasant and professional. Thank you for an amazing vacation!",
      rating: 5,
    },
    {
      name: "Xavier Werren",
      role: "Head Coordinator, Swiss Academics",
      comment:
        "My experience with Placages André has been exceptional. Despite having contacted them at the last minute, they have fulfilled all my requests. Attention to detail what they have is exactly what you would like to have, au revoir!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen font-sans bg-white">
      {/* Header */}
      <header
        ref={headerRef}
        className="text-white fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 py-4 px-6"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Placages André</div>
          <nav>
            <ul className="flex space-x-20">
              {["Produits", "À propos", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-gray-900 transition-colors backdrop-invert-0"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Section d'accueil */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-light leading-tight max-w-4xl mb-4">
            Négociant en bois
            <br />
            Paris intra-muros
          </h1>
          <p className="text-white text-xl sm:text-2xl font-light max-w-2xl mb-8">
            Entreprise familiale spécialisée dans le commerce de bois, la
            découpe de bois et la livraison de bois depuis 1958
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Découvrir nos produits
          </button>
        </div>
      </section>

      <ExpertiseSection />

      <ProductsSection />

      {/* Section Témoignages Clients (mise à jour) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">
            Avis de nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Maps />
      </section>
    </main>
  );
}
