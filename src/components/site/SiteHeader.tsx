import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vagbomb-logo.jpg";

const links = [
  { to: "/", label: "Início" },
  { to: "/turmas", label: "Turmas" },
  { to: "/horarios", label: "Horários" },
  { to: "/filiais", label: "Filiais" },
  { to: "/colaboradores", label: "Colaboradores" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Vagbomb BJJ"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="text-stencil text-xl leading-none">
            Vagbomb <span className="text-primary">BJJ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-stencil text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="text-stencil bg-primary px-4 py-2 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Aula grátis
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-stencil border-b border-border/60 py-3 text-lg"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="hazard-stripe h-1 w-full" />
    </header>
  );
}
