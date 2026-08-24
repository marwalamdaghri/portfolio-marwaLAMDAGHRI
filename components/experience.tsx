"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  Star,
  Users,
  Workflow,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Experience() {
  const { t } = useLanguage()
  const [expandedId, setExpandedId] = useState<string | false>("pfe")

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          {t.experience.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Ligne de la timeline */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" aria-hidden />

          <div className="space-y-8">
            {t.experience.items.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative pl-14"
              >
                {/* Point sur la timeline */}
                <div
                  className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    exp.featured
                      ? "bg-primary text-primary-foreground border-primary/40 shadow-lg shadow-primary/30"
                      : "bg-background text-primary border-primary/30"
                  }`}
                >
                  {exp.featured ? <Star className="h-5 w-5" /> : <Briefcase className="h-5 w-5" />}
                </div>

                <Card
                  className={`p-6 transition-shadow hover:shadow-xl ${
                    exp.featured ? "border-primary/50 ring-1 ring-primary/25 bg-gradient-to-br from-card to-primary/5" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={exp.featured ? "default" : "secondary"}>{exp.badge}</Badge>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug">{exp.title}</h3>
                  <p className={`mt-1 font-medium ${exp.featured ? "text-primary" : "text-primary/90"}`}>{exp.company}</p>
                  <p className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </p>

                  {exp.subject && (
                    <p className="mt-3 text-sm italic text-muted-foreground border-l-2 border-primary/40 pl-3">
                      « {exp.subject} »
                    </p>
                  )}

                  <p className="mt-4 text-muted-foreground leading-relaxed">{exp.summary}</p>

                  {/* Détails extensibles */}
                  {exp.details.length > 0 && (
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedId(expandedId === exp.id ? false : exp.id)}
                        className="gap-2 -ml-2 text-primary hover:text-primary"
                        aria-expanded={expandedId === exp.id}
                      >
                        {expandedId === exp.id ? t.experience.hideDetails : t.experience.viewDetails}
                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`} />
                      </Button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedId === exp.id ? "auto" : 0,
                          opacity: expandedId === exp.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-2 space-y-2.5 border-l border-dashed border-primary/30 pl-4">
                          {exp.details.map((item, i) => (
                            <li key={i} className="relative text-sm text-muted-foreground leading-relaxed">
                              <span className="absolute -left-[21px] top-[7px] h-2 w-2 rounded-full bg-primary/70" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>

                        {exp.supervisors && (
                          <p className="mt-4 inline-flex items-start gap-2 text-xs text-muted-foreground bg-secondary rounded-md px-3 py-2">
                            <Users className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            {exp.supervisors}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  )}

                  {exp.method && (
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <Workflow className="h-4 w-4" />
                      {exp.method}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

