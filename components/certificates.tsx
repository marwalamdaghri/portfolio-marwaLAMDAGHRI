import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "Getting Started with Spatial Analysis",
    organization: "ESRI",
    description:
      "This course introduced me to the fundamental principles of spatial analysis and its six major categories, helping me better understand and interpret geographic phenomena.",
    date: "2025",
    image: "/certificates/cer1ESRI.png",
  },
  {
    title: "Getting Information from a GIS Map",
    organization: "ESRI",
    description:
      "I completed the 'Getting Information from a GIS Map' course, which introduces the basics of reading, analyzing, and interpreting GIS maps. This training explains how to understand spatial information to answer real-world questions using a digital map.",
    date: "2025",
    image: "/certificates/Getting Information from a GIS Map_Certificate_11202025.png",
  },
  {
    title: "Python for Everyone",
    organization: "ESRI",
    description:
      "This course allowed me to develop essential Python scripting skills applied to GIS, particularly within ArcGIS Pro and ArcMap environments.",
    date: "2025",
    image: "/certificates/Python for Everyone_Certificate_11192025.png",
  },
  {
    title: "Certificate of Appreciation - Legends Science Week",
    organization: "The Legends Club",
    description:
      "Recognition for my valuable contribution to the Legends Science Week event. Active participation and dedication that greatly enriched the experience and contributed to the overall success of the event.",
    date: "2024",
    image: "/certificates/legends-science-week.jpg",
  },
  {
    title: "Certificate of Recognition - FICAT",
    organization: "Organisation des Jeunes Africains (OJA)",
    description:
      "Recognition for my commitment and availability as a member of the organizing committee of the International Festival of African Culture of Tangier (FICAT) – 12th edition.",
    date: "2024",
    image: "/certificates/ficat-recognition.jpg",
  },
  {
    title: "Certificate of Appreciation – The Legends Club (ONOUSC, Tangier)",
    organization: "Organisation des Jeunes Africains (OJA)",
    description:
      "Recognition for exceptional contribution to the club's organizational department. This distinction highlights my dedication, teamwork, and commitment that contributed to the success of the club’s events and activities.",
    date: "2025",
    image: "/certificates/certificat4.jpg",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Certificates & Achievements</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 bg-secondary/30">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight mb-1">{cert.title}</h3>
                    <p className="text-sm text-primary font-medium">{cert.organization}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{cert.description}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
