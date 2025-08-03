import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 overflow-hidden">
        <img  alt="School building with students" className="w-full h-full object-cover opacity-1" src="public/adarsha.png" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>

      <div className="hero-content">
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
            className="hero-title"
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-subtitle"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-cta flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="btn-primary"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="stats-container mt-12"
          >
            <div className="stat-item">
              <p className="stat-number">{data.enrollment}</p>
              <p className="stat-label">Students Enrolled</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">Since {data.established}</p>
              <p className="stat-label">Years of Excellence</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">{data.levels}</p>
              <p className="stat-label">Education Levels</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
