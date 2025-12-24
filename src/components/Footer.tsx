const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-container py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Bocanegra Asset Management
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fundamental-driven investing with a long-term perspective. 
              Generating sustainable alpha through rigorous analysis and 
              disciplined risk management.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-10" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bocanegra Asset Management. All rights reserved.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Important Notice:</strong> This website is for informational purposes only 
            and does not constitute an offer to sell or a solicitation of an offer to buy any 
            securities. Past performance is not indicative of future results. Investing involves 
            risk, including the potential loss of principal. Any investment or investment strategy 
            mentioned herein may not be appropriate for all investors. Investors should consult 
            their financial advisor before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
