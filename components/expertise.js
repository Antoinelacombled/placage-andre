import Image from "next/image";

// Section Expertise (anciennement Collections en vedette)
const ExpertiseSection = () => {
  const expertises = [
    {
      name: "Expertise 1",
      image: "/photo_1.avif",
      description:
        "The style of the Arch series is based on a series of perfectly proportioned lines and curves, resulting in this unique artwork.",
    },
    {
      name: "Expertise 2",
      image: "/photo_2.avif",
      description:
        'The Wave series gives even the humblest of spaces an elegant and quiet beauty. It captures the serene beauty of the "sea". Waves crashing in the distance, evokes sense of tranquility',
    },
    {
      name: "Expertise 3",
      image: "/photo_3.avif",
      description:
        'Our Kvadrat Really series is made from "waste" wool textiles. The multiple layers creates a tactile and sculptural look. They are frame in handmade solid oak frames.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-light">Expertises</h2>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Discover all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((expertise) => (
            <div key={expertise.name} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={expertise.image}
                  alt={expertise.name}
                  layout="fill"
                  objectFit="cover"
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-4xl font-light">
                    {expertise.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{expertise.description}</p>
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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-light">Nos produits</h2>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            All products
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                {product.promo && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1">
                    Promo
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.price}</p>
              <p className="text-gray-500 text-sm mb-2">{product.color}</p>
              <div className="flex space-x-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExpertiseSection, ProductsSection };
