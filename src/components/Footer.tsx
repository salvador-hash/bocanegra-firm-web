const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30">
      <div className="section-container py-16">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <span className="text-sm tracking-widest uppercase text-foreground">
              Bocanegra Asset Management LP
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-3xl">
            This website is for informational purposes only and does not constitute an offer 
            to sell or a solicitation of an offer to buy any securities. Past performance is 
            not indicative of future results. Investing involves risk, including the potential 
            loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
