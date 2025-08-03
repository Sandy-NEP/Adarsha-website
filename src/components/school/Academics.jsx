import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Users, Brain } from "lucide-react";

const Academics = ({ data }) => {
  return (
    <section id="academics" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Academics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our academic programs are designed to foster intellectual growth and critical thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Programs</h3>
            {data.academics.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border"
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 text-secondary mr-3" />
                  <h4 className="text-xl font-medium text-foreground">{program.level}</h4>
                </div>
                <p className="text-muted-foreground">{program.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Key Features</h3>
            <ul className="space-y-4">
              {data.academics.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start p-4 rounded-lg bg-card/50 backdrop-blur border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <img  alt="Students engaged in learning" className="rounded-xl shadow-2xl" src="adarsha1.png" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;