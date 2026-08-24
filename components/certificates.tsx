"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          {t.certificates.title}
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.certificates.items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all h-full group">
                <div className="relative h-64 bg-secondary/30">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.03] transition-transform"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
