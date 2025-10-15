import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "Getting Started with Spatial Analysis",
    organization: "ESRI",
    description:
      "Cette formation m’a initiée aux principes fondamentaux de l’analyse spatiale et à ses six grandes catégories, permettant de mieux comprendre et interpréter les phénomènes géographiques.",
    date: "2025",
    image: "/certificates/cer1ESRI.png",
  },
  {
    title: "Certificate of Appreciation - Legends Science Week",
    organization: "The Legends Club",
    description:
      "Reconnaissance pour ma contribution précieuse à l'événement Legends Science Week. Participation active et dévouement ayant grandement enrichi l'expérience et contribué au succès global de l'événement.",
    date: "2024",
    image: "/certificates/legends-science-week.jpg",
  },
  {
    title: "Attestation de Reconnaissance - FICAT",
    organization: "Organisation des Jeunes Africains (OJA)",
    description:
      "Attestation de reconnaissance pour mon dévouement et ma disponibilité en tant que membre du comité d'organisation du Festival International de la Culture Africaine de Tanger (FICAT) - 12ème édition.",
    date: "2024",
    image: "/certificates/ficat-recognition.jpg",
  },
  {
    title: "Certificate of Appreciation – The Legends Club (ONOUSC, Tanger)",
    organization: "Organisation des Jeunes Africains (OJA)",
    description:
      "econnaissance pour une contribution exceptionnelle au département d’organisation du club.Cette distinction souligne ma dévotion, mon engagement et mon sens de la collaboration, ayant contribué au succès des activités et événements du club universitaire.",
    date: "2025",
    image: "/certificates/certificat4.jpg",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Certificats & Distinctions</h2>

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
