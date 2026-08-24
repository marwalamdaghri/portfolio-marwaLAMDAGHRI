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
  title: "Marwa Lamdaghri — Ingénieure Géoinformation | Développeuse Full Stack Web SIG",
  description:
    "Portfolio de Marwa Lamdaghri, ingénieure d'État en Géoinformation (FST Tanger) : développement web SIG full stack, plateforme WebSIG MarchicaMed avec interopérabilité CAO/SIG, télédétection et cartographie interactive.",
  keywords: [
    "Marwa Lamdaghri",
    "Géoinformation",
    "Web SIG",
    "GIS developer",
    "développeuse full stack",
    "Leaflet",
    "QGIS",
    "Spring Boot",
    "Angular",
    "télédétection",
    "portfolio",
  ],
  authors: [{ name: "Marwa Lamdaghri" }],
  openGraph: {
    title: "Marwa Lamdaghri — Ingénieure Géoinformation | Développeuse Full Stack Web SIG",
    description:
      "Ingénieure d'État en Géoinformation : WebSIG, interopérabilité CAO/SIG, développement full stack et télédétection. Découvrez mes projets et mon parcours.",
    url: "https://lamdaghrimarwa.netlify.app",
    siteName: "Portfolio — Marwa Lamdaghri",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwa Lamdaghri — Ingénieure Géoinformation | Développeuse Full Stack Web SIG",
    description:
      "WebSIG, CAO/SIG, full stack, télédétection : découvrez mon parcours et mes projets.",
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
