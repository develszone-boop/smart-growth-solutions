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
    description: "We dive deep into understanding your business, goals, and challenges to create a strategic roadmap.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Concept",
    description: "Our team creates innovative concepts focused on user experience and conversion optimization.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "We bring designs to life with clean, scalable, and efficient code for high performance.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Testing & Refinement",
    description: "Rigorous testing ensures everything works flawlessly across all platforms.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project with precision and monitor for a smooth launch.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growth & Support",
    description: "Ongoing optimization and support to ensure continued success and scaling.",
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
        bannerImages={[
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=600&fit=crop",
        ]}
      />

      {/* Process Steps - Compact Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-3xl font-bold text-primary">{step.number}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold">What Makes Us Different</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Transparent Communication", description: "Regular updates and open dialogue throughout." },
              { title: "Data-Driven Decisions", description: "Every choice backed by research and analytics." },
              { title: "Long-Term Partnership", description: "We grow with you beyond the launch." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
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
