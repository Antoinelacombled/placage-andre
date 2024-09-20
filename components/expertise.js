import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Section Expertise (anciennement Collections en vedette)
const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const expertises = [
    {
      name: "Wave",
      image: "/photo_2.avif",
      description:
        "The Wave series gives even the humblest of spaces an elegant and quiet beauty. It captures the serene beauty of the 'sea'. Waves crashing in the distance, evokes sense of tranquility",
    },
    {
      name: "Expertise 1",
      image: "/photo_1.avif",
      description:
        "The style of the Arch series is based on a series of perfectly proportioned lines and curves, resulting in this unique artwork.",
    },
    {
      name: "Expertise 3",
      image: "/photo_3.avif",
      description:
        'Our Kvadrat Really series is made from "waste" wool textiles. The multiple layers creates a tactile and sculptural look. They are frame in handmade solid oak frames.',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    gsap.set(cards, { autoAlpha: 0, y: 50 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      start: "top 80%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-light">Expertises</h2>
          <a
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            Discover all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {expertises.map((expertise, index) => (
            <div
              key={expertise.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={expertise.image}
                  alt={expertise.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-40">
                  <h3 className="mb-4 text-4xl font-light">{expertise.name}</h3>
                  <p className="text-sm font-light line-clamp-3">
                    {expertise.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section Produits
const ProductsSection = () => {
  const products = [
    {
      name: "Wave Tile Set",
      image: "/product.avif",
      price: "À partir de €341,95",
      color: "Sand Beige",
      variants: ["beige", "black", "blue", "green", "gray"],
    },
    {
      name: "Arch - Arturel X Kvadrat",
      image: "/product.avif",
      price: "À partir de €349,95",
      color: "Natural",
      variants: ["beige", "gray"],
      promo: true,
    },
    {
      name: "Stone",
      image: "/product.avif",
      price: "À partir de €888,95",
      color: "Sand/Black",
      variants: ["beige", "black", "blue", "green", "gray", "brown"],
    },
    {
      name: "Série Arch",
      image: "/product.avif",
      price: "À partir de €272,95",
      color: "Bleu océan",
      variants: ["blue", "black", "beige", "green"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-light">Nos produits</h2>
          <a
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            All products
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative mb-4 overflow-hidden aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {product.promo && (
                  <span className="absolute px-2 py-1 text-xs font-semibold bg-yellow-400 top-2 right-2">
                    Promo
                  </span>
                )}
              </div>
              <h3 className="mb-1 text-lg font-medium">{product.name}</h3>
              <p className="mb-2 text-sm text-gray-600">{product.price}</p>
              <p className="mb-2 text-sm text-gray-500">{product.color}</p>
              <div className="flex space-x-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExpertiseSection, ProductsSection };
