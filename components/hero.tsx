"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, ChevronDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GeoCanvas } from "@/components/geo-canvas"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % t.hero.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [t.hero.roles.length])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-marwa-lamdaghrii.pdf"
    link.download = "CV-Marwa-Lamdaghrii.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-6 lg:px-8"
    >
      <GeoCanvas className="absolute inset-0 w-full h-full" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/40 animate-[spin_24s_linear_infinite]" />
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img src="/marwa-profile.jpg" alt="Marwa Lamdaghri" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Disponibilité */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.div>

          {/* Salutation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-muted-foreground mb-2"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Nom */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-sky-500 to-teal-400 bg-clip-text text-transparent">
              Marwa Lamdaghri
            </span>
          </motion.h1>

          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-xl sm:text-2xl font-semibold mb-2">{t.hero.title}</p>
            <div className="h-8 sm:h-9 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-2 text-lg sm:text-xl text-primary font-medium"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  {t.hero.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-relaxed">{t.hero.tagline}</p>
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" className="gap-2" onClick={handleDownloadCV}>
              <Download className="h-5 w-5" />
              {t.hero.downloadCv}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  )
}
