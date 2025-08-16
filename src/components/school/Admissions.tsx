import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdmissionRequirements {
  [key: string]: string[];
}

interface AdmissionDeadlines {
  [key: string]: string;
}

interface AdmissionsData {
  process: string[];
  requirements: AdmissionRequirements;
  deadlines: AdmissionDeadlines;
}

interface SchoolData {
  admissions: AdmissionsData;
}

interface AdmissionsProps {
  data: SchoolData;
  currentTheme?: string;
}

const Admissions: React.FC<AdmissionsProps> = ({ data }) => {
  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Admissions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our school community and embark on a journey of academic excellence and personal growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Admission Process</h3>
            <div className="space-y-4">
              {data.admissions.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Important Deadlines</h3>
            <div className="space-y-4 mb-8">
              {Object.entries(data.admissions.deadlines).map(([type, date], index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{type}</p>
                    <p className="text-sm text-muted-foreground">{date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-card/30 backdrop-blur border border-border">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Download Forms
              </h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Admission Application Form
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Document Checklist
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Fee Structure
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Required Documents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.admissions.requirements).map(([level, docs], index) => (
              <div key={index} className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border">
                <h4 className="font-semibold mb-4 text-primary">{level}</h4>
                <ul className="space-y-2">
                  {docs.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="p-8 rounded-xl bg-card/30 backdrop-blur border border-border">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Our admissions team is here to help you through the process. 
              Contact us for any questions or to schedule a school visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Admissions
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
