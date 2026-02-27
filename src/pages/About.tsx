import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDots from "@/components/BackgroundDots";
import MouseFollower from "@/components/MouseFollower";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const About = () => {
  const heroSection = useScrollAnimation(0.1);
  const missionSection = useScrollAnimation(0.1);
  const storySection = useScrollAnimation(0.1);
  const teamSection = useScrollAnimation(0.1);
  const universitiesSection = useScrollAnimation(0.1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Director",
      bio: "PhD from Harvard, specializing in Educational Innovation",
      description: "Leading educational innovation with 15+ years of research experience in transformative learning methodologies."
    },
    {
      name: "Prof. Michael Chen",
      role: "Academic Director",
      bio: "Professor at Yale, Research Methodology Expert",
      description: "Renowned researcher with published works in leading academic journals worldwide."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Mentorship Coordinator",
      bio: "Stanford Graduate, 10+ years mentoring experience",
      description: "Passionate mentor who has guided over 200 students to academic success."
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in research education and mentorship quality.",
      icon: "🎯"
    },
    {
      title: "Accessibility",
      description: "Making world-class research education accessible to students worldwide.",
      icon: "🌍"
    },
    {
      title: "Innovation",
      description: "Pioneering new approaches to research training and academic development.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "Building a supportive global network of young researchers and scholars.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundDots />
      <MouseFollower />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          ref={heroSection.elementRef}
          className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground relative overflow-hidden"
        >
          <div 
            className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
              heroSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-8 leading-tight">
              About Research Compass
            </h1>
            <div className="w-20 h-1 bg-primary-foreground mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto font-light leading-relaxed">
              The first research community in Uzbekistan, bridging the gap between 
              aspiring researchers and world-class mentors
            </p>
          </div>
        </section>

        {/* Values Section with Hover Effects */}
        <section 
          ref={missionSection.elementRef}
          className={`py-24 md:py-32 relative overflow-hidden transition-all duration-1000 ${
            missionSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Core Values</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="h-full border-0 shadow-elegant bg-card/50 backdrop-blur overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-4xl">{value.icon}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-center transition-colors duration-300 group-hover:text-primary">
                        {value.title}
                      </h3>
                      <p 
                        className={`text-muted-foreground text-center leading-relaxed transition-all duration-500 ${
                          hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-70"
                        }`}
                      >
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section with Parallax Effect */}
        <section 
          ref={storySection.elementRef}
          className={`py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden transition-all duration-1000 ${
            storySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-primary-foreground mx-auto"></div>
              </div>
              <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light">
                <p className="opacity-90">
                  Research Compass Academy was founded in 2023 in Tashkent, Uzbekistan, 
                  with a simple yet powerful vision: to give students in Central Asia 
                  and beyond access to the same quality of research education available 
                  at top Western universities.
                </p>
                <p className="opacity-90">
                  Our founder, inspired by her own struggles to access quality research 
                  mentorship early in her academic career, assembled a team of professors 
                  from Harvard, Yale, and Stanford who shared her passion for democratizing 
                  education.
                </p>
                <p className="opacity-90">
                  Today, we've helped hundreds of students publish their first research 
                  papers, gain admission to top universities, and most importantly, 
                  develop the critical thinking skills that will serve them throughout 
                  their careers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Enhanced Hover */}
        <section 
          ref={teamSection.elementRef}
          className={`py-24 md:py-32 relative overflow-hidden transition-all duration-1000 ${
            teamSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Leadership Team
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <Card className="h-full border-0 shadow-elegant bg-card/50 backdrop-blur overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="relative mb-6">
                        <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto flex items-center justify-center shadow-glow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <span className="text-4xl font-serif font-bold text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-2 transition-colors duration-300 group-hover:text-primary">
                        {member.name}
                      </h3>
                      <p className="text-sm text-secondary font-semibold mb-4">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      <p className="text-sm text-muted-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;