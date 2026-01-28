import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Megaphone, 
  Globe, 
  RefreshCw, 
  TrendingUp, 
  Smartphone, 
  Search, 
  Shield,
  Palette,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Business Analytics & Data Intelligence",
    tagline: "Turn insights into action",
    description: "We analyze your data to help you make smarter decisions, optimize performance, and uncover new growth opportunities.",
    features: ["Data Insights & Reporting", "Business Intelligence Dashboards", "Market Research & Competitor Analysis", "Predictive & Trend Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth Strategy",
    tagline: "Accelerate your brand's reach",
    description: "Targeted, measurable marketing strategies designed to attract, convert, and retain customers.",
    features: ["Social Media Marketing", "Performance Marketing", "Email Automation", "Funnel Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Globe,
    title: "Website Creation",
    tagline: "For first-time businesses",
    description: "Launch with impact. We build strategic, high-performance websites crafted to establish trust and drive growth.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Performance"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    icon: RefreshCw,
    title: "Website Rebranding",
    tagline: "Digital transformation",
    description: "Transform your outdated website into a modern, high-impact digital asset aligned with your evolved goals.",
    features: ["Modern Redesign", "UX Enhancement", "Brand Alignment", "Conversion Focus"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    tagline: "Growth strategy",
    description: "Enhance your digital performance using advanced analytics and optimization techniques that maximize ROI.",
    features: ["A/B Testing", "Analytics Setup", "CRO Strategy", "Performance Tracking"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    tagline: "Design & development",
    description: "Deliver flawless mobile experiences that feel intuitive, fast, and app-like on every device.",
    features: ["Mobile-First Design", "Touch Optimized", "Fast Loading", "App-Like Experience"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    tagline: "Search optimization",
    description: "Rank higher, increase visibility, and attract high-intent traffic with our full-spectrum SEO solutions.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1571721795195-a2d50c404a04?w=600&h=400&fit=crop",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Digital protection",
    description: "Safeguard your digital assets with enterprise-grade security solutions that protect your business from modern threats.",
    features: ["Security Audits", "Website Protection", "Vulnerability Scanning", "Malware Removal & Prevention"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    icon: Palette,
    title: "Brand Integration",
    tagline: "Visual identity",
    description: "Build a powerful and cohesive brand experience across every digital touchpoint.",
    features: ["Logo Integration", "Color System", "Typography", "Brand Guidelines"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Comprehensive Digital Solutions"
        subtitle="Our Services"
        description="From analytics to marketing, development to cybersecurity—we provide the strategic and technical expertise your business needs to grow with confidence."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-primary text-sm font-medium">{service.tagline}</span>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="gap-2 group">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl w-full h-[300px] object-cover shadow-card"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Every business is unique. Let's discuss your specific challenges and create 
              a tailored solution that drives real results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
