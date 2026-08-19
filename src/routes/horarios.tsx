import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horários das Aulas — Vagbomb BJJ" },
      {
        name: "description",
        content:
          "Grade de horários da Vagbomb BJJ: aulas juvenis (a partir de 6 anos), adultas, femininas, no-gi e Muay Thai de segunda a sábado. Menores de 6 anos em aulas particulares.",
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
    aulas: [{ hora: "21:00–22:00", turma: "Muay Thai", destaque: true }],
  },
  {
    dia: "Terça e Quinta",
    aulas: [
      { hora: "19:00–20:00", turma: "Kids" },
      { hora: "20:00–21:00", turma: "Juvenil" },
      { hora: "21:00–22:00", turma: "Adultos" },
    ],
  },
  {
    dia: "Sexta",
    aulas: [{ hora: "21:00–22:00", turma: "Muay Thai", destaque: true }],
  },
  {
    dia: "Sábado",
    aulas: [
      { hora: "06:30–07:30", turma: "Muay Thai", destaque: true },
      { hora: "08:30–10:00", turma: "Feminino" },
    ],
  },
];

const gradeDistrito = [
  {
    dia: "Segunda e Quarta",
    aulas: [
      { hora: "18:00–19:00", turma: "Kids 1" },
      { hora: "19:00–20:00", turma: "Kids 2" },
      { hora: "20:00–21:00", turma: "Adultos" },
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
              <p className="text-stencil text-xs text-muted-foreground">Sede — Salesópolis</p>
            </div>
            <ul>
              {d.aulas.map((a) => (
                <li
                  key={a.hora + a.turma}
                  className={`flex items-baseline gap-4 border-b border-border/60 px-6 py-3 last:border-0 ${
                    a.destaque ? "bg-accent/10" : ""
                  }`}
                >
                  <span className="text-stencil w-28 text-lg text-primary">{a.hora}</span>
                  <span
                    className={`text-sm ${a.destaque ? "text-accent font-semibold" : "text-muted-foreground"}`}
                  >
                    {a.turma}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-stencil text-sm text-accent">Filial</p>
        <h2 className="mt-2 text-3xl">Distrito de Remédios</h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          R. Joaquim Domingues Martins — Nossa Sra. do Remédio, Salesópolis — SP. Aulas de Jiu-Jitsu.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {gradeDistrito.map((d) => (
            <div key={d.dia} className="border border-border bg-card">
              <div className="border-b border-border px-6 py-4">
                <h3 className="text-2xl text-primary">{d.dia}</h3>
                <p className="text-stencil text-xs text-muted-foreground">Distrito de Remédios</p>
              </div>
              <ul>
                {d.aulas.map((a) => (
                  <li
                    key={a.hora + a.turma}
                    className="flex items-baseline gap-4 border-b border-border/60 px-6 py-3 last:border-0"
                  >
                    <span className="text-stencil w-28 text-lg text-primary">{a.hora}</span>
                    <span className="text-sm text-muted-foreground">{a.turma}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Crianças a partir de 6 anos nas turmas juvenis. Para idades inferiores, trabalhamos com
        aulas particulares — consultar horário diretamente com a equipe.
      </p>

      <Link
        to="/contato"
        className="text-stencil mt-8 inline-block bg-primary px-6 py-3 text-primary-foreground"
      >
        Agendar aula experimental
      </Link>
    </div>
  );
}
