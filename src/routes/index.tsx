import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Shield, Users, Venus } from "lucide-react";
import logo from "@/assets/vagbomb-logo.jpg.asset.json";
import ibjjf from "@/assets/ibjjf-graduacao.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagbomb BJJ — Academia de Jiu-Jitsu Juvenil e Adulto" },
      {
        name: "description",
        content:
          "Academia Vagbomb BJJ: turmas de jiu-jitsu brasileiro para juvenil, adolescentes, adultos, masculino e feminino. Primeira aula grátis.",
      },
      { property: "og:title", content: "Vagbomb BJJ — Jiu-Jitsu para toda a família" },
      {
        property: "og:description",
        content:
          "Turmas juvenis, adultas, masculinas e femininas de jiu-jitsu. Venha treinar na Vagbomb BJJ.",
      },
    ],
  }),
  component: Home,
});

const programs = [
  {
    icon: Baby,
    title: "Juvenil 6–12",
    text: "A partir dos 6 anos: coordenação, disciplina e antibullying em aulas lúdicas e seguras. Menores de 6 anos atendidos em aulas particulares.",
  },
  {
    icon: Users,
    title: "Adulto Gi & No-Gi",
    text: "Fundamentos, drills e sparring para iniciantes e graduados.",
  },
  {
    icon: Venus,
    title: "Feminino",
    text: "Turma exclusiva, ambiente acolhedor e foco em defesa pessoal.",
  },
  {
    icon: Shield,
    title: "Defesa pessoal",
    text: "Situações reais, controle de distância e escape de posições.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <img
            src={logo.url}
            alt="Escudo Vagbomb BJJ"
            width={112}
            height={112}
            className="h-24 w-24 rounded-full border-2 border-primary object-cover md:h-28 md:w-28"
          />
          <h1 className="mt-8 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            Jiu-jitsu de verdade,
            <br />
            <span className="text-primary">para toda a família</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Turmas juvenis e adultas, masculinas e femininas. Do primeiro dia no tatame
            até a faixa preta, no ritmo certo para você.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="text-stencil inline-flex items-center gap-2 bg-primary px-6 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Agendar aula grátis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/horarios"
              className="text-stencil inline-flex items-center gap-2 border border-border px-6 py-3 hover:border-primary hover:text-primary"
            >
              Ver horários
            </Link>
          </div>
        </div>
      </section>

      <div className="hazard-stripe h-2 w-full" />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl">Nossas turmas</h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Cada faixa etária e cada objetivo tem seu espaço no tatame.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className="surface-grit border border-border p-6 transition-colors hover:border-primary"
            >
              <p.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <img
            src={logo.url}
            alt="Escudo Vagbomb BJJ"
            width={80}
            height={80}
            className="mx-auto h-16 w-16 rounded-full border-2 border-primary object-cover"
          />
          <p className="text-stencil mt-6 text-sm text-accent">Juvenil</p>
          <h2 className="mt-2 text-4xl">Confiança que sai do tatame</h2>
          <p className="mt-4 text-muted-foreground">
            As aulas juvenis unem brincadeira e técnica. As crianças aprendem respeito,
            foco e como se defender — e levam isso para a escola e para casa.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-muted-foreground">
            <li>• Turmas separadas por idade e tamanho</li>
            <li>• Professores certificados e formação continuada</li>
          </ul>
          <Link
            to="/contato"
            className="text-stencil mt-8 inline-flex items-center gap-2 text-primary"
          >
            Agendar aula juvenil <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-stencil text-sm text-accent">Feminino</p>
        <h2 className="mt-2 text-4xl">Força, técnica e irmandade</h2>
        <p className="mt-4 text-muted-foreground">
          Turma feminina com professora responsável, foco em defesa pessoal e
          progressão técnica. Você não precisa ter experiência nenhuma para começar.
        </p>
        <Link
          to="/turmas"
          className="text-stencil mt-6 inline-flex items-center gap-2 text-primary"
        >
          Conhecer as turmas <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-stencil text-sm text-accent">Inclusão</p>
          <h2 className="mt-2 text-4xl">Jiu-jitsu para todos os cérebros</h2>
          <p className="mt-4 text-muted-foreground">
            Aulas adaptadas para alunos no espectro autista (TEA) e com TDAH.
            Ambiente calmo, estímulos controlados e professores preparados para
            acolher cada aluno no seu ritmo — o tatame como espaço de regulação,
            foco e autoestima.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-muted-foreground">
            <li>• Turma exclusiva de inclusão (TEA e TDAH)</li>
            <li>• Aulas com redução de estímulos sensoriais</li>
            <li>• Professores capacitados em neurodivergência</li>
            <li>• Acompanhamento individualizado do progresso</li>
          </ul>
          <Link
            to="/contato"
            className="text-stencil mt-8 inline-flex items-center gap-2 text-primary"
          >
            Agendar aula de inclusão <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="md:flex-1">
            <p className="text-stencil text-sm text-accent">Filiação</p>
            <h2 className="mt-2 text-4xl">Registrados na IBJJF e CBJJ</h2>
            <p className="mt-4 text-muted-foreground">
              Somos filiados à <strong className="text-foreground">IBJJF</strong>{" "}
              (International Brazilian Jiu-Jitsu Federation) e à{" "}
              <strong className="text-foreground">CBJJ</strong> (Confederação
              Brasileira de Jiu-Jitsu). Nossos alunos seguem o sistema oficial de
              graduação, com faixas e graus reconhecidos em qualquer campeonato
              do Brasil e do mundo.
            </p>
            <Link
              to="/contato"
              className="text-stencil mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-primary-foreground"
            >
              Quero começar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:flex-1">
            <img
              src={ibjjf.url}
              alt="Sistema de graduação IBJJF — idades mínimas, hierarquia e graus das faixas"
              className="w-full border border-border object-contain"
              loading="lazy"
            />
            <p className="text-stencil mt-2 text-center text-xs text-muted-foreground">
              Sistema oficial de graduação IBJJF
            </p>
          </div>
        </div>
      </section>

      <section className="hazard-stripe">
        <div className="bg-background/90">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <h2 className="text-4xl">Primeira aula é por nossa conta</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Traga roupa confortável. O resto a gente resolve no tatame.
            </p>
            <Link
              to="/contato"
              className="text-stencil mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3 text-primary-foreground"
            >
              Quero treinar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
