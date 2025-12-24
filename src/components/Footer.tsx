const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/10">
      <div className="section-container py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/60">
            © {currentYear} Bocanegra Asset Management
          </span>
          
          <p className="text-[10px] text-muted-foreground/50 max-w-md leading-relaxed">
            This website is for informational purposes only and does not constitute 
            an offer to sell or a solicitation of an offer to buy any securities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
