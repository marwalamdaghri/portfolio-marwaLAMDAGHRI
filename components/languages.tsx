import { Card } from "@/components/ui/card"
import { LanguagesIcon } from "lucide-react"

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Courant" },
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Tamazight", level: "Langue maternelle" },
]

export function Languages() {
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Langues</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <LanguagesIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">{language.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
