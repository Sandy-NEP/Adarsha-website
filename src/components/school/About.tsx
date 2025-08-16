import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, Target } from "lucide-react";

interface SchoolData {
  established: string;
}

interface AboutProps {
  data: SchoolData;
  currentTheme?: string;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Quality Education",
      description: "Providing excellent academic foundation from ECD to Grade 10"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experienced Faculty",
      description: "Dedicated teachers committed to student success"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Achievement",
      description: "Consistent record of academic excellence"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Holistic Development",
      description: "Focus on academic, physical, and moral growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">About Our School</h2>
          <p className="section-subtitle">
            Adarsha Secondary School, located in Sanothimi, Madhyapur Thimi Municipality, 
            is committed to providing quality education and shaping the future leaders of tomorrow.
          </p>
        </motion.div>

        <div className="feature-grid mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="enhanced-card"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img  alt="Students in classroom" className="rounded-xl shadow-2xl" src="/assembly.jpg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="section-title">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a leading educational institution that nurtures academic excellence, 
              character development, and innovative thinking in our students.
            </p>

            <h3 className="section-title">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide comprehensive education that empowers students with knowledge, 
              skills, and values necessary for their success in the modern world.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="stat-item">
                <p className="stat-number">{data.established}</p>
                <p className="stat-label">Established</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">NEB</p>
                <p className="stat-label">Affiliated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
