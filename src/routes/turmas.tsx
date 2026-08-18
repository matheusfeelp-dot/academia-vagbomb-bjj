import { createFileRoute, Link } from "@tanstack/react-router";
import kidsImg from "@/assets/kids-bjj.jpg";
import womenImg from "@/assets/women-bjj.jpg";
import heroImg from "@/assets/hero-bjj.jpg";
import nogiImg from "@/assets/nogi-bjj.jpg";

export const Route = createFileRoute("/turmas")({
  head: () => ({
    meta: [
      { title: "Turmas de Jiu-Jitsu — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Turmas de jiu-jitsu na Vagbomb BJJ: infantil, adolescente, adulto gi e no-gi, feminino e defesa pessoal.",
      },
      { property: "og:title", content: "Turmas de Jiu-Jitsu — Vagbomb BJJ" },
      {
        property: "og:description",
        content: "Infantil, adolescente, adulto, feminino e defesa pessoal.",
      },
    ],
  }),
  component: Turmas,
});

const turmas = [
  {
    name: "Aulas Particulares — até 5 anos",
    age: "Aulas particulares",
    img: kidsImg,
    text: "Para crianças menores de 6 anos, oferecemos aulas particulares com atendimento individualizado. Consulte horários e disponibilidade.",
  },
  {
    name: "Infantil e Kids",
    age: "6 a 12 anos",
    img: kidsImg,
    text: "Fundamentos do jiu-jitsu, disciplina e antibullying. Graduação por mérito e participação em festivais.",
  },
  {
    name: "Adolescente",
    age: "13 a 17 anos",
    img: heroImg,
    text: "Transição para o treino adulto: técnica, condicionamento e sparring supervisionado.",
  },
  {
    name: "Adulto Gi",
    age: "18+ · masculino e feminino",
    img: heroImg,
    text: "Aula completa com aquecimento, técnica do dia e treino livre. Trilhas separadas para iniciantes.",
  },
  {
    name: "No-Gi / Submission",
    age: "18+",
    img: nogiImg,
  },
  {
    name: "Feminino",
    age: "Exclusiva mulheres",
    img: womenImg,
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
          <article key={t.name} className="border border-border bg-card">
            <img
              src={t.img}
              alt={`Turma ${t.name}`}
              width={1200}
              height={900}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-stencil text-xs text-primary">{t.age}</p>
              <h2 className="mt-1 text-2xl">{t.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
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
