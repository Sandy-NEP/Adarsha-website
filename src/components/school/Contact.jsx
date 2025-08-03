import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: [data.location, data.contact.address],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: [data.contact.phone, `(${data.contact.contactPerson})`],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: [data.contact.email],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 backdrop-blur border border-border">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
             <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    Find Us on Map
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                   // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.040781589013!2d85.39390791506155!3d27.685119782800087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a5a94957507%3A0x7f5e3c1f6a7ea38c!2sAdarsha%20Secondary%20School!5e0!3m2!1sen!2snp!4v1678886000000!5m2!1sen!2snp"
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13433.347632852383!2d85.376191!3d27.681621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a6ad03dcbe1%3A0xce118a959aa8cf1d!2sAdarsha%20Secondary%20School%2C%20Sanothimi%20Bhaktapur!5e1!3m2!1sen!2sus!4v1749205294595!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border:0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Adarsha Secondary School Location"
                ></iframe>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl bg-card/50 backdrop-blur border border-border shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="mt-1 bg-background/70 border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="mt-1 bg-background/70 border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Reason for contact"
                  required
                  className="mt-1 bg-background/70 border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="mt-1 bg-background/70 border-border focus:border-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;