const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-foreground mb-10">
            Bocanegra
            <br />
            <span className="text-muted-foreground">Asset Management</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mb-16">
            Fundamental-driven investing with a long-term perspective. 
            Generating sustainable alpha through rigorous analysis 
            and disciplined risk management.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Contact
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-container">
          <div className="divider-thin" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
