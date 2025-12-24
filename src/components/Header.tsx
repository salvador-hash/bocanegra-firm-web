import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm tracking-widest uppercase text-foreground font-normal"
          >
            BAM FUNDS
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/30">
          <div className="section-container py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
