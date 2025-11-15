import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCTAClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-secondary animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Safe and Reliable{" "}
            <span className="text-primary">School Transport</span> for Your Child
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Peace of mind for parents, fun ride for kids
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="rounded-full font-bold text-lg px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Ride
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
              className="rounded-full font-semibold text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative animate-scale-in">
          <img
            src={heroImage}
            alt="Happy children on school bus"
            className="rounded-3xl shadow-2xl w-full h-auto"
          />
          <div className="absolute -bottom-4 -right-4 bg-secondary text-foreground font-bold px-6 py-3 rounded-full shadow-lg animate-bounce-slow">
            100% Safe ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
