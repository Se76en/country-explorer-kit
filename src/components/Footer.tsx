const Footer = () => {
  return (
    <footer className="bg-french-navy py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Tricolor bar */}
          <div className="h-1 w-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-french-blue via-french-white to-french-red" />
          
          <p className="font-display text-2xl text-french-white mb-4">
            Franța
          </p>
          <p className="font-body text-french-white/60 text-sm">
            Realizat de{" "}
            <span className="text-french-gold font-semibold inline-block hover:scale-110 hover:text-french-white transition-all duration-300 cursor-default animate-pulse">
              Iurascu Iulian
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
