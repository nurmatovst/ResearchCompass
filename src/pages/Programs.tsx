import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundDots />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 animate-fade-in">
              Our Programs
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Choose the program that best fits your research journey. 
              From fundamentals to advanced research publication.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Research Fundamentals */}
              <Card className="hover-lift card-hover shadow-elegant border-2 border-primary relative">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-serif font-bold mb-2">Research Fundamentals</h2>
                      <p className="text-muted-foreground">Perfect for beginners</p>
                    </div>
                    <span className="bg-gradient-gold text-primary px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      <span className="bg-gradient-gold bg-clip-text text-transparent">4 Weeks</span>
                    </div>
                    <p className="text-sm text-muted-foreground">18 hours of lessons with mentors from Harvard, Yale, Stanford, etc.</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Introduction to Research Methodology</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Critical Thinking & Analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Academic Writing Fundamentals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Literature Review Techniques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Research Ethics & Integrity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Group Webinars with Mentors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Certificate of Completion</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Program Deliverable:</h3>
                    <p className="text-sm text-muted-foreground">Ability to carry out independent research with confidence</p>
                  </div>

                  <Link to="/apply">
                    <Button className="w-full bg-background text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-colors">
                      Apply for Research Fundamentals
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Research Scholar */}
              <Card className="hover-lift card-hover shadow-elegant">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-serif font-bold mb-2">Research Scholar</h2>
                    <p className="text-muted-foreground">Advanced program with publication</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      <span className="bg-gradient-gold bg-clip-text text-transparent">16 Weeks</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Mentorship-based program</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span className="font-semibold">Everything in Research Fundamentals, plus:</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>12 sessions with professor from Harvard, Yale, Stanford, etc.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>3 sessions with writing specialist</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>1 session with publishing specialist</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Develop Your Own Research Project</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Advanced Academic Writing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Data Analysis & Interpretation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent mt-0.5" size={20} />
                      <span>Letter of Recommendation</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Program Deliverable:</h3>
                    <p className="text-sm text-muted-foreground">Completed research paper ready for publication with guidance from top university professors</p>
                  </div>

                  <Link to="/apply">
                    <Button className="w-full bg-gradient-gold text-primary font-semibold">
                      Apply for Research Scholar
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out our application form with your background and interests
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Join an info session to learn more and meet our team
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Start Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin your program with access to courses and mentors
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Achieve</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete your program and receive your certificate
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Book a free info session to speak with our team and learn more about our programs.
            </p>
            <Link to="/info-session">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                Schedule Info Session
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;