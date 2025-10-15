import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Stage - Développement d'une Application Web SIG",
    company: "GEOFLY SARL",
    location: "Témara, Maroc",
    period: "Juillet - Août 2025",
    description:
      "Conception et développement d'une application web SIG pour la gestion et le suivi des marchés publics. Mise en œuvre d'une architecture web complète basée sur React.js (frontend) et Node.js (backend). Intégration d'une visualisation cartographique (2D et 3D) interactive des projets à l'aide d'API SIG. Rédaction du cahier des charges et proposition de perspectives d'évolution de la solution.",
    technologies: [
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Leaflet",
  "Mapbox GL JS",
  "API SIG",
  "Cartographie 2D/3D"
]


  },
  {
    title: "Stage d'Initiation - Topographie",
    company: "TOPO-MOD",
    location: "Al Hoceima, Maroc",
    period: "Juillet - Septembre 2024",
    description:
      "Apprentissage du dessin topographique et de la modélisation sur AutoCAD. Participation à la mise à jour et au traitement de données topographiques. Élaboration de plans et cartes thématiques à partir des données relevées.",
    technologies: ["AutoCAD", "Topographie", "Cartographie", "Traitement de données"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Expérience Professionnelle</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-lg text-primary mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
