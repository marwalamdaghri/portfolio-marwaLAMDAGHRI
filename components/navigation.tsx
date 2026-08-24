"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.languages, href: "#languages" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-primary">
            Marwa Lamdaghri
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-full border border-border overflow-hidden"
              role="group"
              aria-label="Language / Langue"
            >
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label={mounted && resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {!mounted ? <Moon className="h-5 w-5" /> : resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
