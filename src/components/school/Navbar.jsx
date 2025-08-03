
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ data, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Academics", href: "#academics" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <img src={data.logo} alt={data.name} className="h-12 w-12"/>
            <div>
              <h1 className="text-xl font-bold text-primary">{data.name}</h1>
              <p className="text-xs text-muted-foreground">{data.tagline}</p>
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Admission
            </Button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-foreground hover:bg-muted"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Admission
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
