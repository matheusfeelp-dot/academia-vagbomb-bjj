import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horários das Aulas — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Grade de horários da Vagbomb BJJ: aulas infantis, adultas, femininas e no-gi de segunda a sábado.",
      },
      { property: "og:title", content: "Horários das Aulas — Vagbomb BJJ" },
      {
        property: "og:description",
        content: "Grade completa de aulas de jiu-jitsu de segunda a sábado.",
      },
    ],
  }),
  component: Horarios,
});

const grade = [
  {
    dia: "Segunda e Quarta",
    aulas: [
      { hora: "17:00", turma: "Baby Jiu-Jitsu (4–6)" },
      { hora: "18:00", turma: "Infantil e Kids (7–12)" },
      { hora: "19:00", turma: "Adulto Gi — iniciantes" },
      { hora: "20:15", turma: "Adulto Gi — avançado" },
    ],
  },
  {
    dia: "Terça e Quinta",
    aulas: [
      { hora: "17:00", turma: "Infantil e Kids (7–12)" },
      { hora: "18:00", turma: "Adolescente (13–17)" },
      { hora: "19:00", turma: "Feminino" },
      { hora: "20:15", turma: "No-Gi / Submission" },
    ],
  },
  {
    dia: "Sexta",
    aulas: [
      { hora: "18:00", turma: "Infantil — treino livre" },
      { hora: "19:00", turma: "Defesa pessoal" },
      { hora: "20:15", turma: "Treino livre adulto" },
    ],
  },
  {
    dia: "Sábado",
    aulas: [
      { hora: "09:00", turma: "Kids — todas as idades" },
      { hora: "10:00", turma: "Open mat (Gi e No-Gi)" },
    ],
  },
];

function Horarios() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-stencil text-sm text-accent">Grade semanal</p>
      <h1 className="mt-2 text-5xl">Horários</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Chegue 10 minutos antes da aula. Alunos novos podem experimentar qualquer turma da
        sua faixa etária.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {grade.map((d) => (
          <div key={d.dia} className="border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <h2 className="text-2xl text-primary">{d.dia}</h2>
            </div>
            <ul>
              {d.aulas.map((a) => (
                <li
                  key={a.hora + a.turma}
                  className="flex items-baseline gap-4 border-b border-border/60 px-6 py-3 last:border-0"
                >
                  <span className="text-stencil w-16 text-lg text-primary">{a.hora}</span>
                  <span className="text-sm text-muted-foreground">{a.turma}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        to="/contato"
        className="text-stencil mt-12 inline-block bg-primary px-6 py-3 text-primary-foreground"
      >
        Agendar aula experimental
      </Link>
    </div>
  );
}
