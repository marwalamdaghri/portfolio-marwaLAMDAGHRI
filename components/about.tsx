import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, Languages } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: "12+",
    label: "Academic Projects",
  },
  {
    icon: Calendar,
    value: "2",
    label: "Professional Internships",
  },
  {
    icon: Languages,
    value: "4",
    label: "Languages Spoken",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>

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
              Final-year geoinformation engineering student at the Faculty of Sciences and Techniques of Tangier (FSTT).
              Passionate about geomatics and spatial technologies, I am currently seeking an end-of-studies internship
              to apply my skills in spatial analysis, GIS, and geographic application development.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              My academic journey has enabled me to build solid expertise in web development, geographic information
              systems, and database management. I have worked on a wide range of projects—from topographic work to GIS
              web application development for public market management.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am fluent in several languages (French, English, Arabic, Tamazight) and hold a category B driving
              license, allowing me to be mobile and adaptable in my professional missions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
