import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Palette, Code, CheckCircle, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your business, goals, and challenges. Through detailed research and analysis, we identify opportunities and create a strategic roadmap.",
    details: ["Stakeholder interviews", "Competitor analysis", "User research", "Goal definition"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Concept",
    description: "Our team creates innovative concepts and designs tailored to your vision. We focus on user experience, aesthetics, and conversion optimization.",
    details: ["Wireframing", "UI/UX design", "Prototyping", "Design iterations"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "We bring designs to life with clean, scalable, and efficient code. Our development process ensures high performance and maintainability.",
    details: ["Frontend development", "Backend integration", "Database setup", "API development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Testing & Refinement",
    description: "Rigorous testing ensures everything works flawlessly across all platforms. We refine based on feedback and performance data.",
    details: ["Quality assurance", "Cross-browser testing", "Performance optimization", "Security testing"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project with precision and monitor for a smooth launch. Our team ensures everything is optimized for success from day one.",
    details: ["Deployment", "DNS configuration", "Performance monitoring", "Launch support"],
    image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=600&h=400&fit=crop",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growth & Support",
    description: "Ongoing optimization and support to ensure continued success. We help you scale and evolve based on real-world data.",
    details: ["Analytics tracking", "Continuous optimization", "Regular updates", "24/7 support"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="From Vision to Reality"
        subtitle="Our Process"
        description="A proven methodology refined over hundreds of successful projects, designed to deliver exceptional results every time."
        breadcrumb="Process"
        variant="green"
        bannerImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop"
      />

      {/* Process Timeline */}
      <section className="py-20 relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />
        
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Step number indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg z-10 hidden lg:flex">
                  {step.number}
                </div>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display text-5xl font-bold gradient-text lg:hidden">{step.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    <ul className="grid grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-2xl w-full h-[350px] object-cover shadow-card"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Transparent Communication", description: "Regular updates, clear timelines, and open dialogue throughout the project." },
              { title: "Data-Driven Decisions", description: "Every choice we make is backed by research, analytics, and proven best practices." },
              { title: "Long-Term Partnership", description: "We're invested in your success beyond launch—we grow with you." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your project and see how our process can help you achieve your goals.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/contact">
                Let's Discuss Your Project
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

export default ProcessPage;
