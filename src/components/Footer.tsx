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
            <span className="text-french-gold font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-french-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left cursor-default transition-colors duration-300 hover:text-french-white">
              Iurascu Iulian
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
