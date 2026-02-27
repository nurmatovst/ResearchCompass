import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import BackgroundDots from "@/components/BackgroundDots";
import ScrollIndicator from "@/components/ScrollIndicator";
import MouseFollower from "@/components/MouseFollower";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import harvardLogo from "@/assets/universities/harvard.png";
import yaleLogo from "@/assets/universities/yale.png";
import stanfordLogo from "@/assets/universities/stanford.png";
import princetonLogo from "@/assets/universities/princeton.png";
import upennLogo from "@/assets/universities/upenn.png";
import dukeLogo from "@/assets/universities/duke.png";
import columbiaLogo from "@/assets/universities/columbia.png";
import oxfordLogo from "@/assets/universities/oxford.png";

const Home = () => {
  const heroSection = useScrollAnimation(0.1);
  const featuresSection = useScrollAnimation(0.1);
  const programsSection = useScrollAnimation(0.1);
  const universitiesSection = useScrollAnimation(0.1);
  const ctaSection = useScrollAnimation(0.1);

  const universityLogos = [
    { name: "Harvard", logo: harvardLogo },
    { name: "Yale", logo: yaleLogo },
    { name: "Stanford", logo: stanfordLogo },
    { name: "Princeton", logo: princetonLogo },
    { name: "UPenn", logo: upennLogo },
    { name: "Duke", logo: dukeLogo },
    { name: "Columbia", logo: columbiaLogo },
    { name: "Oxford", logo: oxfordLogo },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      <BackgroundDots />
      <MouseFollower />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={heroSection.elementRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              heroSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Research Compass
            </h1>
            <div className="w-16 h-1 bg-primary-foreground mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              Direction to those who dare to explore
            </p>
          </div>
          
          {/* University Logos Carousel */}
          <div className="mt-6 max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {universityLogos.map((university, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="p-4 bg-primary-foreground/10 backdrop-blur rounded-lg flex items-center justify-center h-24 hover:bg-primary-foreground/20 transition-all duration-300">
                      <img 
                        src={university.logo} 
                        alt={university.name}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Features Section - Carousel */}
      <section
        ref={featuresSection.elementRef}
        className={`py-24 md:py-32 bg-background transition-all duration-1000 ${
          featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Why Choose Research Compass Academy?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto relative px-12">
            <Carousel 
              className="w-full"
              opts={{
                loop: true,
                align: "center",
              }}
            >
              <CarouselContent className="-ml-6">
                <CarouselItem className="pl-6 basis-4/5 md:basis-3/4">
                  <Card className="border-2 border-primary shadow-elegant card-hover">
                    <CardContent className="pt-12 pb-10 text-center h-[320px] flex flex-col justify-center">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <Users className="text-primary-foreground" size={36} />
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-4">Top Mentors</h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Learn from professors at Harvard, Yale, and Stanford
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-6 basis-4/5 md:basis-3/4">
                  <Card className="border-2 border-secondary shadow-elegant card-hover">
                    <CardContent className="pt-12 pb-10 text-center h-[320px] flex flex-col justify-center">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <Globe className="text-primary-foreground" size={36} />
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-4">Global Recognition</h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Join a prestigious international research community
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-6 basis-4/5 md:basis-3/4">
                  <Card className="border-2 border-primary shadow-elegant card-hover">
                    <CardContent className="pt-12 pb-10 text-center h-[320px] flex flex-col justify-center">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <Award className="text-primary-foreground" size={36} />
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-4">Generous Financial Aid</h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Access quality education with our scholarship programs
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-6 basis-4/5 md:basis-3/4">
                  <Card className="border-2 border-secondary shadow-elegant card-hover">
                    <CardContent className="pt-12 pb-10 text-center h-[320px] flex flex-col justify-center">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                        <BookOpen className="text-primary-foreground" size={36} />
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-4">Expert Guidance</h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Personalized mentorship throughout your research journey
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section
        ref={universitiesSection.elementRef}
        className={`py-20 md:py-28 bg-gradient-hero text-primary-foreground transition-all duration-1000 ${
          universitiesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Mentors Are From
            </h2>
            <div className="w-16 h-1 bg-primary-foreground mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-primary-foreground/10 backdrop-blur rounded-lg flex flex-col items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <img 
                  src={harvardLogo} 
                  alt="Harvard University"
                  className="h-32 w-32 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-primary-foreground">Harvard</p>
              </div>
              <div className="p-8 bg-primary-foreground/10 backdrop-blur rounded-lg flex flex-col items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <img 
                  src={yaleLogo} 
                  alt="Yale University"
                  className="h-32 w-32 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-primary-foreground">Yale</p>
              </div>
              <div className="p-8 bg-primary-foreground/10 backdrop-blur rounded-lg flex flex-col items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <img 
                  src={stanfordLogo} 
                  alt="Stanford University"
                  className="h-32 w-32 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-primary-foreground">Stanford</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section
        ref={programsSection.elementRef}
        className={`py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 transition-all duration-1000 ${
          programsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Programs</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift card-hover shadow-elegant border-0 bg-card/50 backdrop-blur overflow-hidden">
              <div className="h-2 bg-gradient-hero"></div>
              <CardContent className="p-10">
                <h3 className="text-3xl font-serif font-bold mb-4">Research Fundamentals</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Build a strong foundation in research methodology, critical thinking, and academic writing. Perfect
                  for beginners.
                </p>
                <Link to="/programs">
                  <Button size="lg" className="bg-gradient-hero text-primary-foreground font-semibold shadow-glow">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift card-hover shadow-elegant border-0 bg-card/50 backdrop-blur overflow-hidden">
              <div className="h-2 bg-gradient-accent"></div>
              <CardContent className="p-10">
                <h3 className="text-3xl font-serif font-bold mb-4">Research Scholar</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Advanced program with intensive mentorship and research project development. Publish your own research
                  paper.
                </p>
                <Link to="/programs">
                  <Button size="lg" className="bg-gradient-accent text-secondary-foreground font-semibold shadow-glow">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSection.elementRef}
        className={`py-32 md:py-40 bg-gradient-hero text-primary-foreground transition-all duration-1000 ${
          ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Ready to Start Your Research Journey?
          </h2>
          <div className="w-16 h-1 bg-primary-foreground mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Join hundreds of students who have transformed their academic careers with our programs.
          </p>
          <Link to="/apply">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-12 py-6 text-lg shadow-glow"
            >
              Apply Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
