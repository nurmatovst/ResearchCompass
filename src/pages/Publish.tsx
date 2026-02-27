import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publish = () => {
  // Sample publications - in production, this would come from a database
  const publications = [
    {
      title: "The Impact of Social Media on Youth Mental Health",
      author: "Aisha Karimova",
      program: "Research Scholar 2024",
      abstract: "This study examines the correlation between social media usage patterns and mental health outcomes among adolescents aged 13-18...",
      date: "March 2024",
      pdfUrl: "#",
    },
    {
      title: "Climate Change Adaptation Strategies in Central Asia",
      author: "Sardor Ergashev",
      program: "Research Scholar 2024",
      abstract: "An analysis of agricultural adaptation methods to climate change in Uzbekistan, focusing on water conservation techniques...",
      date: "February 2024",
      pdfUrl: "#",
    },
    {
      title: "AI in Education: Opportunities and Challenges",
      author: "Malika Tursunova",
      program: "Research Scholar 2023",
      abstract: "Exploring the integration of artificial intelligence tools in secondary education and their impact on learning outcomes...",
      date: "December 2023",
      pdfUrl: "#",
    },
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
              Student Publications
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Discover research papers published by our talented students. 
              Each publication represents months of dedication, mentorship, and academic excellence.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-muted-foreground">Papers Published</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                  30+
                </div>
                <p className="text-muted-foreground">Student Researchers</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                  12+
                </div>
                <p className="text-muted-foreground">Research Fields</p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Recent Publications
            </h2>
            <div className="max-w-5xl mx-auto space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover-lift card-hover shadow-elegant">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold mb-2">{pub.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <span>By {pub.author}</span>
                          <span>•</span>
                          <span>{pub.program}</span>
                          <span>•</span>
                          <span>{pub.date}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                        <Button 
                          size="sm" 
                          className="bg-primary text-primary-foreground"
                          onClick={() => window.open(pub.pdfUrl, '_blank')}
                        >
                          <Download size={16} className="mr-2" />
                          Read Full Paper
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your Research CTA */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Want to Publish Your Research?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our Research Scholar program and work with expert mentors to develop 
              and publish your own research paper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-primary-foreground hover:bg-accent/90 font-semibold px-8"
                onClick={() => window.location.href = '/programs'}
              >
                View Programs
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground px-8"
                onClick={() => window.location.href = '/apply'}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Publish;
