import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface Developer {
  name: string;
  email: string;
}

interface SchoolData {
  name: string;
  contact: ContactInfo;
  logo: string;
  location: string;
  developer: Developer;
}

interface FooterProps {
  data: SchoolData;
  currentTheme?: string;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com/adarshasecondaryschoolofficial", name: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", name: "Youtube" },
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-background/95 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={data.logo} alt={data.name} className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">{data.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">{data.location}</p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#academics" className="text-sm text-muted-foreground hover:text-primary">Academics</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-foreground mb-4">Contact Info</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: <a href={`tel:${data.contact.phone}`} className="hover:text-primary">{data.contact.phone}</a></li>
              <li>Email: <a href={`mailto:${data.contact.email}`} className="hover:text-primary">{data.contact.email}</a></li>
              <li>{data.contact.address}</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-foreground mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {data.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Designed and Developed by <a href={`mailto:${data.developer.email}`} className="text-primary hover:underline">{data.developer.name}</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
