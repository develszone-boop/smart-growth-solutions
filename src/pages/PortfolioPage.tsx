import { motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const categories = ["All", "E-Commerce", "Property", "Lifestyle", "Hospitality", "Professional", "Technology"];

const projects = [
  {
    title: "Retail Analytics Upgrade",
    category: "E-Commerce",
    description: "A complete analytics and marketing overhaul for a fashion retailer—delivering a 240% increase in online conversions.",
    tags: ["Business Analytics", "Conversion Optimization", "Marketing Automation", "SEO & Traffic Growth"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    results: [
      { metric: "240%", label: "Conversion Increase" },
      { metric: "180%", label: "Traffic Growth" },
      { metric: "3x", label: "ROI" },
    ],
  },
  {
    title: "Real Estate Intelligence Platform",
    category: "Property",
    description: "Developed a smart property showcase ecosystem featuring AI-driven search analytics, lead scoring, and SEO scaling.",
    tags: ["Secure CMS Development", "Data Intelligence System", "Lead Tracking & Analytics", "SEO & Visibility"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    results: [
      { metric: "150+", label: "Properties Listed" },
      { metric: "85%", label: "Lead Quality" },
      { metric: "2x", label: "Engagement" },
    ],
  },
  {
    title: "Wellness & Spa Center",
    category: "Lifestyle",
    description: "Implemented a data-driven booking engine, CRM automation, and multi-channel marketing—leading to 180% increase in bookings.",
    tags: ["Marketing Automation", "Customer Behavior Tracking", "Mobile-Optimized Platform", "Analytics Dashboards"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    results: [
      { metric: "180%", label: "Booking Increase" },
      { metric: "60%", label: "Automation Rate" },
      { metric: "4.9", label: "Customer Rating" },
    ],
  },
  {
    title: "Hospitality Performance Engine",
    category: "Hospitality",
    description: "Built a performance-focused digital ecosystem with reservation analytics, local SEO, and customer acquisition tracking.",
    tags: ["Local SEO", "Reservation System Integration", "Analytics Tracking", "Performance Marketing"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    results: [
      { metric: "Top 3", label: "Local Search" },
      { metric: "200%", label: "Reservations" },
      { metric: "45%", label: "Return Customers" },
    ],
  },
  {
    title: "Law Firm Digital Authority",
    category: "Professional",
    description: "A data-backed digital transformation that boosted online authority, client engagement, and search visibility.",
    tags: ["Content & SEO Strategy", "Secure Corporate Website", "Performance Marketing"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    results: [
      { metric: "300%", label: "Organic Traffic" },
      { metric: "50+", label: "New Clients" },
      { metric: "1st", label: "Page Rankings" },
    ],
  },
  {
    title: "SaaS Startup Growth Architecture",
    category: "Technology",
    description: "Developed a conversion-driven launch system with analytics, automation, and cybersecurity—helping secure Series A funding.",
    tags: ["Marketing Strategy", "Cybersecurity Setup", "Analytics & Performance Reports", "High-Performance Web Platform"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    results: [
      { metric: "$2M", label: "Series A Raised" },
      { metric: "10K+", label: "Active Users" },
      { metric: "99.9%", label: "Uptime" },
    ],
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Work That Delivers Measurable Results"
        subtitle="Our Portfolio"
        description="Every project showcases what's possible when business analytics, strategy, and technology come together to solve real problems and drive scalable growth."
        breadcrumb="Portfolio"
        variant="orange"
        bannerImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop"
      />

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border mb-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <p className="font-display font-bold text-lg text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
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
              Want to See More Examples?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We have case studies specific to your industry. Let's discuss how we can help 
              your business achieve similar results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Custom Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
