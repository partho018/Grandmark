import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription
} from "@/components/ui/dialog";
import {
  MapPin, Zap, Wrench, Users, PhoneCall, Sun, CheckCircle2,
  ChevronRight, Building2, Globe2, Briefcase, Mail, ExternalLink,
  ArrowUpRight, ClipboardList, HardHat, Truck, FlaskConical,
  Gauge, Drill, Forklift, Cpu, Cable, ShieldCheck, Award, Star,
  Clock, Banknote, Send
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import aboutImg from "@assets/generated_images/saudi_arabia_modern_office_4d76.png";
import proj1Img from "@assets/generated_images/large_commercial_complex_construction_fdc9.png";
import proj2Img from "@assets/generated_images/electrical_infrastructure_installation_i_8ef2.png";
import proj3Img from "@assets/generated_images/telecommunications_tower_and_fiber_9b34.png";
import missionImg from "@assets/generated_images/saudi_arabia_construction_team_907c.png";
import visionImg from "@assets/generated_images/dramatic_aerial_view_of_4901.png";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

type Job = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleApply(e: React.FormEvent) {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setSelectedJob(null);
      setApplied(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 2500);
  }

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "Civil Works", icon: Building2, desc: "Comprehensive structural and civil engineering solutions from foundations to finishing." },
    { title: "Electrical Works", icon: Zap, desc: "High and low voltage power systems, panel boards, and electrical infrastructure." },
    { title: "Mechanical Works", icon: Wrench, desc: "HVAC, plumbing, fire protection, and electro-mechanical fit-outs." },
    { title: "Manpower Services", icon: Users, desc: "Skilled engineering teams, project managers, and field superintendents on demand." },
    { title: "Tele-Communication", icon: Cable, desc: "ICT OSP works, fiber optic networks, and telecommunications infrastructure." },
    { title: "Solar Energy Systems", icon: Sun, desc: "Design, supply, and installation of sustainable solar power solutions." }
  ];

  const cities = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Khobar", "Madina", "Al Qaseem", "Taif", "Najran", "Abha", "Al Rass", "Tabuk"];

  const reasons = [
    { icon: ShieldCheck, label: "Reliable & preferred contractor in KSA" },
    { icon: Briefcase, label: "One-stop solutions across all disciplines" },
    { icon: Globe2, label: "Comprehensive nationwide coverage" },
    { icon: Award, label: "Skilled engineering & project management team" }
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 12, suffix: "", label: "Cities Covered" },
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Skilled Professionals" }
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

  const processSteps = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Consultation",
      desc: "We meet with the client to understand project scope, requirements, timelines, and budget in full detail."
    },
    {
      step: "02",
      icon: Cpu,
      title: "Planning & Design",
      desc: "Our engineering team develops a comprehensive execution plan, resource allocation, and project schedule."
    },
    {
      step: "03",
      icon: HardHat,
      title: "Execution",
      desc: "Skilled field teams carry out the work to the highest quality standards under strict HSE compliance."
    },
    {
      step: "04",
      icon: CheckCircle2,
      title: "Delivery & Handover",
      desc: "Final inspection, quality assurance checks, and formal project handover with full documentation."
    }
  ];

  const equipment = [
    { icon: Truck, label: "Heavy Transport & Haulage Vehicles" },
    { icon: Drill, label: "Drilling & Boring Machines" },
    { icon: Forklift, label: "Cranes & Lifting Equipment" },
    { icon: Gauge, label: "Electrical Testing Devices" },
    { icon: FlaskConical, label: "Quality Testing Instruments" },
    { icon: Wrench, label: "Mechanical Workshop Tools" },
    { icon: Zap, label: "Power Generation Units" },
    { icon: Building2, label: "Concrete & Formwork Systems" }
  ];

  const clients = [
    { name: "SBG", full: "Saudi Binladin Group", note: "Vendor #15739" },
    { name: "Zamil", full: "Zamil Group", note: "Vendor #9667" },
    { name: "Saudi Aramco", full: "Saudi Arabian Oil Co.", note: "Energy Sector" },
    { name: "SABIC", full: "Saudi Basic Industries", note: "Industrial Sector" },
    { name: "STC", full: "Saudi Telecom Company", note: "Telecom Sector" },
    { name: "SEC", full: "Saudi Electricity Company", note: "Power Sector" },
  ];

  const jobs: Job[] = [
    {
      title: "Civil Engineer",
      department: "Civil Works",
      location: "Riyadh",
      type: "Full-time",
      experience: "3–5 years",
      description: "Lead and supervise civil construction activities on-site, ensuring quality standards and project timelines are met across structural and finishing works.",
      requirements: ["B.Sc. in Civil Engineering", "3–5 years site experience in KSA", "Proficiency in AutoCAD & MS Project", "Strong knowledge of Saudi building codes"]
    },
    {
      title: "Electrical Site Supervisor",
      department: "Electrical Works",
      location: "Dammam",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee electrical installation works including high/low voltage systems, cable trays, and panel boards at industrial and commercial sites.",
      requirements: ["Diploma or B.Sc. in Electrical Engineering", "4+ years of electrical site supervision", "Knowledge of SEC regulations", "OSHA/HSE certification preferred"]
    },
    {
      title: "Mechanical Engineer – HVAC",
      department: "Mechanical Works",
      location: "Jeddah",
      type: "Full-time",
      experience: "3+ years",
      description: "Design, install, and commission HVAC and electro-mechanical systems for commercial and industrial facilities across the Western Region.",
      requirements: ["B.Sc. in Mechanical Engineering", "3+ years HVAC project experience", "Familiarity with ASHRAE standards", "AutoCAD MEP skills"]
    },
    {
      title: "ICT / Telecom Technician",
      department: "Tele-Communication",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "2+ years",
      description: "Install and maintain ICT OSP infrastructure including fiber optic networks, telecom towers, and structured cabling across KSA.",
      requirements: ["Diploma in Telecommunications or IT", "2+ years OSP/fiber experience", "Ability to travel across regions", "Certifications in fiber splicing preferred"]
    },
    {
      title: "Solar PV Technician",
      department: "Solar Energy Systems",
      location: "Riyadh / Abha",
      type: "Full-time",
      experience: "2–4 years",
      description: "Install, commission, and maintain solar photovoltaic systems for residential, commercial, and industrial clients.",
      requirements: ["Diploma or B.Sc. in Electrical/Renewable Energy", "Hands-on PV installation experience", "Knowledge of inverter systems", "Valid KSA driving license"]
    },
    {
      title: "HSE Officer",
      department: "Health, Safety & Environment",
      location: "Riyadh",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and monitor HSE programs across all project sites, ensuring full compliance with Saudi regulatory and international safety standards.",
      requirements: ["NEBOSH / IOSH certification", "3+ years HSE site experience", "Experience with incident reporting", "Strong communication skills in English & Arabic"]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>SACC</span>
            <span className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>شركة سليمان عبد الله للمقاولات</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "Careers", href: "#careers" },
              { label: "Coverage", href: "#coverage" },
            ].map(link => (
              <a key={link.label} href={link.href} data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}>
                {link.label}
              </a>
            ))}
            <Button data-testid="button-nav-contact" className={`${!scrolled && "bg-white text-foreground hover:bg-white/90"}`}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get In Touch
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Saudi Construction Site" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
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
                Sulaiman Abdullah <br />
                <span className="text-primary font-sans">For Contracting Company</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
                Complete Manpower Solutions From Ground To Top
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button data-testid="button-hero-contact" size="lg"
                  className="text-lg px-8 py-6 rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button data-testid="button-hero-services" size="lg" variant="outline"
                  className="text-lg px-8 py-6 rounded-none text-foreground bg-white hover:bg-white/90 border-0"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-foreground/70 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">About Us</h3>
              <h2 className="text-4xl font-bold mb-6 text-foreground font-serif">Your Trusted Partner in Construction</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A general contracting firm with skilled engineers, project managers, field superintendents, and construction/services technicians. Evolved and pioneered in the contracting industry across the Kingdom.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-foreground font-serif">
                "We're a team of professionals who understand what customer needs are and trying to fulfill those requirements in appropriate span of time within their budget."
              </blockquote>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <img src={aboutImg} alt="SACC Construction Project" className="w-full h-[420px] object-cover rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl rounded-xl hidden md:block">
                <p className="text-foreground font-bold text-3xl">12+</p>
                <p className="text-foreground/80 text-sm font-medium">Cities Covered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission — text left, image right */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="w-12 h-12 bg-foreground flex items-center justify-center mb-6 rounded-xl">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Mission</h3>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6 leading-tight">
                One-Stop Solutions Across the Kingdom
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be one of the most reliable and preferred contractors/installers in KSA, offering one-stop solutions in Civil Construction, ICT OSP works, Solar Energy Systems, Electrical Power Solutions, and Electro-Mechanical interior fit-outs. Comprehensive coverage across the Kingdom.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <img
                src={missionImg}
                alt="SACC Mission — Engineering Team"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision — image left, text right */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 md:order-1">
              <img
                src={visionImg}
                alt="SACC Vision — Completed Project"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-1 md:order-2">
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 rounded-xl">
                <Globe2 className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Vision</h3>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6 leading-tight">
                Building Greater Value for the Community
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To construct greater value and quality projects for our respected clients and the community at large, through delivering the highest quality level of construction across the Kingdom of Saudi Arabia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Expertise</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Comprehensive Solutions</h2>
            <p className="text-muted-foreground">End-to-end contracting services across six disciplines, delivered by expert teams.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl group cursor-default bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-secondary group-hover:bg-primary transition-colors flex items-center justify-center mb-6 rounded-xl">
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

      {/* How We Work */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Process</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif">How We Work</h2>
            <p className="text-white/60">A structured, transparent approach to every project — from first meeting to final handover.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((s, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.15 }}
                className="relative p-8 border-t border-white/10 md:border-t-0 md:border-l first:border-l-0 group">
                <div className="text-6xl font-black text-white/5 absolute top-6 right-6 leading-none select-none">{s.step}</div>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary transition-colors flex items-center justify-center mb-6">
                  <s.icon className="h-6 w-6 text-primary group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Step {s.step}</p>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Work</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Completed and ongoing construction projects across Saudi Arabia.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.15 }} className="group">
                <div className="overflow-hidden mb-5 relative rounded-2xl">
                  <img src={project.img} alt={project.title} data-testid={`img-project-${idx}`}
                    className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
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

      {/* Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Fleet</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Equipment & Testing Devices</h2>
            <p className="text-muted-foreground">SACC maintains a comprehensive fleet of modern construction machinery, lifting equipment, and precision testing instruments to deliver every project to specification.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipment.map((item, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.07 }}>
                <div className="flex flex-col items-center text-center p-6 border border-border hover:border-primary hover:bg-primary/5 transition-all group rounded-2xl bg-white shadow-sm">
                  <div className="w-14 h-14 bg-secondary group-hover:bg-primary transition-colors flex items-center justify-center mb-4 rounded-xl">
                    <item.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/3">
              <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">National Presence</h3>
              <h2 className="text-4xl font-bold mb-6 font-serif">Nationwide Coverage Across the Kingdom</h2>
              <p className="text-white/70 mb-8 text-lg">Delivering excellence across 12 major cities in Saudi Arabia. We are where you need us to be.</p>
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

      {/* Valued Customers */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Trusted By</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Our Valued Customers</h2>
            <p className="text-muted-foreground">SACC is proud to serve some of the Kingdom's most prominent organisations across energy, industry, and infrastructure.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <div data-testid={`card-client-${idx}`}
                  className="flex flex-col items-center text-center p-6 bg-white border border-border hover:border-primary hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-foreground flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-bold text-foreground text-base mb-1">{client.name}</p>
                  <p className="text-xs text-muted-foreground mb-1">{client.full}</p>
                  <p className="text-xs text-primary font-medium">{client.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Why SACC</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Why Choose Us?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{reason.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">Join Our Team</h3>
            <h2 className="text-4xl font-bold mb-4 font-serif text-foreground">Career Opportunities</h2>
            <p className="text-muted-foreground text-lg">Be part of a growing team building the Kingdom's future. Browse our open positions and apply directly below.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.08 }}>
                <Card data-testid={`card-job-${idx}`} className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 rounded-2xl h-full flex flex-col bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HardHat className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/40 text-primary bg-primary/5">{job.type}</Badge>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{job.title}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{job.department}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" />{job.experience}</span>
                    </div>
                    <Button
                      data-testid={`button-apply-${idx}`}
                      className="w-full rounded-none bg-foreground text-white hover:bg-primary hover:text-foreground transition-colors"
                      onClick={() => { setSelectedJob(job); setApplied(false); }}
                    >
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn} className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">Don't see a matching role? Send your CV to <span className="text-primary font-medium">careers@sacc.sa.com</span></p>
          </motion.div>
        </div>
      </section>

      {/* Job Application Modal */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => { if (!open) { setSelectedJob(null); setApplied(false); } }}>
        <DialogContent className="max-w-lg rounded-none p-0 overflow-hidden">
          <div className="bg-foreground px-6 py-5">
            <DialogHeader>
              <DialogTitle className="text-white text-xl font-bold">{selectedJob?.title}</DialogTitle>
              <DialogDescription className="text-white/60 text-sm mt-1">
                {selectedJob?.department} · {selectedJob?.location} · {selectedJob?.type}
              </DialogDescription>
            </DialogHeader>
          </div>

          {applied ? (
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground text-sm">Thank you for applying. Our HR team will review your application and be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="px-6 py-6 space-y-4">
              <div className="bg-secondary/40 border border-border p-4 mb-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Requirements</p>
                <ul className="space-y-1">
                  {selectedJob?.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />{req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider">Full Name</Label>
                  <Input id="name" data-testid="input-name" required placeholder="Your full name" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="rounded-none" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider">Phone</Label>
                  <Input id="phone" data-testid="input-phone" required placeholder="+966 5X XXX XXXX" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="rounded-none" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider">Email Address</Label>
                <Input id="email" data-testid="input-email" type="email" required placeholder="you@email.com" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="rounded-none" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider">Cover Note</Label>
                <Textarea id="message" data-testid="input-message" placeholder="Briefly describe your experience and why you'd like to join SACC..." rows={3} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="rounded-none resize-none" />
              </div>
              <Button data-testid="button-submit-application" type="submit" className="w-full rounded-none bg-primary text-foreground hover:bg-primary/90 font-semibold">
                <Send className="mr-2 h-4 w-4" /> Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">Ready to start your next project?</h2>
            <p className="text-xl mb-10 text-foreground/80 max-w-2xl mx-auto">
              Partner with the leading general contracting firm in KSA for reliable, high-quality construction solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button data-testid="button-cta-contact" size="lg"
                className="text-lg px-8 py-6 rounded-none bg-foreground text-white hover:bg-foreground/90 w-full sm:w-auto">
                <PhoneCall className="mr-2 h-5 w-5" /> Contact Us Today
              </Button>
              <Button data-testid="button-cta-website" size="lg" variant="outline"
                className="text-lg px-8 py-6 rounded-none border-foreground text-foreground hover:bg-foreground/5 w-full sm:w-auto" asChild>
                <a href="https://www.sacc.sa.com" target="_blank" rel="noopener noreferrer">
                  Visit www.sacc.sa.com
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="container mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <p className="text-2xl font-bold tracking-tight text-white">SACC</p>
              <p className="text-white/50 text-xs mt-1 mb-4">شركة سليمان عبد الله للمقاولات</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your trusted partner in construction — delivering quality projects across the Kingdom of Saudi Arabia.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Approved Vendors</span>
                <div className="flex gap-3">
                  <span className="text-xs border border-white/20 text-white/60 px-3 py-1">SBG #15739</span>
                  <span className="text-xs border border-white/20 text-white/60 px-3 py-1">Zamil #9667</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "Coverage", href: "#coverage" },
                  { label: "Why Choose Us", href: "#why" },
                  { label: "Contact", href: "#contact" },
                ].map(link => (
                  <li key={link.label}>
                    <a href={link.href} data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Civil Works", "Electrical Works", "Mechanical Works", "Manpower Services", "Tele-Communication", "Solar Energy Systems"].map(s => (
                  <li key={s} className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="https://www.sacc.sa.com" target="_blank" rel="noopener noreferrer" data-testid="footer-link-website"
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1">
                    www.sacc.sa.com <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">Kingdom of Saudi Arabia<br />Nationwide Operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneCall className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">Contact via website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">info@sacc.sa.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">© {new Date().getFullYear()} Sulaiman Abdullah For Contracting Company. All rights reserved.</p>
            <p className="text-white/30 text-xs">Complete Manpower Solutions From Ground To Top</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
