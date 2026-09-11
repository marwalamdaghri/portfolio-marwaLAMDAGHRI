import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://lamdaghrimarwa.netlify.app"),
  title: "Marwa Lamdaghri — Ingénieure d'État en Géoinformation | SIG, Télédétection & Analyse Spatiale",
  description:
    "Portfolio de Marwa Lamdaghri, ingénieure d'État en Géoinformation (FST Tanger) : SIG, télédétection, analyse spatiale, interopérabilité CAO/SIG, cartographie territoriale, avec des compétences complémentaires en développement d'applications géospatiales.",
  keywords: [
    "Marwa Lamdaghri",
    "Géoinformation",
    "SIG",
    "GIS",
    "Géomatique",
    "Télédétection",
    "Analyse spatiale",
    "QGIS",
    "ArcGIS",
    "Google Earth Engine",
    "Cartographie",
    "Web SIG",
    "portfolio",
  ],
  authors: [{ name: "Marwa Lamdaghri" }],
  openGraph: {
    title: "Marwa Lamdaghri — Ingénieure d'État en Géoinformation | SIG, Télédétection & Analyse Spatiale",
    description:
      "Ingénieure d'État en Géoinformation : SIG, analyse spatiale, télédétection, interopérabilité CAO/SIG. Découvrez mes projets et mon parcours.",
    url: "https://lamdaghrimarwa.netlify.app",
    siteName: "Portfolio — Marwa Lamdaghri",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwa Lamdaghri — Ingénieure d'État en Géoinformation | SIG, Télédétection & Analyse Spatiale",
    description:
      "SIG, analyse spatiale, télédétection, CAO/SIG : découvrez mon parcours et mes projets.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
