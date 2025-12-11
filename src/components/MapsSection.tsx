import franceEuropeLocation from "@/assets/france-europe-location.png";
import franceAdministrativeMap from "@/assets/france-administrative-map.png";

const MapsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Reprezentări Cartografice
          </p>
          <h2 className="section-title mb-4">Hărți</h2>
          <div className="tricolor-bar max-w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Location Map */}
          <div className="card-elevated animate-fade-up animation-delay-100">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Localizare în Europa
            </h3>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src={franceEuropeLocation}
                alt="Harta localizării Franței în Europa"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-4 text-center">
              Poziția Franței în cadrul Uniunii Europene
            </p>
          </div>

          {/* Administrative Map */}
          <div className="card-elevated animate-fade-up animation-delay-200">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Harta Administrativă
            </h3>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src={franceAdministrativeMap}
                alt="Harta administrativă a Franței cu regiuni și departamente"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-4 text-center">
              Cele 18 regiuni și 101 departamente ale Franței
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
