"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => <div className="h-[380px] w-full rounded-xl bg-muted animate-pulse" />,
})

export function Contact() {
  const { lang, t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      href: "mailto:marwalamdaghri2004@gmail.com",
      value: "marwalamdaghri2004@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      href: "tel:+212689101571",
      value: "+212 689 101 571",
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      href: "#contact",
      value: t.contact.locationValue,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/marwa-lamdaghri-501b4b335",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/marwalamdaghri",
    },
  ]

  const mapLabels = {
    fr: {
      tangier: "Cycle d'ingénieur Géoinformation — FST Tanger (2023–2026)",
      hoceima: "DEUST — FST Al Hoceima + Stage TOPO-MOD",
      temara: "Stage Web SIG — GeoFly SARL (2025)",
      nador: "Stage PFE MarchicaMed + Bac SM A",
    },
    en: {
      tangier: "Geoinformation Engineering Degree — FST Tangier (2023–2026)",
      hoceima: "DEUST — FST Al Hoceima + TOPO-MOD internship",
      temara: "Web GIS Internship — GeoFly SARL (2025)",
      nador: "MarchicaMed PFE internship + High School Diploma",
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          {t.contact.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">{t.contact.intro}</p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <Button
                    key={info.label}
                    variant="outline"
                    className="w-full justify-start gap-3 h-auto py-4 bg-transparent hover:border-primary/50"
                    asChild
                  >
                    <a href={info.href}>
                      <info.icon className="h-5 w-5 text-primary shrink-0" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        <div className="text-sm font-medium">{info.value}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">{t.contact.followMe}</span>
                {socialLinks.map((link) => (
                  <Button key={link.label} variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="mailto:marwalamdaghri2004@gmail.com">
                    <Send className="h-5 w-5" />
                    {t.contact.sendEmail}
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Carte interactive du parcours */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <MapPin className="h-4 w-4 text-primary" />
              {t.contact.mapCaption}
            </p>
            <MapView labels={mapLabels[lang]} />
          </motion.div>

          {/* Pied de page */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {t.contact.rights}</p>
            <p className="mt-2">{t.contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
