import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = ({ data }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 overflow-hidden">
        <img  alt="School building with students" className="w-full h-full object-cover opacity-1" src="public/adarsha.png" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img src={data.logo} alt={data.name} className="h-32 w-32 rounded-full border-4 border-primary/20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary"
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
              <p className="text-2xl font-bold text-primary mb-2">{data.enrollment}</p>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
              <p className="text-2xl font-bold text-primary mb-2">Since {data.established}</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
              <p className="text-2xl font-bold text-primary mb-2">{data.levels}</p>
              <p className="text-muted-foreground">Education Levels</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;