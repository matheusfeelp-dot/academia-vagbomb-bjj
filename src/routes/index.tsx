import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, HeartHandshake, Shield, Users, Venus } from "lucide-react";
import heroImg from "@/assets/hero-bjj.jpg";
import faixasImg from "@/assets/kids-faixas.jpg";
import womenImg from "@/assets/women-bjj.jpg";

import logo from "@/assets/vagbomb-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagbomb BJJ — Academia de Jiu-Jitsu Infantil e Adulto" },
      {
        name: "description",
        content:
          "Academia Vagbomb BJJ: turmas de jiu-jitsu brasileiro para crianças, adolescentes, adultos, masculino e feminino. Primeira aula grátis.",
      },
      { property: "og:title", content: "Vagbomb BJJ — Jiu-Jitsu para toda a família" },
      {
        property: "og:description",
        content:
          "Turmas infantis, adultas, masculinas e femininas de jiu-jitsu. Venha treinar na Vagbomb BJJ.",
      },
    ],
  }),
  component: Home,
});

const programs = [
  {
    icon: Baby,
    title: "Infantil 6–12",
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
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Atletas treinando jiu-jitsu na academia Vagbomb"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
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
            Turmas infantis e adultas, masculinas e femininas. Do primeiro dia no tatame
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <img
            src={faixasImg}
            alt="Crianças de jiu-jitsu com faixas verde, amarela e branca com graus coloridos"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full border border-border object-cover"
          />
          <div>
            <p className="text-stencil text-sm text-accent">Infantil</p>
            <h2 className="mt-2 text-4xl">Confiança que sai do tatame</h2>
            <p className="mt-4 text-muted-foreground">
              As aulas infantis unem brincadeira e técnica. As crianças aprendem respeito,
              foco e como se defender — e levam isso para a escola e para casa.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>• Turmas separadas por idade e tamanho</li>
              <li>• Graduação com faixas verde, amarela e branca com graus coloridos</li>
              <li>• Professores certificados e formação continuada</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
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
        </div>
        <img
          src={womenImg}
          alt="Turma feminina de jiu-jitsu treinando"
          width={1200}
          height={900}
          loading="lazy"
          className="order-1 w-full border border-border object-cover md:order-2"
        />
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-stencil text-sm text-accent">Inclusão</p>
          <h2 className="mt-2 text-4xl">Jiu-jitsu para todos os cérebros</h2>
          <p className="mt-4 text-muted-foreground">
            Aulas adaptadas para alunos no espectro autista e com TDAH. Ambiente
            calmo, estímulos controlados e professores preparados para acolher cada
            aluno no seu ritmo — o tatame como espaço de regulação, foco e
            autoestima.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-muted-foreground">
            <li>• Turma exclusiva de inclusão (autismo e TDAH)</li>
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
