import { MapPin, Globe, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-french-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Tricolor accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-french-blue via-french-white to-french-red" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-french-white mb-6 tracking-tight">
            Franța
          </h1>
          <p className="font-display text-xl md:text-2xl text-french-white/80 italic mb-8">
            République française
          </p>
        </div>

        <div className="animate-fade-up animation-delay-200 flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
          <div className="flex items-center gap-2 text-french-white/90">
            <MapPin className="w-5 h-5 text-french-gold" />
            <span className="font-body">Europa de Vest</span>
          </div>
          <div className="flex items-center gap-2 text-french-white/90">
            <Globe className="w-5 h-5 text-french-gold" />
            <span className="font-body">551.695 km²</span>
          </div>
          <div className="flex items-center gap-2 text-french-white/90">
            <Users className="w-5 h-5 text-french-gold" />
            <span className="font-body">68.4 milioane locuitori</span>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
