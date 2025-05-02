"use client";

import React, { useRef, useEffect } from "react";

import { ExpertiseSection } from "../components/expertise";
import { ProductsSection } from "../components/expertise";
import googleMapReact from "google-map-react";
import Maps from "@/components/maps";
import Image from "next/image";
import NextImage from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import DoubleCard from "@/components/doubleCard";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

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
      name: "Guillaume Bourin",
      role: "",
      comment:
        "Bon service, rapide, et prix raisonnables. J'avais besoin de bandes de bois d'une largeur inférieure à 10cm, et la plupart des négociants refusent ce type de prestation. Mais Placages André me l'a fait en moins de 10min. Je recommande.",
      rating: 5,
    },
    {
      name: "Nicolas François",
      role: "",
      comment:
        "Plusieurs années que je me fournis chez Placages André en tant que menuisier-ébéniste (agencement principalement) ; c'est une vraie chance de trouver une telle société en plein Paris !",
      rating: 5,
    },
    {
      name: "Sergiu Zancu",
      role: "",
      comment:
        "Accueil attentif, service compétent, matériaux de qualité, prix raisonnables.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen font-sans bg-white">
      {/* Header */}
      <Header />

      {/* Section d'accueil */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 object-cover w-full h-full"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 bg-black bg-opacity-40 sm:px-12 lg:px-24">
          <h1 className="max-w-4xl mb-4 text-4xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
            Négociant en bois
            <br />
            Paris intra-muros
          </h1>
          <p className="max-w-2xl mb-8 text-xl font-light text-white sm:text-2xl">
            Entreprise familiale <b>spécialisée dans le commerce de bois</b>, la
            découpe de bois et la livraison de bois <b>depuis 1957</b>
          </p>
          <button className="px-8 py-3 text-gray-900 transition-all duration-300 bg-white rounded-full hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-green-600">
            Contactez-nous
          </button>
          <div className="absolute hidden bottom-16 right-24 lg:block">
            <DoubleCard />
          </div>
        </div>
      </section>

      <ExpertiseSection />

      {/* <ProductsSection /> */}

      {/* Section Témoignages Clients (mise à jour) */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-4xl font-light text-center text-black">
            Avis de nos clients
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 text-black bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-black">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4 text-black">{testimonial.comment}</p>
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
      <Contact />
      <Footer />
    </main>
  );
}
