import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Intro, WhatsFloat, ManausMap } from "@/components/Extras";
import sala from "@/assets/sala.png.asset.json";
import cozinha1 from "@/assets/cozinha1.png.asset.json";
import cozinha2 from "@/assets/cozinha2.png.asset.json";
import recepcao from "@/assets/recepcao.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Classea Modulados | Móveis Planejados de Alto Padrão" },
      { name: "description", content: "Móveis modulados sob medida com excelência, fé e cuidado em cada detalhe. Faça seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "Classea Modulados | Móveis Planejados" },
      { property: "og:description", content: "Excelência, fé e persistência em cada projeto. Peça seu orçamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS = "5592994896228";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <svg viewBox="0 0 40 40" className="mb-2 h-10 w-10 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 34V8h22v26" />
        <path d="M14 34V16h20v18" />
        <circle cx="28" cy="25" r="1.4" fill="currentColor" />
      </svg>
      <span className="font-display text-2xl font-bold tracking-[0.2em] text-gold-gradient">CLASSEA</span>
      <span className="mt-1 text-[0.6rem] tracking-[0.5em] text-gold">MODULADOS</span>
    </div>
  );
}

const valores = [
  { t: "Excelência", d: "Cada peça é pensada para durar gerações, com acabamento de alto padrão." },
  { t: "Honestidade", d: "Transparência do orçamento à entrega. Palavra dada é palavra cumprida." },
  { t: "Fé", d: "Tudo que fazemos é entregue nas mãos de Deus, com gratidão e propósito." },
  { t: "Compromisso", d: "Prazos respeitados e um time que trata a sua casa como se fosse a nossa." },
];

const cuidados = [
  ["01", "Projeto sob medida", "Medição precisa e projeto 3D para cada centímetro do seu espaço."],
  ["02", "Materiais nobres", "MDF de primeira linha, ferragens premium e fitas de borda reforçadas."],
  ["03", "Fabricação precisa", "Cortes e acabamentos rigorosos, com conferência peça por peça."],
  ["04", "Montagem limpa", "Equipe treinada, ambiente protegido e entrega impecável."],
  ["05", "Iluminação LED", "Detalhes de luz que transformam móveis em obras de arte."],
  ["06", "Pós-venda", "Acompanhamos você mesmo depois da entrega. Cuidado contínuo."],
];

const frases = [
  "Tudo posso naquele que me fortalece — Filipenses 4:13",
  "Consagre ao Senhor tudo o que você faz — Provérbios 16:3",
  "A persistência é o caminho para o êxito",
  "Se Deus é por nós, quem será contra nós? — Romanos 8:31",
  "Grandes sonhos são construídos peça por peça",
];

function Index() {
  const [nome, setNome] = useState("");
  const [ideia, setIdeia] = useState("");
  const [erro, setErro] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const n = nome.trim().slice(0, 100);
    const i = ideia.trim().slice(0, 1000);
    if (!n || !i) return setErro("Preencha seu nome e a ideia do projeto.");
    setErro("");
    const msg = `Olá, Classea Modulados! 🙏\n\nMeu nome é *${n}* e gostaria de fazer um orçamento.\n\n*Ideia do projeto:*\n${i}\n\nVi o site e me identifiquei com os valores de vocês: excelência, honestidade, fé e compromisso. Acredito que a persistência é o caminho para o êxito! Aguardo o contato. Deus abençoe!`;
    window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="overflow-hidden">
      <Intro />
      <WhatsFloat />
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <span className="font-display text-lg font-bold tracking-[0.25em] text-gold-gradient">CLASSEA</span>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <a href="#valores" className="hover:text-primary">Valores</a>
            <a href="#cuidados" className="hover:text-primary">Cuidados</a>
            <a href="#projetos" className="hover:text-primary">Projetos</a>
            <a href="#manaus" className="hover:text-primary">Manaus</a>
          </nav>
          <a href="#orcamento" className="bg-gold-gradient px-4 py-2 text-[0.65rem] sm:px-5 sm:text-xs font-semibold uppercase tracking-widest text-primary-foreground">Orçamento</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center">
        <img src={sala.url} alt="Sala de TV com painel iluminado" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 px-6 text-center fade-up">
          <Logo className="mb-8 md:mb-10 md:scale-125" />
          <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-8xl">
            A persistência é o<br /><span className="text-gold-gradient">caminho pro êxito</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
            Móveis modulados de alto padrão, construídos com fé, precisão e o cuidado de quem sabe que cada lar é uma bênção.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#orcamento" className="bg-gold-gradient px-6 py-4 text-xs sm:px-8 sm:text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-105">Faça seu orçamento</a>
            <a href="#projetos" className="border border-primary px-6 py-4 text-xs sm:px-8 sm:text-sm font-bold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground">Ver projetos</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y bg-card py-5">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-lg tracking-widest text-gold">
          {[...frases, ...frases].map((f, i) => <span key={i}>✦ {f}</span>)}
        </div>
      </div>

      {/* VALORES */}
      <section id="valores" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.5em] text-gold">Nossos valores</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">Classe A não é só no nome. <span className="text-gold-gradient">É no caráter.</span></h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {valores.map((v, i) => (
            <div key={v.t} className="group bg-background p-8 transition hover:bg-card">
              <span className="font-display text-4xl md:text-5xl text-gold/30 transition group-hover:text-gold">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-bold">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERSE */}
      <section className="relative py-20 md:py-32 text-center">
        <img src={recepcao.url} alt="Recepção com iluminação linear" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-background/60" />
        <blockquote className="relative mx-auto max-w-4xl px-6">
          <p className="font-display text-3xl leading-snug md:text-5xl">"Entrega o teu caminho ao Senhor, confia nele, e <span className="text-gold-gradient">o mais Ele fará."</span></p>
          <footer className="mt-6 text-sm uppercase tracking-[0.4em] text-gold">Salmos 37:5</footer>
        </blockquote>
      </section>

      {/* CUIDADOS */}
      <section id="cuidados" className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative">
          <img src={cozinha2.url} alt="Cozinha compacta preta com ripado de madeira" className="h-full max-h-[700px] w-full object-cover shadow-gold" />
          <div className="absolute -bottom-6 -right-6 hidden border border-primary bg-background p-6 md:block">
            <p className="font-display text-4xl text-gold-gradient">100%</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">sob medida</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Cuidado na construção</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Cada detalhe, <span className="text-gold-gradient">feito com propósito</span></h2>
          <div className="mt-10 space-y-6">
            {cuidados.map(([n, t, d]) => (
              <div key={n} className="flex gap-6 border-b pb-6">
                <span className="font-display text-gold">{n}</span>
                <div>
                  <h3 className="font-semibold uppercase tracking-wider">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Projetos</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Sonhos que <span className="text-gold-gradient">ganharam forma</span></h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              [sala.url, "Sala de TV com LED"],
              [cozinha1.url, "Cozinha Taupe"],
              [cozinha2.url, "Cozinha Black & Wood"],
              [recepcao.url, "Recepção Minimalista"],
            ].map(([src, t], i) => (
              <figure key={t} className={`group relative overflow-hidden ${i % 2 ? "md:mt-16" : ""}`}>
                <img src={src} alt={t} loading="lazy" className="h-[340px] md:h-[480px] w-full object-cover transition duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6 font-display text-lg tracking-wider">{t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MOTIVACIONAL */}
      <section className="border-y bg-card py-24 text-center">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          {[
            ["Sonhe", "Deus colocou esse desejo no seu coração por um motivo."],
            ["Persista", "Quem não desiste, vê a obra de Deus se completar."],
            ["Realize", "Seu novo ambiente começa com um primeiro passo."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-display text-5xl font-black text-gold-gradient">{t}</h3>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <ManausMap />

      {/* ORÇAMENTO */}
      <section id="orcamento" className="relative px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Comece hoje</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Faça seu <span className="text-gold-gradient">orçamento</span></h2>
          <p className="mt-6 text-muted-foreground">"Os planos do diligente tendem à abundância." — Provérbios 21:5. Conte sua ideia e falamos com você no WhatsApp.</p>
        </div>
        <form onSubmit={enviar} className="mx-auto mt-14 max-w-2xl space-y-6 border bg-card p-6 shadow-gold md:p-12">
          <div>
            <label htmlFor="nome" className="text-xs uppercase tracking-[0.3em] text-gold">Seu nome</label>
            <input id="nome" value={nome} maxLength={100} onChange={(e) => setNome(e.target.value)} placeholder="Como podemos te chamar?" className="mt-2 w-full border-b border-input bg-transparent py-3 text-lg outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="ideia" className="text-xs uppercase tracking-[0.3em] text-gold">Ideia do projeto</label>
            <textarea id="ideia" value={ideia} maxLength={1000} onChange={(e) => setIdeia(e.target.value)} rows={4} placeholder="Ex: cozinha planejada em L, painel de TV com LED..." className="mt-2 w-full resize-none border-b border-input bg-transparent py-3 text-lg outline-none focus:border-primary" />
          </div>
          {erro && <p className="text-sm text-destructive">{erro}</p>}
          <button type="submit" className="w-full bg-gold-gradient py-5 text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground transition hover:scale-[1.02]">Enviar pelo WhatsApp</button>
          <p className="text-center text-xs text-muted-foreground">(92) 99489-6228</p>
        </form>
      </section>

      <footer className="border-t py-12 text-center">
        <Logo />
        <p className="mt-6 font-display text-sm tracking-widest text-gold">A persistência é o caminho pro êxito</p>
        <p className="mx-auto mt-6 max-w-md px-6 text-sm text-muted-foreground">Qualidade em cada encaixe, cuidado em cada detalhe. Cada móvel é feito para durar e transformar o seu lar.</p>
        <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} Classea Modulados · Feito com fé e excelência</p>
        <div className="mx-auto mt-8 flex w-fit items-center gap-3 border-t px-6 pt-6 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Criado com qualidade por <span className="text-gold">Hermex Solution</span></div>
      </footer>
    </main>
  );
}
