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
  ArrowUp, ArrowUpRight, ClipboardList, HardHat, Truck, FlaskConical,
  Gauge, Drill, Forklift, Cpu, Cable, ShieldCheck, Award, Star,
  Clock, Banknote, Send
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import aboutImg from "@assets/generated_images/saudi_arabia_modern_office_4d76.png";
import proj1Img from "@assets/generated_images/large_commercial_complex_construction_fdc9.png";
import proj2Img from "@assets/generated_images/electrical_infrastructure_installation_i_8ef2.png";
import proj3Img from "@assets/generated_images/telecommunications_tower_and_fiber_9b34.png";
import missionImg from "@assets/generated_images/saudi_arabia_construction_team_907c.png";
import visionImg from "@assets/generated_images/dramatic_aerial_view_of_4901.png";
import whyChooseUsImg from "@assets/generated_images/why_choose_us_inspection.png";
import logoImg from "@assets/website_logo.webp";

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
  imgUrl?: string;
};

export default function Home() {
  const heroImages = [
    proj1Img,
    visionImg,
    missionImg,
    proj3Img
  ];

  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx(prev => (prev + 1) % heroImages.length);
    }, 6000); // transition every 6 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      category: "Commercial & MEP",
      title: "Rimal Mall Renovation Work",
      desc: "Comprehensive HVAC system modification, internal & external lighting installation, Genset/ATS refurbishment, and LV system upgrades in Riyadh for Kinan / Zamil Industrial.",
      status: "Ongoing"
    },
    {
      img: proj2Img,
      category: "Electrical & Substation",
      title: "King Khalid International Airport (T1 & T2)",
      desc: "Unit substation modification works, MV cable termination, joint splicing, testing, commissioning, and technical manpower support in Riyadh for SBG / ICRC.",
      status: "Completed"
    },
    {
      img: proj3Img,
      category: "Industrial & SCADA",
      title: "AL HUWAILAT Center Development",
      desc: "Genset/ATS refurbishment, troubleshooting, SOFITEL SCADA system installation, and specialized technical support services in Jubail.",
      status: "Ongoing"
    },
    {
      img: visionImg,
      category: "Aviation & Infrastructure",
      title: "Dammam Airport Infrastructure Support",
      desc: "Specialized manpower support services and electro-mechanical infrastructure works for Buna Contracting Co. & Kabbani Construction Group at Dammam Airport.",
      status: "Ongoing"
    },
    {
      img: missionImg,
      category: "Civil & Industrial",
      title: "Jizan Industrial Complex Works",
      desc: "Comprehensive technical manpower solutions, structural support, and industrial equipment support services in Jizan region for leading contractors.",
      status: "Ongoing"
    },
    {
      img: aboutImg,
      category: "Electro-Mechanical",
      title: "Yanbu Industrial & Energy Facilities",
      desc: "Multi-discipline MEP maintenance, piping reinstatement, and manpower support services across industrial sites in Yanbu and Rabigh.",
      status: "Completed"
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
    {
      icon: Truck,
      label: "Heavy Transport & Haulage",
      desc: "Heavy-duty dump trucks, flatbeds, and lowbed trailers for site transport.",
      imgUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Drill,
      label: "Drilling & Boring",
      desc: "Advanced rotary boring rigs and core drilling machines for foundation works.",
      imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Forklift,
      label: "Cranes & Lifting",
      desc: "Mobile cranes, tower cranes, and heavy forklifts for safe lifting operations.",
      imgUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Gauge,
      label: "Electrical Testing",
      desc: "High-precision insulation, earth resistance, and power quality analyzers.",
      imgUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: FlaskConical,
      label: "Quality Testing",
      desc: "Concrete compression, soil compaction, and non-destructive testing tools.",
      imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Wrench,
      label: "Mechanical Workshop",
      desc: "Comprehensive hydraulic torque wrenches, pipe threaders, and welding machinery.",
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Zap,
      label: "Power Generation",
      desc: "Mobile diesel generators ranging from 50kVA to 1000kVA for remote sites.",
      imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Building2,
      label: "Concrete & Formwork",
      desc: "Modular wall formwork, shoring systems, and high-pressure concrete pumps.",
      imgUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
    }
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
      requirements: ["B.Sc. in Civil Engineering", "3–5 years site experience in KSA", "Proficiency in AutoCAD & MS Project", "Strong knowledge of Saudi building codes"],
      imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Electrical Site Supervisor",
      department: "Electrical Works",
      location: "Dammam",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee electrical installation works including high/low voltage systems, cable trays, and panel boards at industrial and commercial sites.",
      requirements: ["Diploma or B.Sc. in Electrical Engineering", "4+ years of electrical site supervision", "Knowledge of SEC regulations", "OSHA/HSE certification preferred"],
      imgUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mechanical Engineer – HVAC",
      department: "Mechanical Works",
      location: "Jeddah",
      type: "Full-time",
      experience: "3+ years",
      description: "Design, install, and commission HVAC and electro-mechanical systems for commercial and industrial facilities across the Western Region.",
      requirements: ["B.Sc. in Mechanical Engineering", "3+ years HVAC project experience", "Familiarity with ASHRAE standards", "AutoCAD MEP skills"],
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "ICT / Telecom Technician",
      department: "Tele-Communication",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "2+ years",
      description: "Install and maintain ICT OSP infrastructure including fiber optic networks, telecom towers, and structured cabling across KSA.",
      requirements: ["Diploma in Telecommunications or IT", "2+ years OSP/fiber experience", "Ability to travel across regions", "Certifications in fiber splicing preferred"],
      imgUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Solar PV Technician",
      department: "Solar Energy Systems",
      location: "Riyadh / Abha",
      type: "Full-time",
      experience: "2–4 years",
      description: "Install, commission, and maintain solar photovoltaic systems for residential, commercial, and industrial clients.",
      requirements: ["Diploma or B.Sc. in Electrical/Renewable Energy", "Hands-on PV installation experience", "Knowledge of inverter systems", "Valid KSA driving license"],
      imgUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "HSE Officer",
      department: "Health, Safety & Environment",
      location: "Riyadh",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and monitor HSE programs across all project sites, ensuring full compliance with Saudi regulatory and international safety standards.",
      requirements: ["NEBOSH / IOSH certification", "3+ years HSE site experience", "Experience with incident reporting", "Strong communication skills in English & Arabic"],
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Grandmark Logo" className="h-10 md:h-12 w-auto object-contain" />
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
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeroIdx}
              src={heroImages[currentHeroIdx]}
              alt="Saudi Construction Site"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/20 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <div className="flex gap-4 mb-6">
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">SBG Vendor #15739</Badge>
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm">Zamil Vendor #9667</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-serif">
                Grandmark <br />
                <span className="text-primary font-sans">For Contracting Company</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
                Complete Manpower Solutions From Ground To Top
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button data-testid="button-hero-contact" size="lg"
                  className="text-lg px-8 py-6 rounded-[8px] bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold border-0 shadow-md"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button data-testid="button-hero-services" size="lg" variant="outline"
                  className="text-lg px-8 py-6 rounded-[8px] text-foreground bg-white hover:bg-neutral-100 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold border border-neutral-200 shadow-sm"
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
              <img src={aboutImg} alt="Grandmark Construction Project" className="w-full h-[420px] object-cover rounded-2xl shadow-2xl" />
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
            <motion.div {...fadeIn} className="order-2 md:order-1">
              <img
                src={missionImg}
                alt="Grandmark Mission — Engineering Team"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-1 md:order-2">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center mb-6 rounded-xl">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-primary font-semibold tracking-wider uppercase text-sm">Our Mission</h3>
                <span className="text-muted-foreground/40">|</span>
                <h3 className="text-primary font-semibold text-sm" dir="rtl">مهمتنا</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-2 leading-tight">
                One-Stop Solutions Across the Kingdom
              </h2>
              <p className="text-xl font-semibold font-serif text-foreground/70 mb-6 leading-tight" dir="rtl">
                حلول شاملة في جميع أنحاء المملكة
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                To be one of the most reliable and preferred contractors/installers in KSA, offering one-stop solutions in Civil Construction, ICT OSP works, Solar Energy Systems, Electrical Power Solutions, and Electro-Mechanical interior fit-outs. Comprehensive coverage across the Kingdom.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base border-r-4 border-primary pr-4" dir="rtl">
                أن نكون من أكثر المقاولين موثوقيةً وتميزًا في المملكة العربية السعودية، نقدّم حلولاً متكاملة في أعمال البناء المدني، وشبكات الاتصالات، وأنظمة الطاقة الشمسية، والحلول الكهربائية، والتشطيبات الكهروميكانيكية — بتغطية شاملة في جميع أرجاء المملكة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision — text left, image right */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-1 md:order-1">
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
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-2 md:order-2">
              <img
                src={visionImg}
                alt="Grandmark Vision — Completed Project"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.15 }}
                className="group bg-white border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image container */}
                <div className="overflow-hidden relative h-56 flex-shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    data-testid={`img-project-${idx}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      project.status === "Completed" ? "bg-foreground text-white" : "bg-primary text-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-6">
                    {project.desc}
                  </p>
                  
                  {/* Action link or bottom border decoration */}
                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-primary font-semibold text-sm">
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">View Details</span>
                    <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/15 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Fleet</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
              Equipment & Testing Devices
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Grandmark maintains a comprehensive fleet of modern construction machinery, lifting equipment, and precision testing instruments to deliver every project to specification.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {equipment.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.06 }}
                className="group relative overflow-hidden bg-white border border-border/80 rounded-[8px] hover:shadow-xl hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-start text-left cursor-default shadow-sm h-full"
              >
                {/* Golden Accent Slide-up */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                
                {/* Image container */}
                <div className="w-full h-40 overflow-hidden relative flex-shrink-0">
                  <img
                    src={item.imgUrl}
                    alt={item.label}
                    className="w-full h-full object-cover rounded-t-[8px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col items-start text-left flex-1 w-full">
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-[6px] bg-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-300 flex items-center justify-center mb-3 shadow-inner text-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/3">
              <h3 className="text-primary font-semibold tracking-wider uppercase mb-2">National Presence</h3>
              <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">Nationwide Coverage Across the Kingdom</h2>
              <p className="text-muted-foreground mb-8 text-lg">Delivering excellence across 12 major cities in Saudi Arabia. We are where you need us to be.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:w-2/3 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-border/60 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 group rounded-xl shadow-xs cursor-default">
                    <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary transition-all duration-300 flex items-center justify-center rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valued Customers */}
      <section className="py-24 bg-foreground overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div {...fadeIn}>
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Trusted By</h3>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
                Our Valued<br />Customers
              </h2>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.15 }} className="md:max-w-sm">
              <p className="text-white/50 leading-relaxed text-sm md:text-base">
                Grandmark is proud to serve some of the Kingdom's most prominent organisations across energy, industry, and infrastructure.
              </p>
              <p className="text-white/30 text-sm mt-2 text-right" dir="rtl">
                نفخر بخدمة كبرى الشركات والمؤسسات في المملكة العربية السعودية
              </p>
            </motion.div>
          </div>

          {/* Client cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.15)] transition-all duration-500 flex flex-col justify-between min-h-[200px] overflow-hidden cursor-default"
              >
                {/* Watermark abbreviation */}
                <span className="absolute -bottom-6 -right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none leading-none group-hover:text-primary/[0.04] group-hover:scale-110 transition-all duration-500">
                  {client.name.split(" ")[0]}
                </span>

                {/* Top: gold status dot & sector badge */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Partner</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {client.note}
                  </span>
                </div>

                {/* Bottom: names */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h4>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 font-medium">
                    {client.full}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Title, Description, Button, List */}
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Why Grandmark</h3>
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                  Why Choose Us?
                </h2>
                <p className="text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed">
                  We are a premier general contracting and manpower solutions firm dedicated to delivering world-class project execution and technical expertise.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-6">
                {reasons.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-primary flex-shrink-0">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {reason.label}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ensuring safety, efficiency, and compliance with national standards in all project phases.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  data-testid="button-why-contact"
                  size="lg"
                  className="rounded-[8px] bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 px-8 py-6 text-base font-semibold border-0 shadow-md"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Work With Us <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Image with decoration */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-5 relative">
              {/* Outer decorative block */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] -rotate-3 scale-95 pointer-events-none" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2.5rem] rotate-2 scale-95 pointer-events-none" />
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[520px] bg-foreground">
                <img
                  src={whyChooseUsImg}
                  alt="Grandmark Site Inspection"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating card on image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black text-2xl flex-shrink-0 shadow-md">
                    15+
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-base">Years of Excellence</h5>
                    <p className="text-xs text-muted-foreground">In contracting & construction services</p>
                  </div>
                </div>
              </div>
            </motion.div>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.08 }}
                className="group flex flex-col h-full"
              >
                {/* Main Card with Border and Image */}
                <Card
                  data-testid={`card-job-${idx}`}
                  className="border border-border/80 hover:border-primary/60 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white flex-1 flex flex-col cursor-pointer"
                  onClick={() => { setSelectedJob(job); setApplied(false); }}
                >
                  {/* Image container */}
                  {job.imgUrl && (
                    <div className="h-48 overflow-hidden relative flex-shrink-0">
                      <img
                        src={job.imgUrl}
                        alt={job.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="outline" className="text-xs border-white/50 text-white bg-black/40 backdrop-blur-xs font-semibold px-3 py-1">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  {/* Content Container */}
                  <CardContent className="p-6 flex flex-col flex-1">
                    {/* Department */}
                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1.5 block">
                      {job.department}
                    </span>
                    
                    {/* Job Title */}
                    <h4 className="text-xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-4">
                      {job.description}
                    </p>

                    {/* Meta items */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-3 border-t border-border/30 mb-5">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" />{job.experience}</span>
                    </div>

                    {/* Apply Now Button (Inside the Card) */}
                    <Button
                      data-testid={`button-apply-${idx}`}
                      className="w-full rounded-[8px] bg-foreground text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-bold py-5 flex items-center justify-center gap-1 shadow-md cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                        setApplied(false);
                      }}
                    >
                      Apply Now <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn} className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">Don't see a matching role? Send your CV to <span className="text-primary font-medium">careers@grandmark.com</span></p>
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
                <Textarea id="message" data-testid="input-message" placeholder="Briefly describe your experience and why you'd like to join Grandmark..." rows={3} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="rounded-[8px] resize-none" />
              </div>
              <Button data-testid="button-submit-application" type="submit" className="w-full rounded-[8px] bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold py-4 border-0 shadow-md">
                <Send className="mr-2 h-4 w-4" /> Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA / Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[24px] relative overflow-hidden shadow-xl py-16 px-6 md:px-12">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-foreground">Ready to start your next project?</h2>
                <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                  Partner with the leading general contracting firm in KSA for reliable, high-quality construction solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button data-testid="button-cta-contact" size="lg"
                    className="text-lg px-8 py-6 rounded-[8px] bg-foreground text-white hover:bg-foreground/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 w-full sm:w-auto font-semibold shadow-md border-0">
                    <PhoneCall className="mr-2 h-5 w-5" /> Contact Us Today
                  </Button>
                  <Button data-testid="button-cta-website" size="lg" variant="outline"
                    className="text-lg px-8 py-6 rounded-[8px] border border-foreground text-foreground hover:bg-foreground hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 w-full sm:w-auto font-semibold shadow-sm" asChild>
                    <a href="https://www.grandmark.com" target="_blank" rel="noopener noreferrer">
                      Visit www.grandmark.com
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-foreground border-t border-border">
        <div className="container mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="Grandmark Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Your trusted partner in construction — delivering quality projects across the Kingdom of Saudi Arabia.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground/80 font-medium uppercase tracking-wider">Approved Vendors</span>
                <div className="flex gap-3">
                  <span className="text-xs border border-border text-muted-foreground px-3 py-1 bg-secondary/30 rounded-[4px]">SBG #15739</span>
                  <span className="text-xs border border-border text-muted-foreground px-3 py-1 bg-secondary/30 rounded-[4px]">Zamil #9667</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">Quick Links</h4>
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Civil Works", "Electrical Works", "Mechanical Works", "Manpower Services", "Tele-Communication", "Solar Energy Systems"].map(s => (
                  <li key={s} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="https://www.grandmark.com" target="_blank" rel="noopener noreferrer" data-testid="footer-link-website"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                    www.grandmark.com <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Kingdom of Saudi Arabia<br />Nationwide Operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneCall className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Contact via website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">info@grandmark.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border/80">
          <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/60 text-xs">© {new Date().getFullYear()} Grandmark For Contracting Company. All rights reserved.</p>
            <p className="text-muted-foreground/50 text-xs">Complete Manpower Solutions From Ground To Top</p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground p-3.5 rounded-full shadow-lg hover:bg-primary/95 hover:shadow-xl transition-all duration-300 focus:outline-none hover:-translate-y-1 active:scale-95 flex items-center justify-center cursor-pointer border border-primary-border"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
