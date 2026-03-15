import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  Droplets,
  FlaskConical,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Package,
  Phone,
  Scan,
  Shield,
  Smile,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const HERO_FEATURES = [
  { icon: FlaskConical, label: "Blood Tests" },
  { icon: Package, label: "Health Checkup Packages" },
  { icon: Droplets, label: "Urine & Stool Tests" },
  { icon: Scan, label: "X-Ray Services" },
];

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Blood Tests",
    items: [
      "CBC (Complete Blood Count)",
      "Blood Sugar Tests — FBS, PPBS, RBS, HbA1c",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT / RFT)",
      "Thyroid Profile — T3, T4, TSH",
      "Hormone Tests — FSH, LH, Prolactin, Testosterone",
      "Vitamin Tests — B12, Vitamin D",
      "Infection Tests — CRP, ESR, Dengue, Malaria",
    ],
  },
  {
    icon: Microscope,
    title: "Urine, Stool & Semen Tests",
    items: [
      "Urine Routine & Microscopy",
      "Urine Culture",
      "Stool Routine Examination",
      "Stool Occult Blood Test",
      "Semen Analysis",
    ],
  },
  {
    icon: Scan,
    title: "Imaging Services",
    items: ["Digital X-Ray"],
  },
  {
    icon: Heart,
    title: "Health Checkup Packages",
    items: [
      "Master Health Checkup",
      "Diabetic Profile",
      "Fever Profile",
      "Thyroid Profile",
      "Cardiac Profile",
    ],
  },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    label: "15+ Years of Experience",
    desc: "Serving the community of Kalwakurthy with trusted diagnostic services since over a decade.",
  },
  {
    icon: Shield,
    label: "Certified Lab Technician",
    desc: "Led by Mr. Udaya Balu, a certified and qualified laboratory technician.",
  },
  {
    icon: CheckCircle2,
    label: "Accurate & Reliable Reports",
    desc: "Precision-focused testing processes ensuring correct and dependable results every time.",
  },
  {
    icon: Activity,
    label: "Affordable Test Prices",
    desc: "Quality diagnostic services at prices accessible to everyone in the region.",
  },
  {
    icon: Zap,
    label: "Modern Diagnostic Equipment",
    desc: "State-of-the-art lab equipment to deliver accurate diagnostics.",
  },
  {
    icon: Clock,
    label: "Quick & Timely Report Delivery",
    desc: "Prompt report generation so you can start treatment without delay.",
  },
  {
    icon: Smile,
    label: "Friendly Patient Care",
    desc: "Warm, respectful, and patient-centric service from our dedicated team.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── NAVIGATION ── */}
      <header
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-normal text-primary leading-none">
                  Udaya
                </div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
                  Diagnostic Centre
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9912505816"
                className="ml-2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-card-hover">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9912505816"
                className="mt-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call: 9912505816
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ── HERO SECTION ── */}
        <section
          id="home"
          data-ocid="hero.section"
          className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/generated/hero-bg.dim_1400x700.jpg"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-background/90 to-secondary/40" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <Badge className="mb-5 bg-accent/10 text-accent border-accent/30 font-semibold text-xs uppercase tracking-wider hover:bg-accent/10">
                15+ Years of Trusted Service
              </Badge>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight text-foreground mb-6">
                Udaya Diagnostic Centre
                <span className="block text-primary mt-1">
                  Trusted Diagnostic Services
                </span>
                <span className="block font-normal text-2xl sm:text-3xl text-muted-foreground mt-2">
                  in Kalwakurthy
                </span>
              </h1>

              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-8 max-w-xl">
                Accurate, reliable, and affordable laboratory testing for your
                health. With 15+ years of experience, we provide high-quality
                diagnostic services to help doctors and patients make the right
                medical decisions.
              </p>

              <a href="tel:9912505816">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 shadow-card-hover text-base font-semibold px-8 py-6 rounded-xl gap-2.5"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: 9912505816
                </Button>
              </a>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
                {HERO_FEATURES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-4 shadow-card border border-border/60 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-center text-foreground/80 leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section
          id="about"
          data-ocid="about.section"
          className="py-20 md:py-28 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
                <img
                  src="/assets/generated/lab-technician.dim_600x600.jpg"
                  alt="Mr. Udaya Balu — Certified Lab Technician"
                  className="relative rounded-2xl object-cover w-full aspect-square shadow-card-hover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-card-hover">
                  <div className="text-3xl font-display font-normal leading-none">
                    15+
                  </div>
                  <div className="text-xs font-semibold opacity-80 mt-1">
                    Years Experience
                  </div>
                </div>
              </div>

              <div>
                <Badge className="mb-4 bg-muted text-muted-foreground border-border font-semibold text-xs uppercase tracking-wider">
                  About Us
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                  Committed to Your
                  <span className="text-primary italic">
                    {" "}
                    Health &amp; Accuracy
                  </span>
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Udaya Diagnostic Centre is managed by{" "}
                  <strong className="text-foreground font-semibold">
                    Mr. Udaya Balu
                  </strong>
                  , a certified laboratory technician with over 15 years of
                  hands-on experience in diagnostic services.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Located in the heart of{" "}
                  <strong className="text-foreground font-semibold">
                    Kalwakurthy, Mahabubnagar, Telangana
                  </strong>
                  , we serve patients and healthcare providers with precise and
                  timely laboratory results using modern equipment.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: CheckCircle2,
                      label: "Accurate Reports",
                      desc: "Precision in every test",
                    },
                    {
                      icon: Shield,
                      label: "Reliable Testing",
                      desc: "Consistent quality standards",
                    },
                    {
                      icon: Heart,
                      label: "Affordable Healthcare",
                      desc: "Fair pricing for all",
                    },
                    {
                      icon: Zap,
                      label: "Modern Equipment",
                      desc: "Latest diagnostic tools",
                    },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/60 hover:bg-secondary/60 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-foreground">
                          {label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ── */}
        <section
          id="services"
          data-ocid="services.section"
          className="py-20 md:py-28 bg-background"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-muted text-muted-foreground border-border font-semibold text-xs uppercase tracking-wider">
                What We Offer
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-foreground/60 max-w-lg mx-auto">
                Comprehensive diagnostic services under one roof — accurate,
                timely, and affordable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    data-ocid={`services.item.${idx + 1}`}
                    className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border/60"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US SECTION ── */}
        <section
          id="why-us"
          data-ocid="whyus.section"
          className="py-20 md:py-28 bg-primary relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-white/20 text-primary-foreground border-white/20 font-semibold text-xs uppercase tracking-wider">
                Our Strengths
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-primary-foreground/70 max-w-lg mx-auto">
                We are dedicated to providing the highest standard of diagnostic
                care to our community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_CHOOSE.map(({ icon: Icon, label, desc }, idx) => (
                <div
                  key={label}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10${
                    idx === 6 ? " sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2 text-base">
                    {label}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section
          id="contact"
          data-ocid="contact.section"
          className="py-20 md:py-28 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-muted text-muted-foreground border-border font-semibold text-xs uppercase tracking-wider">
                Get in Touch
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Contact <span className="text-primary">Us</span>
              </h2>
              <p className="text-foreground/60 max-w-md mx-auto">
                We are here to help. Reach out to us for appointments, test
                information, or any queries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              <div className="lg:col-span-2 bg-muted/50 rounded-2xl p-7 border border-border/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    Our Location
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Udaya Diagnostic Centre
                    <br />
                    Kalwakurthy, Mahabubnagar
                    <br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-7 border border-border/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    Phone
                  </h3>
                  <a
                    href="tel:9912505816"
                    className="text-primary hover:underline text-sm font-semibold"
                  >
                    9912505816
                  </a>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-7 border border-border/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    Email
                  </h3>
                  <a
                    href="mailto:udayadiagnosticcentre3@gmail.com"
                    className="text-primary hover:underline text-sm font-semibold break-all"
                  >
                    udayadiagnosticcentre3@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="tel:9912505816">
                <Button
                  data-ocid="contact.primary_button"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 shadow-card-hover px-8 py-6 text-base font-semibold rounded-xl gap-2.5"
                >
                  <Phone className="w-5 h-5" />
                  Call: 9912505816
                </Button>
              </a>
              <a
                href="https://www.instagram.com/udayadiagnosticcentre/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted px-8 py-6 text-base font-semibold rounded-xl gap-2.5"
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display text-base leading-none">
                  Udaya Diagnostic Centre
                </div>
                <div className="text-xs opacity-60 mt-0.5">
                  Kalwakurthy, Mahabubnagar, Telangana
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-sm opacity-70">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/udayadiagnosticcentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:9912505816"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-50">
            <span>
              © {new Date().getFullYear()} Udaya Diagnostic Centre. All rights
              reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
