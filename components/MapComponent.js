"use client";

import React, { useEffect, useRef } from "react";

export default function MapComponent() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Import dynamique de Leaflet uniquement côté client
    const loadMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      // Correction des icônes
      const iconRetinaUrl =
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
      const iconUrl =
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
      const shadowUrl =
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

      const icon = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      });

      if (!mapInstance.current) {
        // Initialisation de la carte
        mapInstance.current = L.map(mapRef.current).setView(
          [48.8453749, 2.3947583],
          16
        );

        // Ajout du fond de carte
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.current);

        // Ajout du marqueur
        markerRef.current = L.marker([48.8453749, 2.3947583], { icon })
          .addTo(mapInstance.current)
          .bindPopup("Placages André<br>30-34 rue de Picpus, 75012 Paris")
          .openPopup();

        // Désactiver le zoom avec la molette
        mapInstance.current.scrollWheelZoom.disable();
      }
    };

    loadMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}
