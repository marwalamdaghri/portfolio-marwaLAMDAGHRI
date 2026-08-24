"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LanguagesIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Languages() {
  const { t } = useLanguage()

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          {t.languagesSection.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.languagesSection.items.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <LanguagesIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">{language.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
