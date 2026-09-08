import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/filiais")({
  head: () => ({
    meta: [
      { title: "Filiais e Sede — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Sede em Salesópolis e filiais no Distrito de Remédios e no Bombeiros 6GB em Bertioga. Encontre a unidade Vagbomb BJJ mais próxima de você.",
      },
      { property: "og:title", content: "Filiais e Sede — Vagbomb BJJ" },
      {
        property: "og:description",
        content:
          "Sede em Salesópolis e filiais no Distrito de Remédios e no Bombeiros 6GB em Bertioga.",
      },
    ],
  }),
  component: Filiais,
});

const unidades = [
  {
    tag: "Sede",
    nome: "Salesópolis",
    endereco: "Rua Prefeito Antônio de Camargo Primo, 10 — Jd. Nídia, Salesópolis — SP",
    mapa: "Rua Prefeito Antonio de Camargo Primo, Salesopolis, SP",
    desc: "Matriz da Vagbomb BJJ. Estrutura completa com tatame, vestiários e sala de musculação.",
  },
  {
    tag: "Filial",
    nome: "Distrito de Remédios",
    endereco: "R. Joaquim Domingues Martins — Nossa Sra. do Remédio, Salesópolis — SP",
    mapa: "R. Joaquim Domingues Martins, Nossa Senhora do Remédio, Salesópolis, SP, Brasil",
    desc: "Atende a comunidade do distrito com turmas juvenis e adultas, no mesmo padrão da matriz.",
  },
  {
    tag: "Filial",
    nome: "Bombeiros 6GB — Bertioga",
    endereco: "",
    mapa: "Corpo de Bombeiros, Bertioga, SP, Brasil",
    desc: "Parceria com o quartel dos bombeiros. Turmas reservadas a policiais e profissionais de segurança pública.",
  },
];


function Filiais() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-stencil text-sm text-accent">Onde treinar</p>
      <h1 className="mt-2 text-5xl">Filiais e Sede</h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        A Vagbomb BJJ está em três endereços. Escolha a unidade mais próxima e venha treinar.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {unidades.map((u) => (
          <div
            key={u.nome}
            className="surface-grit flex flex-col border border-border p-6 transition-colors hover:border-primary"
          >
            <span
              className={`text-stencil w-fit px-3 py-1 text-xs ${
                u.tag === "Sede" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
              }`}
            >
              {u.tag}
            </span>
            <h2 className="mt-4 text-2xl">{u.nome}</h2>
            {u.endereco && (
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {u.endereco}
              </p>
            )}
            <p className="mt-3 text-sm text-muted-foreground">{u.desc}</p>

            <div className="mt-5 aspect-video w-full overflow-hidden border border-border">
              <iframe
                title={`Mapa — ${u.nome}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(u.mapa)}&hl=pt-BR&z=14&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[35%] transition-all hover:grayscale-0"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.mapa)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stencil mt-3 inline-flex items-center gap-2 text-xs text-accent hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5" /> Abrir no Google Maps
            </a>

            <Link
              to="/contato"
              className="text-stencil mt-auto inline-flex items-center gap-2 pt-6 text-primary"
            >
              Agendar aula nesta unidade <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        ))}
      </div>

      <section className="hazard-stripe mt-16">
        <div className="bg-background/90">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <h2 className="text-4xl">Não sabe qual escolher?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Fale com a gente e ajudamos você a encontrar a unidade ideal.
            </p>
            <Link
              to="/contato"
              className="text-stencil mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3 text-primary-foreground"
            >
              Falar com a equipe <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
