import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import tikinho from "@/assets/colaboradores/pizzaria-tikinho.jpg.asset.json";
import colisao from "@/assets/colaboradores/escola-colisao.jpg.asset.json";
import marcaB from "@/assets/colaboradores/marca-b.jpg.asset.json";
import benx from "@/assets/colaboradores/benx-uniformes.jpg.asset.json";
import prime from "@/assets/colaboradores/prime-esportes.jpg.asset.json";

export const Route = createFileRoute("/colaboradores")({
  head: () => ({
    meta: [
      { title: "Colaboradores — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Parceiros e apoiadores da Vagbomb BJJ. Seja você também um apoiador.",
      },
      { property: "og:title", content: "Colaboradores — Vagbomb BJJ" },
      {
        property: "og:description",
        content:
          "Parceiros e apoiadores da Vagbomb BJJ. Seja você também um apoiador.",
      },
    ],
  }),
  component: ColaboradoresPage,
});

const colaboradores = [
  {
    logo: tikinho.url,
    alt: "Pizzaria do Tikinho",
    nome: "Pizzaria do Tikinho",
  },
  {
    logo: colisao.url,
    alt: "Escola de Lutas Colisão",
    nome: "Escola de Lutas Colisão",
  },
  {
    logo: marcaB.url,
    alt: "Marca B",
    nome: "Marca B",
  },
  {
    logo: benx.url,
    alt: "Benx Uniformes",
    nome: "Benx Uniformes",
  },
  {
    logo: prime.url,
    alt: "Prime Esportes",
    nome: "Prime Esportes",
  },
];

function ColaboradoresPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <Heart className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-6 text-5xl md:text-6xl">Colaboradores</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Quem apoia o Vagbomb BJJ faz o tatame girar. Nossos parceiros
            acreditam no jiu-jitsu como ferramenta de transformação.
          </p>
        </div>
      </section>

      <div className="hazard-stripe h-2 w-full" />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl">Nossos parceiros</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {colaboradores.map((c) => (
            <div
              key={c.nome}
              className="surface-grit flex flex-col items-center gap-4 border border-border p-6 text-center transition-colors hover:border-primary"
            >
              <img
                src={c.logo}
                alt={c.alt}
                loading="lazy"
                width={120}
                height={120}
                className="h-24 w-24 rounded-full object-contain"
              />
              <p className="text-stencil text-sm text-muted-foreground">
                {c.nome}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="hazard-stripe">
        <div className="bg-background/90">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-4xl md:text-5xl">Seja você um apoiador!</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Quer apoiar o jiu-jitsu e marcar presença ao lado da Vagbomb BJJ?
              Entre em contato e vamos conversar sobre parcerias.
            </p>
            <Link
              to="/contato"
              className="text-stencil mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Quero apoiar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
