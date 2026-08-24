"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Content, type Lang } from "@/lib/content"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr")

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang")
    if (stored === "fr" || stored === "en") setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem("portfolio-lang", lang)
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
