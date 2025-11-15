import { MousePointerClick, UserCheck, Navigation, School } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Book a Ride Online",
    description: "Easy online booking through our website or mobile app in just a few clicks.",
  },
  {
    icon: UserCheck,
    title: "Child Gets Picked Up Safely",
    description: "Our trusted driver arrives at your doorstep and ensures a warm welcome for your child.",
  },
  {
    icon: Navigation,
    title: "Track the Ride in Real-Time",
    description: "Monitor your child's journey with live GPS tracking and receive notifications.",
  },
  {
    icon: School,
    title: "Safe Drop-off at School",
    description: "Your child is dropped off safely at school or kindergarten, ready for the day ahead.",
  },
];

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, safe, and seamless transportation in 4 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Number */}
                <div
                  className={`absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-transform duration-300 ${
                    hoveredStep === index ? "scale-110 rotate-12" : ""
                  }`}
                >
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card border-2 border-border rounded-3xl p-6 h-full space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      className={`h-8 w-8 text-accent transition-transform duration-300 ${
                        hoveredStep === index ? "animate-wiggle" : ""
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
