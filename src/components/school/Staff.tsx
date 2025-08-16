import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Clock } from "lucide-react";

interface StaffMember {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  image: string;
}

interface SchoolData {
  staff: StaffMember[];
}

interface StaffProps {
  data: SchoolData;
  currentTheme?: string;
}

const Staff: React.FC<StaffProps> = ({ data }) => {
  return (
    <section id="staff" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Our Faculty & Staff</h2>
          <p className="section-subtitle">
            Meet our dedicated team of experienced educators and administrators committed to providing 
            quality education and nurturing student growth.
          </p>
        </motion.div>

        <div className="staff-grid">
          {data.staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="enhanced-card"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">{member.qualification}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">{member.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="enhanced-card">
            <h3 className="section-title">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We are always looking for passionate educators to join our team. 
              If you are dedicated to making a difference in students' lives, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                <p className="text-sm text-muted-foreground">Teaching Positions</p>
                <p className="font-semibold text-primary">Available</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                <p className="text-sm text-muted-foreground">Administrative Roles</p>
                <p className="font-semibold text-primary">Open</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Staff;
