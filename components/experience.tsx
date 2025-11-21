import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Internship - Web GIS Application Development",
    company: "GEOFLY SARL",
    location: "Témara, Morocco",
    period: "July - August 2025",
    description:
      "Design and development of a web GIS application for public market management and monitoring. Implementation of a complete web architecture based on React.js (frontend) and Node.js (backend). Integration of interactive 2D and 3D cartographic visualization of projects using GIS APIs. Drafting of specifications and proposal of solution evolution perspectives.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Leaflet",
      "Mapbox GL JS",
      "GIS API",
      "2D/3D Cartography"
    ]
  },
  {
    title: "Initiation Internship - Topography",
    company: "TOPO-MOD",
    location: "Al Hoceima, Morocco",
    period: "July - September 2024",
    description:
      "Learning topographic drawing and modeling on AutoCAD. Participation in updating and processing topographic data. Development of plans and thematic maps from collected data.",
    technologies: ["AutoCAD", "Topography", "Cartography", "Data processing"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Professional Experience</h2>

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