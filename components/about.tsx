import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, Languages } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: "12+",
    label: "Projets Académiques",
  },
  {
    icon: Calendar,
    value: "2",
    label: "Stages Professionnels",
  },
  {
    icon: Languages,
    value: "4",
    label: "Langues Parlées",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">À Propos de Moi</h2>

        <div className="max-w-4xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Bio */}
          <Card className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Étudiante en dernière année du cycle d'ingénieur en géoinformation à la Faculté des Sciences et Techniques
              de Tanger (FSTT). Passionnée par la géomatique et les technologies spatiales, je recherche un stage de fin
              d'études afin de mettre en pratique mes compétences en analyse spatiale, SIG et développement
              d'applications géographiques.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Mon parcours m'a permis d'acquérir une solide expertise en développement web, systèmes d'information
              géographique, et gestion de bases de données. J'ai eu l'opportunité de travailler sur des projets variés
              allant de la topographie au développement d'applications web SIG pour la gestion de marchés publics.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Je maîtrise plusieurs langues (Français, Anglais, Arabe, Tamazight) et je suis titulaire du permis B, ce
              qui me permet d'être mobile et polyvalente dans mes missions professionnelles.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
