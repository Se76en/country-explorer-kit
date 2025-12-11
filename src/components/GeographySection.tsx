import { MapPin, Building, Landmark, Globe2 } from "lucide-react";

const GeographySection = () => {
  const cities = [
    { name: "Paris", role: "Capitală", population: "2.1 mil." },
    { name: "Marseille", role: "Port principal", population: "870.000" },
    { name: "Lyon", role: "Centru industrial", population: "520.000" },
    { name: "Toulouse", role: "Centru aerospațial", population: "480.000" },
  ];

  const organizations = [
    { name: "ONU", full: "Organizația Națiunilor Unite" },
    { name: "UE", full: "Uniunea Europeană" },
    { name: "NATO", full: "Organizația Tratatului Atlanticului de Nord" },
    { name: "G7", full: "Grupul celor 7" },
    { name: "OECD", full: "Organizația pentru Cooperare și Dezvoltare Economică" },
    { name: "OMC", full: "Organizația Mondială a Comerțului" },
  ];

  return (
    <section id="geography" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Secțiunea I
          </p>
          <h2 className="section-title mb-4">Geografia Politică</h2>
          <div className="tricolor-bar max-w-24 mx-auto" />
        </div>

        {/* Position Card */}
        <div className="card-elevated mb-8 animate-fade-up animation-delay-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Poziție Geografică
              </h3>
              <p className="text-muted-foreground text-sm">Localizare și coordonate</p>
            </div>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              Franța este situată în <strong>Europa de Vest</strong>, fiind cea mai mare țară din Uniunea Europeană. 
              Se învecinează cu <strong>Belgia, Luxemburg, Germania, Elveția, Italia, Monaco, Spania și Andorra</strong>. 
              Țara are ieșire la <strong>Oceanul Atlantic</strong> (vest) și <strong>Marea Mediterană</strong> (sud), 
              iar în nord se află <strong>Canalul Mânecii</strong> care o separă de Marea Britanie. 
              Coordonatele aproximative sunt <strong>46°N, 2°E</strong>.
            </p>
          </div>
        </div>

        {/* Government & Admin Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="card-elevated animate-fade-up animation-delay-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Building className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  Forma de Guvernământ
                </h3>
                <p className="text-muted-foreground text-sm">Sistem politic</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Franța este o <strong>republică semi-prezidențială</strong>, cu un președinte ales prin vot direct 
              și un prim-ministru numit de președinte.
            </p>
          </div>

          <div className="card-elevated animate-fade-up animation-delay-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/20">
                <Landmark className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  Structura Administrativă
                </h3>
                <p className="text-muted-foreground text-sm">Organizare teritorială</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Franța este împărțită în <strong>18 regiuni</strong> (13 metropolitane + 5 de peste mări), 
              <strong> 101 departamente</strong> și peste <strong>35.000 de comune</strong>. 
              Regiunile au autonomie în educație, transport și dezvoltare economică.
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="card-elevated mb-8 animate-fade-up animation-delay-400">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Capitala și Orașe Importante
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div 
                key={city.name}
                className={`p-4 rounded-lg ${index === 0 ? 'bg-primary/10 ring-1 ring-primary/20' : 'bg-muted/50'}`}
              >
                <p className="font-display text-lg font-semibold text-foreground">{city.name}</p>
                <p className="text-sm text-muted-foreground">{city.role}</p>
                <p className="text-sm font-medium text-primary mt-1">{city.population}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="card-elevated animate-fade-up animation-delay-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Globe2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Organizații Internaționale
              </h3>
              <p className="text-muted-foreground text-sm">Membre și participări</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {organizations.map((org) => (
              <span 
                key={org.name}
                className="px-4 py-2 rounded-full bg-muted text-foreground font-body text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                title={org.full}
              >
                {org.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
