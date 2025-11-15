import { MapPin, Smartphone, Shield, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const services = [
  {
    icon: MapPin,
    title: "Daily Pickup/Dropoff",
    description: "Reliable door-to-door service ensuring your child arrives safely and on time every day.",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Real-Time Tracking",
    description: "Track your child's journey in real-time with our mobile app for complete peace of mind.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Trusted Drivers",
    description: "All drivers are thoroughly vetted, trained, and experienced in child safety protocols.",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Customize pickup and drop-off times to match your family's schedule perfectly.",
    color: "text-primary",
  },
];

const Services = () => {
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setAnimatingCard(index);
    setTimeout(() => setAnimatingCard(null), 500);
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for safe, reliable, and stress-free school transportation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                onClick={() => handleCardClick(index)}
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  animatingCard === index ? "animate-wiggle" : ""
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
