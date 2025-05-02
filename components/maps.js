// components/Maps.js
"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  ),
});

export default function Maps() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <MapComponent />
    </div>
  );
}
