import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-32 md:pb-40">
      <div className="section-container relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-foreground mb-0"
          >
            Bocanegra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-muted-foreground text-lg md:text-xl font-light tracking-wide mt-8"
          >
            Asset Management
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
