import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumb: string;
}

const PageHeader = ({ title, subtitle, description, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{breadcrumb}</span>
        </motion.div>

        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{subtitle}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
