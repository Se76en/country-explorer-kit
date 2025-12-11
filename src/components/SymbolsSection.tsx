const SymbolsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Identitate Națională
          </p>
          <h2 className="section-title mb-4">Simboluri Naționale</h2>
          <div className="tricolor-bar max-w-24 mx-auto" />
        </div>

        <div className="max-w-md mx-auto">
          {/* Flag */}
          <div className="card-elevated text-center animate-fade-up animation-delay-100">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Drapelul Franței
            </h3>
            <div className="relative mx-auto w-64 h-44 rounded-lg overflow-hidden shadow-elevated mb-6">
              {/* French Tricolor Flag */}
              <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full bg-[#002395]" />
                <div className="w-1/3 h-full bg-[#ffffff]" />
                <div className="w-1/3 h-full bg-[#ED2939]" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
              <strong>Tricolorul</strong> – albastru, alb și roșu – a fost adoptat în timpul Revoluției Franceze (1789) 
              și simbolizează valorile <em>Liberté, Égalité, Fraternité</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymbolsSection;
