import { useEffect, useState } from "react";

const WHATS = "5592994896228";

export function Intro() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), 2600);
    const t2 = setTimeout(() => close(), 3300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  const close = () => {
    document.body.style.overflow = "";
    setShow(false);
  };
  if (!show) return null;
  return (
    <div onClick={close} className={`cursor-pointer fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6 text-center transition-all duration-700 ${leaving ? "intro-out" : ""}`}>
      <svg viewBox="0 0 40 40" className="h-20 w-20 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
        <path className="draw" d="M6 34V8h22v26" />
        <path className="draw" style={{ animationDelay: ".3s" }} d="M14 34V16h20v18" />
        <circle cx="28" cy="25" r="1.4" fill="currentColor" className="intro-pop" />
      </svg>
      <h1 className="intro-letters mt-6 font-display text-4xl font-bold text-gold-gradient sm:text-6xl">CLASSEA</h1>
      <p className="intro-pop mt-2 text-xs tracking-[0.6em] text-gold" style={{ animationDelay: ".9s" }}>MODULADOS</p>
      <div className="intro-line mt-8 h-px w-48 bg-gold-gradient" />
      <p className="fade-up mt-6 font-display text-lg italic sm:text-2xl" style={{ animationDelay: "1.3s" }}>"A persistência é o caminho pro êxito"</p>
      <p className="fade-up mt-2 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground" style={{ animationDelay: "1.7s" }}>Projetos sob a bênção de Deus ✦</p>
    </div>
  );
}

export function WhatsFloat() {
  const msg = encodeURIComponent("Olá, Classea Modulados! 🙏 Vi o site e quero saber mais sobre os móveis planejados.");
  return (
    <a href={`https://wa.me/${WHATS}?text=${msg}`} target="_blank" rel="noreferrer" aria-label="Fale no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <span className="hidden rounded-full border bg-background/90 px-4 py-2 text-xs uppercase tracking-widest text-gold backdrop-blur sm:block">Fale agora</span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gold-gradient shadow-gold transition group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7 text-primary-foreground" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" /></svg>
      </span>
    </a>
  );
}

const zonas: { n: string; d: string; c: [number, number] }[] = [
  { n: "Norte", d: "M120 40 L250 30 L280 120 L170 140 L110 110 Z", c: [190, 85] },
  { n: "Leste", d: "M280 120 L250 30 L360 60 L380 190 L300 210 Z", c: [320, 130] },
  { n: "Centro-Oeste", d: "M110 110 L170 140 L160 210 L80 200 L60 140 Z", c: [115, 165] },
  { n: "Centro-Sul", d: "M170 140 L280 120 L300 210 L230 230 L160 210 Z", c: [228, 178] },
  { n: "Oeste", d: "M60 140 L80 200 L70 260 L20 240 L20 170 Z", c: [48, 205] },
  { n: "Sul", d: "M80 200 L160 210 L230 230 L300 210 L290 260 L70 260 Z", c: [190, 240] },
];

export function ManausMap() {
  const [ativa, setAtiva] = useState("Centro-Sul");
  return (
    <section id="manaus" className="relative overflow-hidden border-y bg-card px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Área de atendimento</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Atendemos <span className="text-gold-gradient">toda Manaus</span></h2>
          <p className="mt-6 text-muted-foreground">Nós vamos até você! Nossa equipe vai à sua casa ou empresa, mede o ambiente e faz o orçamento no local, sem compromisso.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {zonas.map((z) => (
              <button key={z.n} onClick={() => setAtiva(z.n)}
                className={`border px-3 py-3 text-xs uppercase tracking-widest transition ${ativa === z.n ? "bg-gold-gradient text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>
                Zona {z.n}
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 border-l-2 border-primary pl-4">
            <span className="font-display text-4xl text-gold-gradient">✓</span>
            <p className="text-sm"><b className="text-gold">Zona {ativa}:</b> atendemos com visita técnica e orçamento grátis.</p>
          </div>
          <a href="#orcamento" className="mt-8 inline-block bg-gold-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-gold">Agendar visita</a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
          <svg viewBox="0 0 400 320" className="relative w-full">
            <defs>
              <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="var(--color-border)" strokeWidth=".5" /></pattern>
            </defs>
            <rect width="400" height="320" fill="url(#grid)" />
            {zonas.map((z) => (
              <g key={z.n} onClick={() => setAtiva(z.n)} className="cursor-pointer">
                <path d={z.d} className="transition-all duration-500" fill={ativa === z.n ? "var(--color-primary)" : "var(--color-background)"} fillOpacity={ativa === z.n ? 0.45 : 0.8} stroke="var(--color-primary)" strokeWidth="1.5" />
                <text x={z.c[0]} y={z.c[1]} textAnchor="middle" fontSize="9" letterSpacing="1.5" fill="var(--color-foreground)" className="pointer-events-none uppercase">{z.n}</text>
              </g>
            ))}
            <path d="M0 290 Q100 262 200 285 T400 270 L400 320 L0 320 Z" fill="var(--color-primary)" fillOpacity=".15" />
            <path d="M0 290 Q100 262 200 285 T400 270" fill="none" stroke="var(--color-primary)" strokeDasharray="4 6" className="river" />
            <text x="320" y="305" fontSize="9" fill="var(--color-primary)" fontStyle="italic">Rio Negro</text>
            {zonas.map((z, i) => (
              <g key={"p" + z.n}>
                <circle cx={z.c[0]} cy={z.c[1] - 16} r="10" fill="var(--color-primary)" opacity=".4"><animate attributeName="r" values="3;12;3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" /><animate attributeName="opacity" values=".6;0;.6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" /></circle>
                <circle cx={z.c[0]} cy={z.c[1] - 16} r="3.5" fill="var(--color-primary)" />
              </g>
            ))}
            <path id="rota" d="M48 189 L115 149 L228 162 L320 114 L190 69 L190 224 Z" fill="none" stroke="var(--color-primary)" strokeOpacity=".5" strokeDasharray="2 4" />
            <g>
              <rect x="-9" y="-6" width="18" height="12" rx="2" fill="var(--color-primary)" />
              <animateMotion dur="12s" repeatCount="indefinite" rotate="auto"><mpath href="#rota" /></animateMotion>
            </g>
          </svg>
          <p className="mt-2 text-center text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Nossa equipe em rota até você ✦</p>
        </div>
      </div>
    </section>
  );
}
