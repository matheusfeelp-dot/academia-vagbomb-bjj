import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Aula Grátis — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Fale com a Vagbomb BJJ e agende sua aula experimental gratuita de jiu-jitsu. Endereço, telefone e WhatsApp.",
      },
      { property: "og:title", content: "Contato e Aula Grátis — Vagbomb BJJ" },
      {
        property: "og:description",
        content: "Agende sua aula experimental gratuita de jiu-jitsu na Vagbomb BJJ.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-stencil text-sm text-accent">Vamos treinar</p>
      <h1 className="mt-2 text-5xl">Contato</h1>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground">
          <p className="max-w-md">
            Preencha o formulário ou chame no WhatsApp. Respondemos rápido e já deixamos
            sua aula experimental agendada.
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-primary" />
            Rua Prefeito Antônio de Camargo Primo, 10 — Jardim Nídia
          </p>
          <a
            href="https://wa.me/5511947712354"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 transition-colors hover:text-primary"
          >
            <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
            (11) 94771-2354 · WhatsApp
          </a>
          <a
            href="https://wa.me/5511994427936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 transition-colors hover:text-primary"
          >
            <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
            (11) 99442-7936 · WhatsApp
          </a>
          <p className="flex items-start gap-3">
            <Instagram className="mt-0.5 h-5 w-5 text-primary" />
            @vagbombbjj
          </p>
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-primary" />
            Seg a sex 16h–22h · Sáb 08h–12h
          </p>
        </div>

        <form
          className="space-y-4 border border-border bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
            const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
            const turma = (form.elements.namedItem("turma") as HTMLSelectElement).value;
            const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value;
            const texto = `Olá! Sou ${nome}. Telefone: ${tel}. Tenho interesse na turma: ${turma}. ${msg}`;
            window.open(
              `https://wa.me/5511947712354?text=${encodeURIComponent(texto)}`,
              "_blank",
            );
            setEnviado(true);
          }}
        >
          <div>
            <label className="text-stencil text-xs" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              required
              className="mt-1 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-stencil text-xs" htmlFor="tel">
              Telefone / WhatsApp
            </label>
            <input
              id="tel"
              required
              className="mt-1 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-stencil text-xs" htmlFor="turma">
              Turma de interesse
            </label>
            <select
              id="turma"
              className="mt-1 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option>Infantil</option>
              <option>Adolescente</option>
              <option>Adulto Gi</option>
              <option>No-Gi</option>
              <option>Feminino</option>
            </select>
          </div>
          <div>
            <label className="text-stencil text-xs" htmlFor="msg">
              Mensagem
            </label>
            <textarea
              id="msg"
              rows={4}
              className="mt-1 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="text-stencil w-full bg-primary px-6 py-3 text-primary-foreground"
          >
            {enviado ? "Recebemos seu contato!" : "Enviar"}
          </button>
          {enviado && (
            <p className="text-sm text-muted-foreground">
              Obrigado! Entraremos em contato em breve para confirmar sua aula.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
