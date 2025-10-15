"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderGit2, ImageIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Application Android - Signalement des Défauts d'Infrastructure",
    description:
      "Application mobile de déclaration des défauts d'infrastructure d'assainissement avec photos et géolocalisation. Interface de login, signalement avec capture photo, sélection de localisation sur carte interactive, et affichage de tous les signalements précédents.",
    technologies: ["Android Studio", "Java", "Géolocalisation", "Base de données", "Authentification"],
    images: [],
    videos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigSignalement-2qvMLzVw3x5mo5jWRWIVunQ6HLLV7p.mp4",
        alt: "Démonstration de l’application Signalement"
      }
    ],
  },
  {
    title: "Plugin QGIS - Validation des Dérogations d'Urbanisme",
    description:
      "Plugin QGIS développé en Python pour l'aide à la décision sur les dérogations d'urbanisme. Analyse automatique des contraintes spatiales et règlementaires : vérification de surface minimale (1ha), buffer de 1km, évitement des terrains protégés, et limitation à 5 dérogations par zone.",
    technologies: ["Python", "PyQGIS", "Qt Designer", "Analyse Spatiale", "SIG"],
    images: [
      {
        src: "/projects/qgis-plugin/interface-main.jpg",
        alt: "Interface principale QGIS avec toutes les couches spatiales",
      },
      {
        src: "/projects/qgis-plugin/dialog-empty.jpg",
        alt: "Interface du plugin - formulaire de saisie",
      },
      {
        src: "/projects/qgis-plugin/dialog-analysis.jpg",
        alt: "Analyse en cours avec zone de recherche affichée",
      },
      {
        src: "/projects/qgis-plugin/results-success.jpg",
        alt: "Résultats - Projet conforme sans conflits",
      },
      {
        src: "/projects/qgis-plugin/results-conflict.jpg",
        alt: "Résultats - Conflits détectés nécessitant révision",
      },
      {
        src: "/projects/qgis-plugin/map-intersections.jpg",
        alt: "Carte des intersections avec les zones protégées",
      },
    ],
  },
  {
    title: "Google Earth Engine - Impact de l'Urbanisation sur les Espaces Verts",
    description:
      "Analyse de l'urbanisation de Tanger entre 2016 et 2023 et son impact sur la disparition des espaces verts. Utilisation de Google Earth Engine pour le traitement d'images satellites, détection de changements d'occupation du sol, et génération de rapports d'analyse.",
    technologies: ["Google Earth Engine", "Télédétection", "JavaScript", "Analyse temporelle"],
    images: [
      {
        src: "/projects/GEE/ndvi1.png",
        alt: "Évolution de la végétation NDVI – Année 2016",
      },
      {
        src: "/projects/GEE/ndvi2.png",
        alt: "Évolution de la végétation NDVI – Année 2023",
      },
       {
        src: "/projects/GEE/diffNdbi.png",
        alt: "Carte de différence NDVI (2016–2023)",
      },
      {
        src: "/projects/GEE/ndbi1.png",
        alt: "Évolution de l’urbanisation NDBI – Année 2016",
      },
      {
        src: "/projects/GEE/ndbi2.png",
        alt: "Évolution de l’urbanisation NDBI – Année 2023",
      },
      
      {
        src: "/projects/GEE/betonise.png",
        alt: "Carte des zones bétonisées (2016–2023)",
      },
    ],
  },
  {
    title: "Analyse des Dynamiques Régionales de Marrakech-Safi",
    description:
      "Projet d'équipe analysant les dynamiques socio-économiques, impacts environnementaux et développements d'infrastructures de la région Marrakech-Safi. Utilisation d'interpolation spatiale, analyse de réseau, et traitement de données de télédétection.",
    technologies: ["QGIS", "ArcGIS", "Python", "Analyse Spatiale", "Télédétection"],
    images: [
      {
        src: "/projects/marrakech/carte.jpg",
        alt: "Production de l'eau et le nombre de consommateurs en 2020 dans la région de Marrakech-Safi",
      },
      {
        src: "/projects/marrakech/carte2.jpg",
        alt: "l'énergie consommée et les énergies renouvlables dans la région de Marrakech-Safi en 2020",
      },
      {
        src: "/projects/marrakech/carte3.jpg",
        alt: "Le réseau routier et la construction des routes dans la région de Marrakech- Safi en 2021",
      },
      {
        src: "/projects/marrakech/carte4.jpg",
        alt: "La capacité normale des barrages et leurs taux de remplissage en 2021 dans la région de Marrakech-Safi",
      },
      
    ],
  },
  {
    title: "Application VBA - Calculs Topographiques Automatisés",
    description:
      "Application Excel utilisant VBA pour automatiser les calculs topographiques : nivellement, transformations de coordonnées, calculs de distances et azimuts. Interface intuitive permettant la saisie de données terrain et génération instantanée de résultats précis.",
    technologies: ["VBA", "Excel", "Topographie", "Systèmes de coordonnées"],
    images: [],
  },
  {
    title: "Analyse Spatiale de la Distribution de la Criminalité",
    description:
      "Analyse statistique de la distribution spatiale de 24 points de criminalité dans une zone d'étude de 64 km². Application de la méthode des quadrats et de la méthode du plus proche voisin pour identifier les patterns et concentrations d'activité criminelle.",
    technologies: ["Analyse Spatiale", "Statistiques", "SIG", "Méthodes quantitatives"],
    images: [
    {
        src: "/mas.png",
        alt: "le  nuage de points des coordonnées (X,Y)",
      },],
  },
  {
    title: "Localisation Optimale d'une Station d'Épuration (Ouazzane)",
    description:
      "Analyse spatiale multi-critères pour déterminer l'emplacement optimal d'une station d'épuration à Ouazzane. Utilisation d'ArcMap Model Builder pour l'automatisation, ArcScene pour la visualisation 3D, et analyse de critères : altitude, proximité des rivières, distance des zones résidentielles.",
    technologies: ["ArcMap", "Model Builder", "ArcScene", "Analyse Multi-critères", "SIG"],
    images: [],
    videos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-zgVDJMCzPvvmXu6PfhPD7aem6YnId9.mp4",
        alt: "Démonstration des résultats,"
      }
    ],  
  },
  {
    title: "Site Web E-commerce",
    description:
      "Développement d'un site web de vente en ligne avec fonctionnalités CRUD complètes pour la gestion des commandes, clients et produits. Implémentation de rôles administrateur et client, filtres de recherche avancés, et interface utilisateur moderne.",
    technologies: ["HTML", "CSS", "JavaScript", "Base de données"],
    images: [],
  },
  {
    title: "Application Python - Conversion de Coordonnées Géodésiques",
    description:
      "Application Python avec interface Tkinter pour la conversion de coordonnées géodésiques et le calcul de surfaces. Résolution de problèmes directs/inverses sur sphères et ellipsoïdes (Clarke 1880, WGS84) avec méthodes de Puissant et Gauss. Affichage cartographique dynamique et calcul de la superficie du Maroc.",
    technologies: ["Python", "Tkinter", "Géodésie", "Cartographie", "Calculs géométriques"],
    images: [],
  },
  {
    title: "Analyse Multi-critères - Localisation d'une École (ArcMap)",
    description:
      "Projet de recherche de site optimal pour une nouvelle école à Stowe, Vermont. Analyse multi-critères pondérée considérant : distance des écoles existantes, terrain plat, proximité des sites de loisirs, et aptitude du sol. Utilisation de données raster (élévation, occupation du sol) et vecteur (routes, écoles, loisirs).",
    technologies: ["ArcMap", "Analyse Multi-critères", "Raster", "Pondération", "SIG"],
    images: [
      {
        src: "/projects/newSchool/model1.jpg",
        alt: "le modèle builder pour rechercher le site optimal",
      },
      {
        src: "/projects/newSchool/site.jpg",
        alt: "La carte finale du site optimale de la nouvelle école",
      },
      ],
  },
  {
    title: "Étude de l'Érosion Côtière - Baie de Tanger",
    description:
      "Étude de l'instabilité du trait de côte de la baie de Tanger menaçant les infrastructures urbaines. Géoréférencement de photos aériennes multi-dates (1963 et 1996) et de cartes topographiques. Identification des zones prioritaires à protéger entre le port Tanger-ville et la zone de Gandouri.",
    technologies: ["ArcMap", "Géoréférencement", "Photos aériennes", "Analyse temporelle", "Cartographie"],
    images: [
      {
        src: "/projects/cote/cote.jpg",
        alt: "carte représentant les traits de cote en 1963 et 1996 et les zones à risques àTanger ",
      },
      
      ],
  },
  {
    title: "Levé Topographique - Parking FSTT",
    description:
      "Réalisation d'un levé topographique complet du parking de la Faculté des Sciences et Techniques de Tanger. Collecte de données terrain, mesures précises, traitement des données, et élaboration de plans topographiques détaillés.",
    technologies: ["Topographie", "Station totale", "GPS", "AutoCAD", "Levé terrain"],
    images: [
      {
        src: "/projects/leve.jpg",
        alt: "Le levé du parking de la Faculté des Sciences et Techniques de Tanger ",
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
    return <p className="text-sm text-muted-foreground">Aucune image ni vidéo disponible.</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projets Académiques</h2>

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
                      Voir les captures 
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
