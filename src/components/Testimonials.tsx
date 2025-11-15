import { Card, CardContent } from "@/components/ui/card";
import { Quote, Sparkles } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2",
    quote: "Campus GO has been a lifesaver! My kids love their rides to school, and I have complete peace of mind knowing they're safe.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Father of 1",
    quote: "The real-time tracking feature is amazing. I can see exactly where my daughter is at all times. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Mother of 3",
    quote: "Professional drivers, punctual service, and my kids actually look forward to their rides. What more could I ask for?",
    rating: 5,
  },
];

const Testimonials = () => {
  const [confettiCard, setConfettiCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setConfettiCard(index);
    setTimeout(() => setConfettiCard(null), 1000);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from happy families using Campus GO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Confetti Effect */}
              {confettiCard === index && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  {[...Array(10)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="absolute text-secondary animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 0.3}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              <CardContent className="p-8 space-y-4">
                <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary transition-colors" />
                <p className="text-foreground italic">{testimonial.quote}</p>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
