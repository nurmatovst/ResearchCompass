import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundDots />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 animate-fade-in">
              Apply to Research Compass Academy
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Take the first step toward research excellence. Fill out the application form below to get started.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elegant card-hover">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-4">Application Requirements</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• High school diploma or equivalent</li>
                      <li>• Strong interest in research and academic inquiry</li>
                      <li>• Basic English proficiency</li>
                      <li>• Statement of purpose (included in application)</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-2xl font-serif font-bold mb-4">Submit Your Application</h2>
                    <p className="text-muted-foreground mb-4">
                      Click the button below to access our application form. Our admissions team will review your application and get
                      back to you within 5-7 business days.
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold mb-6">
                      Applications are reviewed on a rolling basis.
                    </p>
                  </div>

                  {/* Airtable Form Link */}
                  <div className="text-center py-8">
                    <Button 
                      size="lg"
                      asChild
                      className="gap-2"
                    >
                      <a 
                        href="https://airtable.com/appQUoopHgnpHhRfU/pag1wICUxhsimnaId/form"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Application Form
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              What Happens After You Apply?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews your application within 5-7 business days
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-sm text-muted-foreground">If selected, you'll be invited to a video interview</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Decision</h3>
                  <p className="text-sm text-muted-foreground">Receive your admission decision and next steps</p>
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

export default Apply;
