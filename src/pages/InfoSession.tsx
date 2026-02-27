import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const InfoSession = () => {
  useEffect(() => {
    // Ensure Calendly widget initializes after script loads
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundDots />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 animate-fade-in">
              Book an Info Session
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Schedule a free 30-minute session with our team to learn more about our programs, 
              ask questions, and see if Research Compass Academy is right for you.
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elegant card-hover">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">What to Expect</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>Learn about our Research Basics and Research Scholar programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>Discuss your research interests and academic goals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>Ask questions about mentorship, curriculum, and outcomes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>Get guidance on the application process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>Meet one of our program administrators via video call</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-2xl font-serif font-bold mb-4">Schedule Your Session</h2>
                    <p className="text-muted-foreground mb-6">
                      Choose a convenient time from the calendar below. You'll receive a 
                      confirmation email with video call details.
                    </p>
                  </div>

                  {/* Calendly inline widget begin */}
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/research-compass-org/30min" 
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                  {/* Calendly inline widget end */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is the info session free?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Info sessions are completely free with no obligation to apply.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How long is the session?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sessions typically last 30 minutes, with time for your questions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I reschedule if needed?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! You can reschedule or cancel through the confirmation email.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do I need to prepare anything?</h3>
                  <p className="text-sm text-muted-foreground">
                    Just come with your questions! It helps to think about your research interests beforehand.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InfoSession;
