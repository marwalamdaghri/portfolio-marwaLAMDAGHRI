"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import {
  FolderGit2,
  ImageIcon,
  Star,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Media = { src: string; alt: string }

function ProjectGallery({ images = [], videos = [] }: { images?: Media[]; videos?: Media[] }) {
  const allMedia: Media[] = [...videos, ...images]
  const [currentIndex, setCurrentIndex] = useState(0)

  if (allMedia.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 border border-dashed border-border rounded-lg">
        <ImageIcon className="h-8 w-8 text-muted-foreground/60" />
        <p className="text-sm text-muted-foreground">Captures à venir</p>
      </div>
    )
  }

  const isCurrentVideo = currentIndex < videos.length
  const current = allMedia[currentIndex]

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
        {isCurrentVideo ? (
          <video key={current.src} src={current.src} controls className="w-full h-full object-contain" />
        ) : (
          <Image src={current.src || "/placeholder.svg"} alt={current.alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" />
        )}
      </div>

      <div className="grid grid-cols-6 gap-2">
        {allMedia.map((media, index) => {
          const isVideoThumb = index < videos.length
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={media.alt}
              className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
              }`}
            >
              {isVideoThumb ? (
                <video src={media.src} muted loop playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="relative w-full h-full">
                  <Image src={media.src || "/placeholder.svg"} alt={media.alt} fill className="object-cover" sizes="100px" />
                </div>
              )}
            </button>
          )
        })}
      </div>

      <p className="text-sm text-muted-foreground text-center">{current.alt}</p>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")

  const filteredProjects = useMemo(
    () => (filter === "all" ? t.projects.items : t.projects.items.filter((p) => p.category === filter)),
    [filter, t]
  )

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-3 text-center"
        >
          {t.projects.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-muted-foreground mb-10"
        >
          {t.projects.subtitle}
        </motion.p>

        {/* Projet vedette — PFE MarchicaMed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <Card className="overflow-hidden border-2 border-primary/40 ring-1 ring-primary/20 shadow-xl">
            <div className="bg-gradient-to-r from-primary to-sky-500 px-6 py-3 flex items-center gap-2 text-white">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">{t.projects.featuredBadge}</span>
            </div>

            <div className="p-6 sm:p-8 grid lg:grid-cols-[1fr_320px] gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">{t.projects.featured.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{t.projects.featured.description}</p>

                <p className="inline-flex items-center gap-2 font-semibold text-sm mb-3 text-primary">
                  <Sparkles className="h-4 w-4" />
                  {t.projects.highlightsLabel}
                </p>
                <ul className="space-y-2 mb-6">
                  {t.projects.featured.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Layers className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {t.projects.featured.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {(t.projects.featured.github || t.projects.featured.demo) && (
                  <div className="flex gap-3">
                    {t.projects.featured.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={t.projects.featured.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                    {t.projects.featured.demo && (
                      <Button size="sm" asChild>
                        <a href={t.projects.featured.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Galerie réservée aux captures MarchicaMed */}
              <div className="flex items-start">
                {t.projects.featured.images.length > 0 || t.projects.featured.videos.length > 0 ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/15 to-sky-500/10 border border-primary/25 flex flex-col items-center justify-center gap-2 text-primary hover:from-primary/25 hover:to-sky-500/15 transition-colors">
                        <ImageIcon className="h-8 w-8" />
                        <span className="text-sm font-medium">{t.projects.viewGallery}</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{t.projects.featured.title}</DialogTitle>
                      </DialogHeader>
                      <ProjectGallery images={t.projects.featured.images} videos={t.projects.featured.videos} />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-sky-500/10 border border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 text-center p-6">
                    <ImageIcon className="h-9 w-9 text-primary/50" />
                    <p className="text-sm text-muted-foreground">{t.projects.noMedia}</p>
                    <p className="text-xs text-muted-foreground/70">/public/projects/PFE/</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {t.projects.filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === f.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <motion.div layout className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const hasMedia = project.images.length > 0 || project.videos.length > 0
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <Card className="p-6 h-full flex flex-col group hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors">
                        <FolderGit2 className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {(hasMedia || project.github || project.demo) && (
                      <div className="flex gap-2">
                        {hasMedia && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors text-sm font-medium">
                                <ImageIcon className="h-4 w-4" />
                                {t.projects.viewGallery}
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>{project.title}</DialogTitle>
                              </DialogHeader>
                              <ProjectGallery images={project.images} videos={project.videos} />
                            </DialogContent>
                          </Dialog>
                        )}
                        {project.github && (
                          <Button size="icon" variant="outline" asChild aria-label="GitHub">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="icon" variant="outline" asChild aria-label="Demo">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
