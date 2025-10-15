import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:marwalamdaghri2004@gmail.com",
    value: "marwalamdaghri2004@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    href: "tel:+212689101571",
    value: "+212 689 101 571",
  },
  {
    icon: MapPin,
    label: "Localisation",
    href: "#",
    value: "Cité universitaire, Tanger, Maroc",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marwa-lamdaghri-760b88228/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/marwalamdaghri",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contact</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
              Je suis actuellement à la recherche d'un stage de fin d'études en géoinformation. N'hésitez pas à me
              contacter pour discuter d'opportunités de collaboration ou pour toute question !
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 bg-transparent"
                  asChild
                >
                  <a href={info.href}>
                    <info.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:marwalamdaghri2004@gmail.com">
                  <Mail className="h-5 w-5" />
                  Envoyer un Email
                </a>
              </Button>
            </div>
          </Card>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Marwa Lamdaghri. Tous droits réservés.</p>
            <p className="mt-2">Permis B • Disponible pour stage de fin d'études</p>
          </div>
        </div>
      </div>
    </section>
  )
}
