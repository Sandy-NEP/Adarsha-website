import React from "react";
import { motion } from "framer-motion";
import { Building, FlaskConical, Laptop, Library, Users, Utensils } from "lucide-react";

interface Facility {
  name: string;
  description: string;
}

interface SchoolData {
  facilities: Facility[];
}

interface FacilitiesProps {
  data: SchoolData;
  currentTheme?: string;
}

const iconMap: Record<string, React.ReactElement> = {
  "Modern Classrooms": <Building className="h-8 w-8 text-primary" />,
  "Science Labs": <FlaskConical className="h-8 w-8 text-primary" />,
  "Computer Lab": <Laptop className="h-8 w-8 text-primary" />,
  "Library": <Library className="h-8 w-8 text-primary" />,
  "Sports Ground": <Users className="h-8 w-8 text-primary" />,
  "Cafeteria": <Utensils className="h-8 w-8 text-primary" />,
};

const Facilities: React.FC<FacilitiesProps> = ({ data }) => {
  return (
    <section id="facilities" className="py-20 bg-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Facilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a range of modern facilities to support our students' learning and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.facilities.map((facility: Facility, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-card/50 backdrop-blur-md shadow-lg border border-border hover:shadow-primary/20 transition-shadow"
            >
              <div className="mb-6 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto">
                {iconMap[facility.name] || <Building className="h-8 w-8 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">{facility.name}</h3>
              <p className="text-muted-foreground text-center">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
