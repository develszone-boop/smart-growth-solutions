import { motion } from "framer-motion";
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
    title: "Business Analytics",
    description: "Turn insights into action with data-driven strategies.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Targeted campaigns that attract and convert customers.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "High-performance websites that establish trust.",
  },
  {
    icon: RefreshCw,
    title: "Website Rebranding",
    description: "Transform outdated sites into modern assets.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize ROI with analytics and optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Flawless mobile experiences on every device.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description: "Rank higher and attract high-intent traffic.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business from modern threats.",
  },
  {
    icon: Palette,
    title: "Brand Integration",
    description: "Cohesive brand experience across touchpoints.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Comprehensive Digital Solutions"
        subtitle="Our Services"
        description="From analytics to marketing, development to cybersecurity—we provide the strategic and technical expertise your business needs."
        breadcrumb="Services"
        bannerImages={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=600&fit=crop",
        ]}
      />

      {/* Services Grid - 3 columns */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-2xl font-bold text-primary/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Let's discuss your specific challenges and create a tailored solution.
            </p>
            <Button size="lg" variant="secondary" className="gap-2 group" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
