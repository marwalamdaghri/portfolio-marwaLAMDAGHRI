"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useTheme } from "next-themes"

const places = [
  {
    position: [35.7595, -5.834] as [number, number],
    title: "Tanger",
    detailKey: "tanger",
  },
  {
    position: [35.2517, -3.9372] as [number, number],
    title: "Al Hoceima",
    detailKey: "hoceima",
  },
  {
    position: [33.9287, -6.9074] as [number, number],
    title: "Témara",
    detailKey: "temara",
  },
  {
    position: [35.1681, -2.9287] as [number, number],
    title: "Nador",
    detailKey: "nador",
  },
]

function createPinIcon() {
  return L.divIcon({
    className: "",
    html: `<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.5 12.02 20.72 12.53 21.2a2.1 2.1 0 0 0 2.94 0C15.98 34.72 28 23.5 28 14 28 6.27 21.73 0 14 0z" fill="#2e77a8" stroke="#ffffff" stroke-width="2"/>
      <circle cx="14" cy="13.5" r="5" fill="#ffffff"/>
    </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 34],
    popupAnchor: [0, -32],
  })
}

function ThemeSync() {
  const { resolvedTheme } = useTheme()
  const map = useMap()

  useEffect(() => {
    document.querySelectorAll(".leaflet-tile-pane").forEach((pane) => {
      const el = pane as HTMLElement
      el.style.filter = resolvedTheme === "dark" ? "invert(1) hue-rotate(185deg) brightness(0.95) contrast(0.9) saturate(0.7)" : ""
    })
  }, [resolvedTheme, map])

  return null
}

export default function MapView({ labels }: { labels: Record<string, string> }) {
  return (
    <div className="relative z-0 h-[380px] w-full rounded-xl overflow-hidden border border-border">
      <MapContainer center={[34.55, -5.6]} zoom={7} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ThemeSync />
        {places.map((place) => (
          <Marker key={place.title} position={place.position} icon={createPinIcon()}>
            <Popup>
              <strong>{place.title}</strong>
              <br />
              {labels[place.detailKey]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
