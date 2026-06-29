import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, HardHat, Zap, Wrench, Users, PhoneCall, Sun, CheckCircle2, ChevronRight, Building2, Globe2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import aboutImg from "@assets/generated_images/saudi_arabia_modern_office_4d76.png";
import proj1Img from "@assets/generated_images/large_commercial_complex_construction_fdc9.png";
import proj2Img from "@assets/generated_images/electrical_infrastructure_installation_i_8ef2.png";
import proj3Img from "@assets/generated_images/telecommunications_tower_and_fiber_9b34.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "Civil Works", icon: Building2, desc: "Comprehensive structural and civil engineering solutions." },
    { title: "Electrical Works", icon: Zap, desc: "Power solutions and electrical infrastructure." },
    { title: "Mechanical Works", icon: Wrench, desc: "HVAC and electro-mechanical fit-outs." },
    { title: "Manpower Services", icon: Users, desc: "Skilled engineering and project management teams." },
    { title: "Tele-Communication", icon: Globe2, desc: "ICT OSP works and telecommunication networks." },
    { title: "Solar Energy Systems", icon: Sun, desc: "Sustainable and renewable energy installations." }
  ];

  const cities = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Khobar", "Madina", "Al Qaseem", "Taif", "Najran", "Abha", "Al Rass", "Tabuk"];

  const reasons = [
    "Reliable & preferred contractor in KSA",
    "One-stop solutions",
    "Comprehensive nationwide coverage",
    "Skilled engineering & project management team"
  ];

  const projects = [
    {
      img: proj1Img,
      category: "Civil Works",
      title: "Commercial Complex Development",
      desc: "Large-scale commercial structure with multi-level concrete framing, steel superstructure, and full site management across multiple phases.",
      status: "Completed"
    },
    {
      img: proj2Img,
      category: "Electrical Works",
      title: "Industrial Facility Power Systems",
      desc: "Full electrical infrastructure installation for a major industrial facility, including panel boards, cable trays, and high-voltage distribution.",
      status: "Completed"
    },
    {
      img: proj3Img,
      category: "Tele-Communication",
      title: "Nationwide Telecom Network Rollout",
      desc: "ICT OSP and telecommunications tower installation across multiple regions, delivering connectivity infrastructure for a leading Saudi operator.",
      status: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              SACC
            </span>
            <span className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              شركة سليمان عبد الله للمقاولات
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" data-testid="nav-link-about" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>About</a>
            <a href="#services" data-testid="nav-link-services" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>Services</a>
            <a href="#projects" data-testid="nav-link-projects" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>Projects</a>
            <a href="#coverage" data-testid="nav-link-coverage" className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>Coverage</a>
            <Button data-testid="button-nav-contact" className={`${!scrolled && "bg-white text-foreground hover:bg-white/90"}`} onClick={() => document.getElementById("contact")?.scrollIntoView()}>
              Get In Touch
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Saudi Construction Site" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <div className="flex gap-4 mb-6">
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">SBG Vendor #15739</Badge>
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">Zamil Vendor #9667</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-serif">
                Sulaiman Abdullah <br/>
                <span className="text-primary font-sans">For Contracting Company</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
                Complete Manpower Solutions From Ground To Top
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button data-testid="button-hero-contact" size="lg" className="text-lg px-8 py-6 rounded-none bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                  Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button data-testid="button-hero-services" size="lg" variant="outline" className="text-lg px-8 py-6 rounded-none text-foreground bg-white hover:bg-white/90 border-0" onClick={() => document.getElementById("services")?.scrollIntoView()}>
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">About Us</h3>
              <h2 className="text-4xl font-bold mb-6 text-foreground font-serif">Your Trusted Partner in Construction</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A general contracting firm with skilled engineers, project managers, field superintendents, and construction/services technicians. Evolved and pioneered in the industry.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-foreground font-serif">
                "We're a team of professionals who understand what customer needs are and trying to fulfill those requirements in appropriate span of time within their budget."
              </blockquote>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <img
                src={aboutImg}
                alt="SACC Construction Project"
                className="w-full h-[420px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl hidden md:block">
                <p className="text-foreground font-bold text-3xl">12+</p>
                <p className="text-foreground/80 text-sm font-medium">Cities Covered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn}>
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-foreground text-white flex items-center justify-center rounded-none mb-6">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To be one of the most reliable and preferred contractors/installers in KSA, offering one-stop solutions in: Civil Construction, ICT OSP works, Solar Energy Systems, Electrical Power Solutions, Electro-Mechanical interior fit-outs and furnishing. Comprehensive coverage across the Kingdom.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-none mb-6">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Our Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To construct greater value and quality projects for clients and the community, delivering the highest quality level of construction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Expertise</h3>
            <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">Comprehensive Solutions</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-none group cursor-default bg-secondary/20">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-secondary group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Work</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">A selection of completed and ongoing construction projects across Saudi Arabia.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.15 }} className="group">
                <div className="overflow-hidden mb-5 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    data-testid={`img-project-${idx}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1 ${project.status === "Completed" ? "bg-foreground text-white" : "bg-primary text-foreground"}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{project.category}</p>
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/3">
              <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">National Presence</h3>
              <h2 className="text-4xl font-bold mb-6 font-serif">Nationwide Coverage Across the Kingdom</h2>
              <p className="text-white/70 mb-8 text-lg">
                Delivering excellence across 12 major cities in Saudi Arabia. We are where you need us to be.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:w-2/3 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-4 bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium text-sm md:text-base">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">Why Choose SACC?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">Ready to start your next project?</h2>
            <p className="text-xl mb-10 text-foreground/80 max-w-2xl mx-auto">
              Partner with the leading general contracting firm in KSA for reliable, high-quality construction solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button data-testid="button-cta-contact" size="lg" className="text-lg px-8 py-6 rounded-none bg-foreground text-white hover:bg-foreground/90 w-full sm:w-auto">
                <PhoneCall className="mr-2 h-5 w-5" /> Contact Us Today
              </Button>
              <Button data-testid="button-cta-website" size="lg" variant="outline" className="text-lg px-8 py-6 rounded-none border-foreground text-foreground hover:bg-foreground/5 w-full sm:w-auto" asChild>
                <a href="https://www.sacc.sa.com" target="_blank" rel="noopener noreferrer">
                  Visit www.sacc.sa.com
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/60 py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="mb-2">Sulaiman Abdullah For Contracting Company | شركة سليمان عبد الله للمقاولات</p>
          <p className="text-sm">© {new Date().getFullYear()} SACC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
