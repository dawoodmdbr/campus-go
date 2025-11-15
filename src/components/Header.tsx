import { useState, useEffect } from "react";
import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 500);
    scrollToSection("hero");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Bus
              className={`h-8 w-8 text-primary transition-transform duration-500 ${
                isLogoAnimating ? "animate-bounce-slow" : ""
              }`}
            />
            <span className="text-2xl font-bold text-primary">Campus GO</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "how-it-works", "testimonials", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium capitalize relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.replace("-", " ")}
                </button>
              )
            )}
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Book a Ride
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="md:hidden rounded-full font-semibold"
            size="sm"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-4 mt-4 justify-center">
          {["home", "services", "how-it-works", "testimonials", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-foreground hover:text-primary transition-colors capitalize"
              >
                {item.replace("-", " ")}
              </button>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
