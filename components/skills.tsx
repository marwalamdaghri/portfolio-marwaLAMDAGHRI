"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Satellite,
  Map,
  Database,
  ShieldCheck,
  BrainCircuit,
  Wrench,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const icons: Record<string, typeof Code2> = {
  code: Code2,
  satellite: Satellite,
  map: Map,
  database: Database,
  shield: ShieldCheck,
  brain: BrainCircuit,
  tools: Wrench,
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-3 text-center"
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-muted-foreground mb-12"
        >
          {t.skills.subtitle}
        </motion.p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.skills.categories.map((category, index) => {
            const Icon = icons[category.icon] ?? Code2
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <Card className={`p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all ${category.icon === "tools" ? "md:col-span-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground cursor-default transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
