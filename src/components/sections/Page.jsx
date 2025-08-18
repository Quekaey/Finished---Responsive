import { motion } from "framer-motion";

export default function Page({ children }) {
  return (
    <div className="bg-gradient-to-bottom min-h-screen">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
        data-testid="skip-link"
      >
        Skip to main content
      </a>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}
