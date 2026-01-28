import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "develszone@gmail.com",
    href: "mailto:develszone@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9866137645, +91 9390595302",
    href: "tel:+919866137645",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "10-2-87, Vidhyanagar, Karimnagar, 505001",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    href: "#",
  },
];

const steps = [
  "We'll schedule a discovery call to understand your needs",
  "Our team will prepare a tailored proposal",
  "Once approved, we kick off with a detailed project plan",
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Start Your Transformation Today"
        subtitle="Contact Us"
        description="Ready to elevate your business with a website that drives real results? Let's discuss your vision."
        breadcrumb="Contact"
      />

      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{info.label}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* What Happens Next */}
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">What Happens Next</h3>
                </div>
                <ol className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>✓ No commitment required</span>
                  <span>✓ Response within 24 hours</span>
                </div>
              </div>

              {/* Office Image */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
                alt="Office"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-secondary/30 border border-border">
                <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="analytics">Business Analytics</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="website">Website Creation</option>
                      <option value="rebranding">Website Rebranding</option>
                      <option value="seo">SEO & Visibility</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="mobile">Mobile Experience</option>
                      <option value="brand">Brand Integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range (Optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
