import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Développement Web",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Langages de Programmation",
    skills: ["Java", "JavaFX", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Systèmes d'Information Géographique",
    skills: ["QGIS", "ArcGIS", "AutoCAD"],
  },
  {
    category: "Bases de Données",
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "Outils & Environnements",
    skills: ["Visual Studio Code", "Android Studio", "PyCharm", "Git", "GitHub", "Windows", "Linux"],
  },
  {
    category: "Méthodes & Conception",
    skills: ["UML", "Merise", "Architecture Web", "Architecture SIG"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Compétences</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
