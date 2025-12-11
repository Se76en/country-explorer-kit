import { BookOpen, ExternalLink } from "lucide-react";

const BibliographySection = () => {
  const sources = [
    {
      title: "France - Wikipedia",
      url: "https://en.wikipedia.org/wiki/France",
      description: "Informații generale despre geografie, istorie și organizare administrativă",
      accessed: "decembrie 2024",
    },
    {
      title: "INSEE - Institut national de la statistique",
      url: "https://www.insee.fr/",
      description: "Date oficiale despre populație, demografie și economie",
      accessed: "decembrie 2024",
    },
    {
      title: "The World Bank - France Data",
      url: "https://data.worldbank.org/country/france",
      description: "Indicatori demografici și economici la nivel mondial",
      accessed: "decembrie 2024",
    },
    {
      title: "CIA World Factbook - France",
      url: "https://www.cia.gov/the-world-factbook/countries/france/",
      description: "Date actualizate despre geografie, populație și guvernare",
      accessed: "decembrie 2024",
    },
  ];

  return (
    <section id="bibliography" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Referințe
          </p>
          <h2 className="section-title mb-4">Bibliografie</h2>
          <div className="tricolor-bar max-w-24 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated animate-fade-up animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Surse utilizate
              </h3>
            </div>
            
            <ol className="space-y-4">
              {sources.map((source, index) => (
                <li 
                  key={source.title}
                  className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {source.title}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {source.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Accesat: {source.accessed}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibliographySection;
