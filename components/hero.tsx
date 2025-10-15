"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv-marwa-lamdaghri.pdf"
    link.download = "CV-Marwa-Lamdaghri.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img src="/marwa-profile.jpg" alt="Marwa Lamdaghri" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground mb-2">Bonjour,</p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Je suis <span className="text-primary">Marwa Lamdaghri</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
            Étudiante Ingénieure en Géoinformation
          </p>

          {/* Download CV Button */}
          <Button size="lg" className="gap-2" onClick={handleDownloadCV}>
            <Download className="h-5 w-5" />
            Télécharger CV
          </Button>
        </div>
      </div>
    </section>
  )
}
