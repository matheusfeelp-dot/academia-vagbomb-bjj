import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/vagbomb-logo.jpg.asset.json";

export const Route = createFileRoute("/turmas")({
  head: () => ({
    meta: [
      { title: "Turmas de Jiu-Jitsu — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Turmas de jiu-jitsu na Vagbomb BJJ: juvenil, adolescente, adulto gi e no-gi, feminino e defesa pessoal.",
      },
      { property: "og:title", content: "Turmas de Jiu-Jitsu — Vagbomb BJJ" },
      {
        property: "og:description",
        content: "Juvenil, adolescente, adulto, feminino e defesa pessoal.",
      },
    ],
  }),
  component: Turmas,
});

const turmas = [
  {
    name: "Aulas Particulares — até 5 anos",
    age: "Aulas particulares",
    text: "Para crianças menores de 6 anos, oferecemos aulas particulares com atendimento individualizado. Consulte horários e disponibilidade.",
  },
  {
    name: "Juvenil e Kids",
    age: "6 a 12 anos",
    text: "Fundamentos do jiu-jitsu, disciplina e antibullying. Graduação por mérito e participação em festivais.",
  },
  {
    name: "Adolescente",
    age: "13 a 17 anos",
    text: "Transição para o treino adulto: técnica, condicionamento e sparring supervisionado.",
  },
  {
    name: "Adulto Gi",
    age: "18+ · masculino e feminino",
    text: "Aula completa com aquecimento, técnica do dia e treino livre. Trilhas separadas para iniciantes.",
  },
  {
    name: "No-Gi / Submission",
    age: "18+",
    text: "Luta sem kimono, foco em wrestling, guardas modernas e finalizações de perna.",
  },
  {
    name: "Feminino",
    age: "Exclusiva mulheres",
    text: "Ambiente acolhedor, professora responsável e defesa pessoal aplicada ao dia a dia.",
  },
];

function Turmas() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-stencil text-sm text-accent">Vagbomb BJJ</p>
      <h1 className="mt-2 text-5xl">Turmas</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Do primeiro contato ao alto rendimento. Escolha a turma que combina com sua idade
        e seu objetivo — e venha fazer uma aula experimental.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {turmas.map((t) => (
          <article key={t.name} className="overflow-hidden border border-border bg-card">
            <div className="hazard-stripe h-1.5 w-full" />
            <div className="p-6">
              <div className="flex items-center gap-3">
                <img
                  src={logo.url}
                  alt="Escudo Vagbomb BJJ"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-primary object-cover"
                />
                <div>
                  <p className="text-stencil text-xs text-primary">{t.age}</p>
                  <h2 className="text-2xl">{t.name}</h2>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="hazard-stripe mt-16 h-2 w-full" />
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          to="/horarios"
          className="text-stencil bg-primary px-6 py-3 text-primary-foreground"
        >
          Ver horários
        </Link>
        <Link to="/contato" className="text-stencil border border-border px-6 py-3">
          Falar com a academia
        </Link>
      </div>
    </div>
  );
}
