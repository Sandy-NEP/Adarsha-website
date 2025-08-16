import React from "react";
import { motion } from "framer-motion";
import { Star, GraduationCap, Award } from "lucide-react";

interface AlumniMember {
  name: string;
  graduation: string;
  achievement: string;
  image: string;
}

interface SchoolData {
  alumni: AlumniMember[];
}

interface AlumniProps {
  data: SchoolData;
  currentTheme?: string;
}

const Alumni: React.FC<AlumniProps> = ({ data }) => {
  return (
    <section id="alumni" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Alumni</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud of our graduates who have gone on to achieve great success in their chosen fields 
            and continue to make positive contributions to society.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.alumni.map((alumnus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{alumnus.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{alumnus.graduation}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-secondary mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{alumnus.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl bg-card/30 backdrop-blur border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-gradient">Alumni Success Stories</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                <p className="text-sm text-muted-foreground italic">
                  "Adarsha Secondary School provided me with a strong foundation that helped me excel in my medical career. 
                  The values and discipline I learned here continue to guide me today."
                </p>
                <p className="text-xs text-primary mt-2">- Dr. Rajesh Shrestha</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                <p className="text-sm text-muted-foreground italic">
                  "The quality education and supportive environment at Adarsha prepared me for the challenges 
                  of the tech industry. I'm grateful for the opportunities it provided."
                </p>
                <p className="text-xs text-primary mt-2">- Ms. Priya Maharjan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl bg-card/30 backdrop-blur border border-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Alumni Network</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 backdrop-blur">
                <span className="text-muted-foreground">Total Alumni</span>
                <span className="text-2xl font-bold text-primary">2000+</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 backdrop-blur">
                <span className="text-muted-foreground">Countries Worldwide</span>
                <span className="text-2xl font-bold text-primary">15+</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 backdrop-blur">
                <span className="text-muted-foreground">Professional Fields</span>
                <span className="text-2xl font-bold text-primary">25+</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Join Our Alumni Network</h4>
              <p className="text-sm text-muted-foreground">
                Stay connected with your alma mater and fellow graduates. 
                Share your achievements and mentor current students.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
