const LogoCarousel = () => {
  const companies = [
    "Retail Excellence",
    "Digital Marketing Pro",
    "E-Commerce Solutions",
    "Brand Innovators",
    "Customer First Co",
    "Growth Partners",
    "Marketing Masters",
    "Engage Solutions",
  ];

  return (
    <section className="relative py-20 overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-12">
          Trusted by innovative brands worldwide
        </h2>
        
        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-8 py-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <span className="text-xl font-semibold text-foreground/80 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
