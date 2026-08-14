import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/vagbomb-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <img
            src={logo.url}
            alt="Vagbomb BJJ"
            width={64}
            height={64}
            loading="lazy"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <p className="text-stencil text-2xl">Vagbomb BJJ</p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              Jiu-jitsu brasileiro para crianças, adolescentes e adultos. Disciplina,
              defesa pessoal e comunidade.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> Rua das Palmeiras, 250 — Centro
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" /> (11) 90000-0000
          </p>
          <p className="flex items-center gap-2">
            <Instagram className="h-4 w-4 text-primary" /> @vagbombbjj
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link to="/turmas" className="text-stencil hover:text-primary">
            Turmas
          </Link>
          <Link to="/horarios" className="text-stencil hover:text-primary">
            Horários
          </Link>
          <Link to="/contato" className="text-stencil hover:text-primary">
            Contato
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vagbomb BJJ. Todos os direitos reservados.
      </div>
    </footer>
  );
}
