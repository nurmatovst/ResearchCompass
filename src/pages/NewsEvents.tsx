import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsEvents = () => {
  const events = [
    {
      title: "Research Workshop: Getting Started",
      date: "March 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Online (Zoom)",
      description: "Join us for an introductory workshop on research methodology and how to begin your research journey.",
      registrationLink: "/info-session"
    },
    {
      title: "Success Stories: Student Research Presentations",
      date: "March 22, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Online (Zoom)",
      description: "Hear from our alumni as they present their published research and share their experiences.",
      registrationLink: "/info-session"
    },
    {
      title: "Info Session: Programs Overview",
      date: "March 29, 2025",
      time: "1:00 PM - 2:00 PM",
      location: "Online (Zoom)",
      description: "Learn about our Research Fundamentals and Research Scholar programs directly from our team.",
      registrationLink: "/info-session"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundDots />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 animate-fade-in">
              News & Events
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and announcements.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="hover-lift shadow-elegant">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-accent" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <Button 
                      className="bg-gradient-gold text-primary font-semibold"
                      onClick={() => window.location.href = event.registrationLink}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Don't Miss Out
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to stay updated with the latest events and opportunities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsEvents;