import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import barbaImg from "@/assets/barba.jpg";
import interiorImg from "@/assets/interior.jpg";
import corte1 from "@/assets/corte1.jpg";
import corte2 from "@/assets/corte2.jpg";
import toolsImg from "@/assets/tools.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Salvi — Tradição & Estilo em Limeira" },
      { name: "description", content: "Barbearia Salvi em Limeira-SP. Cortes, barba, pigmentação e barbaterapia. 4,9★ em 97 avaliações. Agende online." },
      { property: "og:title", content: "Barbearia Salvi — Limeira-SP" },
      { property: "og:description", content: "Cortes, barba e barbaterapia. Agende online." },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Corte Social", desc: "Tesoura ou máquina, acabamento impecável.", price: "A partir de R$ 35" },
  { name: "Cabelo + Barba", desc: "O combo clássico — visual completo em uma sessão.", price: "A partir de R$ 60" },
  { name: "Barbaterapia", desc: "Toalha quente, vapor de ozônio e finalização premium.", price: "A partir de R$ 55" },
  { name: "Pigmentação", desc: "Cabelo ou barba — disfarça falhas e realça o desenho.", price: "A partir de R$ 45" },
  { name: "Platinado & Luzes", desc: "Descoloração técnica com tonalização.", price: "A partir de R$ 120" },
  { name: "Corte Infantil", desc: "Até 10 anos. Carinho, paciência e estilo.", price: "A partir de R$ 30" },
];

const reviews = [
  { text: "Ótimo lugar. Profissionais ótimos.", author: "Cliente Google" },
  { text: "Os melhores da cidade, gente boa demais.", author: "Cliente Google" },
  { text: "Ambiente agradável, ótimo serviço.", author: "Cliente Google" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold font-display text-sm">S</div>
            <span className="font-display text-lg tracking-widest">SALVI</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#servicos" className="hover:text-gold transition">Serviços</a>
            <a href="#galeria" className="hover:text-gold transition">Galeria</a>
            <a href="#sobre" className="hover:text-gold transition">Sobre</a>
            <a href="#contato" className="hover:text-gold transition">Contato</a>
          </nav>
          <a
            href="tel:+5519992031375"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold hover:shadow-gold transition"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cliente sendo atendido na Barbearia Salvi" width={1600} height={1800} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-gold-soft">
              <span className="h-px w-12 bg-gold-soft" />
              Limeira · SP · Desde sempre
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8">
              A tradição<br />
              do <span className="text-gradient-gold italic">bem feito</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Cortes clássicos, barba afiada e o ritual completo da barbaterapia.
              Um espaço onde cada detalhe importa — e cada cliente sai como deve sair: impecável.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#agendar"
                className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:shadow-gold transition"
              >
                Agendar online
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div>
                <div className="font-display text-4xl text-gold">4,9</div>
                <div className="flex gap-0.5 text-gold text-xs mt-1">★★★★★</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-sm text-muted-foreground">
                <div className="text-foreground font-medium">+97 avaliações</div>
                <div>no Google</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-sm text-muted-foreground">
                <div className="text-foreground font-medium">+40 serviços</div>
                <div>no menu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-shimmer">
          Role para descer
        </div>
      </section>

      {/* RITUAL STRIP */}
      <section className="border-y border-border/40 py-8 overflow-hidden bg-card/40">
        <div className="flex gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60 tracking-[0.3em] animate-shimmer">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>CORTE</span><span className="text-gold">✦</span>
              <span>BARBA</span><span className="text-gold">✦</span>
              <span>PIGMENTAÇÃO</span><span className="text-gold">✦</span>
              <span>BARBATERAPIA</span><span className="text-gold">✦</span>
              <span>PLATINADO</span><span className="text-gold">✦</span>
              <span>SOBRANCELHA</span><span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">01 — O Menu</div>
              <h2 className="font-display text-5xl md:text-6xl leading-tight">
                Cada serviço,<br />um <span className="italic text-gradient-gold">ritual</span>.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mais de 40 serviços cuidadosamente executados — do corte social ao platinado,
                da barba na toalha quente à barbaterapia com vapor de ozônio.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="group bg-background hover:bg-card transition-all duration-500 p-10 relative"
              >
                <div className="absolute top-8 right-8 font-display text-xs text-gold-soft">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed min-h-[3rem]">{s.desc}</p>
                <div className="flex items-end justify-between border-t border-border/40 pt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.price}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Também atendemos: corte feminino curto · sobrancelha · depilação · limpeza de pele · pacotes para noivos
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA editorial */}
      <section id="galeria" className="relative py-32 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">02 — A Obra</div>
              <h2 className="font-display text-5xl md:text-6xl">O resultado fala.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Trabalhos recentes do nosso time — clássico, moderno, ousado.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-5 row-span-2 relative group overflow-hidden">
              <img src={corte1} alt="Corte clássico moderno" loading="lazy" width={1000} height={1300} className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-6 left-6 font-display text-xl text-gold">Clássico Moderno</div>
            </div>
            <div className="col-span-6 md:col-span-4 relative group overflow-hidden">
              <img src={barbaImg} alt="Barba na toalha quente" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-6 left-6 font-display text-lg text-gold">Toalha Quente</div>
            </div>
            <div className="col-span-6 md:col-span-3 relative group overflow-hidden">
              <img src={toolsImg} alt="Ferramentas" loading="lazy" width={1400} height={900} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-6 md:col-span-3 relative group overflow-hidden">
              <img src={corte2} alt="Platinado" loading="lazy" width={1000} height={1300} className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-6 left-6 font-display text-lg text-gold">Platinado</div>
            </div>
            <div className="col-span-6 md:col-span-4 relative group overflow-hidden">
              <img src={interiorImg} alt="Interior da barbearia" loading="lazy" width={1600} height={1100} className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-6 left-6 font-display text-lg text-gold">Nossa Casa</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src={interiorImg} alt="Interior Salvi" loading="lazy" width={1600} height={1100} className="w-full aspect-[4/5] object-cover shadow-warm" />
            <div className="absolute -bottom-8 -right-8 bg-background border border-gold/40 p-8 max-w-xs hidden md:block">
              <div className="font-display text-5xl text-gradient-gold mb-2">4,9★</div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                97 avaliações verificadas no Google
              </p>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">03 — A Casa</div>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
              Onde Limeira<br />vem se <span className="italic text-gradient-gold">cuidar</span>.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Barbearia Salvi nasceu da convicção de que cortar cabelo é ofício sério —
                feito de mão firme, olho treinado e tempo dedicado a cada cliente.
              </p>
              <p>
                Recebemos no Jardim Ouro Verde com ambiente acolhedor, café por conta da casa
                e profissionais que entendem o que você quer antes mesmo de você dizer.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <div className="font-display text-3xl text-gold mb-1">+40</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Serviços</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold mb-1">7</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Dias / semana*</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold mb-1">★★★★★</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">No Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-32 px-6 bg-card/30 border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">04 — A Voz dos Clientes</div>
            <h2 className="font-display text-5xl md:text-6xl">Eles que dizem.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/40">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background p-10">
                <div className="text-gold mb-6">★★★★★</div>
                <p className="font-display text-xl leading-relaxed mb-6">"{r.text}"</p>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">— {r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA AGENDAR */}
      <section id="agendar" className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1600} height={1800} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-6">Sua vez</div>
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-[0.95]">
            Agende seu<br /><span className="italic text-gradient-gold">próximo corte</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Reserva online disponível. Atendimento por horário marcado para você não esperar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+5519992031375" className="bg-gold text-primary-foreground px-10 py-5 text-sm uppercase tracking-[0.25em] font-semibold hover:shadow-gold transition">
              (19) 99203-1375
            </a>
            <a
              href="https://wa.me/5519992031375"
              target="_blank"
              rel="noopener"
              className="border border-gold text-gold px-10 py-5 text-sm uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-primary-foreground transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATO */}
      <footer id="contato" className="border-t border-border/40 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-display">S</div>
              <span className="font-display text-2xl tracking-widest">SALVI</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Barbearia Salvi — tradição, precisão e estilo no coração de Limeira.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Endereço</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              R. Vicente de Felice, 290<br />
              Jardim Ouro Verde<br />
              Limeira — SP, 13482-075
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contato</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <a href="tel:+5519992031375" className="hover:text-foreground block">(19) 99203-1375</a>
              <span className="block mt-2">Fechado · Abre qui. às 09:00</span>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/40 flex justify-between text-xs text-muted-foreground uppercase tracking-[0.2em]">
          <span>© Barbearia Salvi</span>
          <span>Limeira · SP</span>
        </div>
      </footer>
    </div>
  );
}
