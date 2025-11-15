import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    childName: "",
    school: "",
    location: "",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.parentName ||
      !formData.email ||
      !formData.childName ||
      !formData.school
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show confetti animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);

    // Show success message
    toast.success("Booking request sent successfully! We'll contact you soon.");

    // Reset form
    setFormData({
      parentName: "",
      email: "",
      childName: "",
      school: "",
      location: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
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

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book a Ride or Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Parent Name *
                  </label>
                  <Input
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Child Name *
                  </label>
                  <Input
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Child's name"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    School/Kindergarten *
                  </label>
                  <Input
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="School name"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Pickup/Drop Location
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your address or pickup location"
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional information or special requests..."
                  rows={4}
                  className="rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full font-bold text-lg py-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
