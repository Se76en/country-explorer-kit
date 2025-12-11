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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

          {/* Coat of Arms */}
          <div className="card-elevated text-center animate-fade-up animation-delay-200">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Stema Franței
            </h3>
            <div className="relative mx-auto w-44 h-44 flex items-center justify-center mb-6">
              {/* Simplified French Emblem SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer wreath */}
                <ellipse cx="100" cy="100" rx="90" ry="90" fill="none" stroke="hsl(var(--french-gold))" strokeWidth="3"/>
                
                {/* Oak and olive branches */}
                <path d="M30 150 Q50 120 70 130 Q60 100 80 90" fill="none" stroke="hsl(var(--french-gold))" strokeWidth="2"/>
                <path d="M170 150 Q150 120 130 130 Q140 100 120 90" fill="none" stroke="hsl(var(--french-gold))" strokeWidth="2"/>
                
                {/* Central shield */}
                <path d="M60 60 L140 60 L140 120 Q140 160 100 180 Q60 160 60 120 Z" fill="hsl(var(--french-blue))"/>
                
                {/* Fasces (bundle of rods) */}
                <rect x="95" y="70" width="10" height="80" fill="hsl(var(--french-gold))"/>
                <ellipse cx="100" cy="65" rx="15" ry="10" fill="hsl(var(--french-gold))"/>
                
                {/* RF monogram */}
                <text x="100" y="135" textAnchor="middle" fill="hsl(var(--french-gold))" fontFamily="serif" fontSize="28" fontWeight="bold">RF</text>
                
                {/* Banner */}
                <path d="M40 170 L160 170 L155 185 L45 185 Z" fill="hsl(var(--french-blue))"/>
                <text x="100" y="182" textAnchor="middle" fill="hsl(var(--french-white))" fontFamily="sans-serif" fontSize="8">LIBERTÉ ÉGALITÉ FRATERNITÉ</text>
              </svg>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
              Emblema actuală prezintă <strong>fascele</strong> (simbol al autorității), 
              monograma <strong>RF</strong> (République française) și deviza națională.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymbolsSection;
