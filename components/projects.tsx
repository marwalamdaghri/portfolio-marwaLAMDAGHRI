"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderGit2, ImageIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Web GIS Solution Development for Market Management and Monitoring – GEOFLY",
    description:
      "Complete development of a WebGIS solution for market management, monitoring and visualization for GEOFLY. The project includes an authentication interface, dashboard, 2D/3D maps, associated market management, email notifications, and a complete CRUD system.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL/PostGIS",
      "GeoServer",
      "Leaflet",
      "Mapbox",
      "TailwindCSS",
      "REST API",
      "JWT",
      "Authentication"
    ],
    images: [
      // --- 1. INTRO (img 1 & img 2) ---
      { src: "/projects/PFA/img1.png", alt: "General overview of the GEOFLY platform" },
      { src: "/projects/PFA/img2.png", alt: "Second general overview of the platform" },

      // --- 2. AUTHENTICATION ---
      { src: "/projects/PFA/connexionpage.png", alt: "Login page" },
      { src: "/projects/PFA/Annotation 2025-11-01 120905.png", alt: "Annotation interface" },

      // --- 3. EMAIL CONFIRMATION + FORGOT PASSWORD ---
      { src: "/projects/PFA/EmailConfirmation.png", alt: "Email confirmation sent" },
      { src: "/projects/PFA/LienConfirmation.png", alt: "Email confirmation link" },
      { src: "/projects/PFA/MDPOubliéEmail.png", alt: "Forgot password form" },
      { src: "/projects/PFA/MDPOubliéAvecMessage.png", alt: "Password recovery email sent" },
      { src: "/projects/PFA/NouveauMDPAvecMessage.png", alt: "New password confirmation" },

      // --- 4. MAIN INTERFACE & NAVIGATION ---
      { src: "/projects/PFA/Dashboard22.png", alt: "Main dashboard" },
      { src: "/projects/PFA/bare4.png", alt: "Market management page" },
      { src: "/projects/PFA/vue_tableau.png", alt: "Market management page in table view" },
      { src: "/projects/PFA/ajouter.png", alt: "Add a market page" },
      { src: "/projects/PFA/modifier2.png", alt: "Market modification form" },
      { src: "/projects/PFA/detail.png", alt: "Market details" },
      { src: "/projects/PFA/visualisation_marche_2.png", alt: "Market geometric details" },
      { src: "/projects/PFA/docsDEtail.png", alt: "Details of folders linked to a market" },
      { src: "/projects/PFA/map_2d.png", alt: "2D GIS map" },
      { src: "/projects/PFA/map_3D.png", alt: "3D GIS map" },
      { src: "/projects/PFA/recherche_map.png", alt: "Map search" },
      { src: "/projects/PFA/recherche_zone.png", alt: "Area search on map" },
      { src: "/projects/PFA/dessin_2d.png", alt: "2D market drawing" },
      { src: "/projects/PFA/detail_geometry3D.png", alt: "3D market geometric details" },
      { src: "/projects/PFA/barre.png", alt: "Navigation bar" },
      { src: "/projects/PFA/page.png", alt: "User management page" },
      { src: "/projects/PFA/recherche_resultat.png", alt: "User search" },
      { src: "/projects/PFA/modifier.png", alt: "Edit user" },
      { src: "/projects/PFA/marcheAssocies.png", alt: "List of markets associated with a user" },
      { src: "/projects/PFA/supprimer.png", alt: "Delete (archive) a user" },
    ],
    videos: [],
  },
  {
    title: "Android Application - Infrastructure Defect Reporting",
    description:
      "Mobile application for reporting sanitation infrastructure defects with photos and geolocation. Login interface, reporting with photo capture, location selection on interactive map, and display of all previous reports.",
    technologies: ["Android Studio", "Java", "Geolocation", "Database", "Authentication"],
    images: [],
    videos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigSignalement-2qvMLzVw3x5mo5jWRWIVunQ6HLLV7p.mp4",
        alt: "Reporting application demonstration"
      }
    ],
  },
  {
    title: "QGIS Plugin - Urban Planning Exemption Validation",
    description:
      "QGIS plugin developed in Python for decision support on urban planning exemptions. Automatic analysis of spatial and regulatory constraints: minimum area verification (1ha), 1km buffer, avoidance of protected lands, and limitation to 5 exemptions per zone.",
    technologies: ["Python", "PyQGIS", "Qt Designer", "Spatial Analysis", "GIS"],
    images: [
      {
        src: "/projects/qgis-plugin/interface-main.jpg",
        alt: "Main QGIS interface with all spatial layers",
      },
      {
        src: "/projects/qgis-plugin/dialog-empty.jpg",
        alt: "Plugin interface - input form",
      },
      {
        src: "/projects/qgis-plugin/dialog-analysis.jpg",
        alt: "Analysis in progress with search area displayed",
      },
      {
        src: "/projects/qgis-plugin/results-success.jpg",
        alt: "Results - Compliant project without conflicts",
      },
      {
        src: "/projects/qgis-plugin/results-conflict.jpg",
        alt: "Results - Conflicts detected requiring revision",
      },
      {
        src: "/projects/qgis-plugin/map-intersections.jpg",
        alt: "Map of intersections with protected areas",
      },
    ],
  },
  {
    title: "Google Earth Engine - Urbanization Impact on Green Spaces",
    description:
      "Analysis of Tangier's urbanization between 2016 and 2023 and its impact on the disappearance of green spaces. Use of Google Earth Engine for satellite image processing, land use change detection, and analysis report generation.",
    technologies: ["Google Earth Engine", "Remote Sensing", "JavaScript", "Temporal Analysis"],
    images: [
      {
        src: "/projects/GEE/ndvi1.png",
        alt: "NDVI vegetation evolution – Year 2016",
      },
      {
        src: "/projects/GEE/ndvi2.png",
        alt: "NDVI vegetation evolution – Year 2023",
      },
      {
        src: "/projects/GEE/diffNdbi.png",
        alt: "NDVI difference map (2016–2023)",
      },
      {
        src: "/projects/GEE/ndbi1.png",
        alt: "NDBI urbanization evolution – Year 2016",
      },
      {
        src: "/projects/GEE/ndbi2.png",
        alt: "NDBI urbanization evolution – Year 2023",
      },
      {
        src: "/projects/GEE/betonise.png",
        alt: "Urbanized areas map (2016–2023)",
      },
    ],
  },
  {
    title: "Marrakech-Safi Regional Dynamics Analysis",
    description:
      "Team project analyzing socio-economic dynamics, environmental impacts and infrastructure developments in the Marrakech-Safi region. Use of spatial interpolation, network analysis, and remote sensing data processing.",
    technologies: ["QGIS", "ArcGIS", "Python", "Spatial Analysis", "Remote Sensing"],
    images: [
      {
        src: "/projects/marrakech/carte.jpg",
        alt: "Water production and number of consumers in 2020 in the Marrakech-Safi region",
      },
      {
        src: "/projects/marrakech/carte2.jpg",
        alt: "Energy consumed and renewable energies in the Marrakech-Safi region in 2020",
      },
      {
        src: "/projects/marrakech/carte3.jpg",
        alt: "Road network and road construction in the Marrakech-Safi region in 2021",
      },
      {
        src: "/projects/marrakech/carte4.jpg",
        alt: "Normal capacity of dams and their filling rate in 2021 in the Marrakech-Safi region",
      },
    ],
  },
  {
    title: "VBA Application - Automated Topographic Calculations",
    description:
      "Excel application using VBA to automate topographic calculations: leveling, coordinate transformations, distance and azimuth calculations. Intuitive interface allowing field data entry and instant generation of precise results.",
    technologies: ["VBA", "Excel", "Topography", "Coordinate systems"],
    images: [],
  },
  {
    title: "Spatial Analysis of Crime Distribution",
    description:
      "Statistical analysis of the spatial distribution of 24 crime points in a 64 km² study area. Application of quadrat method and nearest neighbor method to identify patterns and concentrations of criminal activity.",
    technologies: ["Spatial Analysis", "Statistics", "GIS", "Quantitative methods"],
    images: [
      {
        src: "/mas.png",
        alt: "Point cloud of coordinates (X,Y)",
      },
    ],
  },
  {
    title: "Optimal Location of a Wastewater Treatment Plant (Ouazzane)",
    description:
      "Multi-criteria spatial analysis to determine the optimal location for a wastewater treatment plant in Ouazzane. Use of ArcMap Model Builder for automation, ArcScene for 3D visualization, and analysis of criteria: altitude, proximity to rivers, distance from residential areas.",
    technologies: ["ArcMap", "Model Builder", "ArcScene", "Multi-criteria Analysis", "GIS"],
    images: [],
    videos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-zgVDJMCzPvvmXu6PfhPD7aem6YnId9.mp4",
        alt: "Results demonstration"
      }
    ],
  },
  {
    title: "E-commerce Website",
    description:
      "Development of an e-commerce website with complete CRUD functionalities for order, customer and product management. Implementation of admin and customer roles, advanced search filters, and modern user interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Database"],
    images: [],
  },
  {
    title: "Python Application - Geodetic Coordinate Conversion",
    description:
      "Python application with Tkinter interface for geodetic coordinate conversion and surface calculation. Resolution of direct/inverse problems on spheres and ellipsoids (Clarke 1880, WGS84) with Puissant and Gauss methods. Dynamic map display and calculation of Morocco's surface area.",
    technologies: ["Python", "Tkinter", "Geodesy", "Cartography", "Geometric calculations"],
    images: [],
  },
  {
    title: "Multi-criteria Analysis - School Location (ArcMap)",
    description:
      "Project to find optimal site for a new school in Stowe, Vermont. Weighted multi-criteria analysis considering: distance from existing schools, flat terrain, proximity to recreational sites, and soil suitability. Use of raster (elevation, land use) and vector (roads, schools, recreation) data.",
    technologies: ["ArcMap", "Multi-criteria Analysis", "Raster", "Weighting", "GIS"],
    images: [
      {
        src: "/projects/newSchool/model1.jpg",
        alt: "Model builder to find the optimal site",
      },
      {
        src: "/projects/newSchool/site.jpg",
        alt: "Final map of the optimal site for the new school",
      },
    ],
  },
  {
    title: "Coastal Erosion Study - Tangier Bay",
    description:
      "Study of coastline instability in Tangier Bay threatening urban infrastructure. Georeferencing of multi-date aerial photos (1963 and 1996) and topographic maps. Identification of priority protection areas between Tanger-ville port and Gandouri area.",
    technologies: ["ArcMap", "Georeferencing", "Aerial photos", "Temporal analysis", "Cartography"],
    images: [
      {
        src: "/projects/cote/cote.jpg",
        alt: "Map showing coastline in 1963 and 1996 and risk areas in Tangier",
      },
    ],
  },
  {
    title: "Topographic Survey - FSTT Parking",
    description:
      "Complete topographic survey of the Faculty of Sciences and Techniques of Tangier parking lot. Field data collection, precise measurements, data processing, and development of detailed topographic plans.",
    technologies: ["Topography", "Total station", "GPS", "AutoCAD", "Field survey"],
    images: [
      {
        src: "/projects/leve.jpg",
        alt: "Survey of the Faculty of Sciences and Techniques of Tangier parking lot",
      },
    ],
  },
]

function ProjectGallery({
  images = [],
  videos = [],
}: {
  images?: { src: string; alt: string }[]
  videos?: { src: string; alt: string }[]
}) {
  const allMedia = [...videos, ...images]
  const [currentIndex, setCurrentIndex] = useState(0)

  if (allMedia.length === 0) {
    return <p className="text-sm text-muted-foreground">No images or videos available.</p>
  }

  const isCurrentVideo = currentIndex < videos.length
  const current = allMedia[currentIndex]

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
        {isCurrentVideo ? (
          <video
            key={current.src}
            src={current.src}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={current.src || "/placeholder.svg"}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        )}
      </div>

      <div className="grid grid-cols-6 gap-2">
        {allMedia.map((media, index) => {
          const isVideoThumb = index < videos.length
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50"
              }`}
            >
              {isVideoThumb ? (
                <video
                  src={media.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={media.src || "/placeholder.svg"}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              )}
            </button>
          )
        })}
      </div>

      <p className="text-sm text-muted-foreground text-center">{current.alt}</p>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Academic Projects</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow group">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {(project.images.length > 0 || project.videos?.length > 0) && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors text-sm font-medium">
                      <ImageIcon className="h-4 w-4" />
                      View Screenshots
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <ProjectGallery images={project.images} videos={project.videos} />
                  </DialogContent>
                </Dialog>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}