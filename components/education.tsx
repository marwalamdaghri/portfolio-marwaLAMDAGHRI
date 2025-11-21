import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"

const education = [
  {
    degree: "State Engineering Cycle in Geoinformation",
    institution: "Faculty of Sciences and Techniques of Tangier (FSTT)",
    location: "Tangier, Morocco",
    period: "2023 – Present",
    description:
      "Specialized training in geoinformation, spatial analysis, GIS, and geographic application development.",
  },
  {
    degree: "University Diploma in Scientific and Technical Studies (DEUST)",
    institution: "Faculty of Sciences and Techniques of Al Hoceima",
    location: "Al Hoceima, Morocco",
    period: "2021 – 2023",
    description:
      "Undergraduate scientific and technical training with a specialization in geoinformation.",
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    institution: "Ibn Al Haytam High School",
    location: "Aarouit, Nador, Morocco",
    period: "2021",
    description:
      "Baccalaureate diploma with a specialization in Mathematical Sciences A.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-lg text-primary mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
