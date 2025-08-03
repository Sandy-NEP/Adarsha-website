//app.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/school/Navbar.jsx";
import Hero from "@/components/school/Hero.jsx";
import About from "@/components/school/About.jsx";
import Facilities from "@/components/school/Facilities.jsx";
import Academics from "@/components/school/Academics.jsx";
import Gallery from "@/components/school/Gallery.jsx";
import Contact from "@/components/school/Contact.jsx";
import Footer from "@/components/school/Footer.jsx";
import BuyMeACoffeeModal from "@/components/school/BuyMeACoffeeModal.jsx";
import ThemeSwitcher from "@/components/school/ThemeSwitcher.jsx";
import { ChevronUp, Coffee } from "lucide-react";

const schoolData = {
  name: "Adarsha Secondary School",
  tagline: "Excellence in Education",
  location: "Sanothimi, Madhyapur Thimi Municipality, Bhaktapur, Nepal",
  established: "1960",
  enrollment: "825 students",
  levels: "Early Childhood Development (ECD) to Grade 10",
  affiliation: "National Examination Board (NEB)",
  contact: {
    phone: "9841832799",
    contactPerson: "Ishwor Kumar Shrestha",
    email: "info@adarshasecondarybhaktapur.edu.np",
    address: "Ward No. 2, Jatigaal, Madhyapur Thimi Municipality",
  },
  mapUrl: "https://g.co/kgs/sC5ktv2",
  logo: "public/logo.png",
  heroImage: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/51c6f2f6615cf6ba3907064289a7cfbc.jpg",
  facilities: [
    { name: "Modern Classrooms", description: "Well-equipped classrooms with smart boards" },
    { name: "Science Labs", description: "Fully furnished physics, chemistry and biology labs" },
    { name: "Computer Lab", description: "Modern computer lab with internet facilities" },
    { name: "Library", description: "Extensive library with digital resources" },
    { name: "Sports Ground", description: "Large playground for various sports activities" },
    { name: "Cafeteria", description: "Hygienic cafeteria serving nutritious meals" }
  ],
  academics: {
    programs: [
      { level: "Early Childhood Development (ECD)", description: "Foundation years focusing on basic skills" },
      { level: "Primary Level (1-5)", description: "Core subjects with co-curricular activities" },
      { level: "Lower Secondary (6-8)", description: "Advanced subjects with practical learning" },
      { level: "Secondary (9-10)", description: "Preparation for SEE with career guidance" }
    ],
    features: [
      "Experienced faculty members",
      "Small class sizes",
      "Regular assessments",
      "Extra-curricular activities",
      "Career counseling"
    ]
  },
  gallery: [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/4428987fca76639fea5e98e5a6c2871c.jpg", alt: "School Logo" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/51c6f2f6615cf6ba3907064289a7cfbc.jpg", alt: "School Building" }
  ],
  developer: {
    name: "Sandesh Ghimire",
    title: "Web Developer",
    email: "sandeshghimire4004@gmail.com",
    phone: "9842163841",
    paymentOptions: {
      esewa: "9842163841",
      bank: { name: "Global IME Bank", acc: "25607010046172" },
      khalti: "9842163841"
    }
  }
};

function App() {
  const { toast } = useToast();
  const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  const handleContactSubmit = (formData) => {
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
      duration: 3000,
      className: "bg-gradient-to-r from-primary to-primary-foreground border-none text-white",
    });
  };

  return (
    <div className={`min-h-screen text-foreground font-inter overflow-x-hidden theme-${currentTheme} bg-background`}>
      <Navbar data={schoolData} currentTheme={currentTheme} />
      <main>
        <Hero data={schoolData} currentTheme={currentTheme} />
        <About data={schoolData} currentTheme={currentTheme} />
        <Facilities data={schoolData} currentTheme={currentTheme} />
        <Academics data={schoolData} currentTheme={currentTheme} />
        <Gallery data={schoolData} currentTheme={currentTheme} />
        <Contact data={schoolData} onSubmit={handleContactSubmit} currentTheme={currentTheme} />
      </main>
      <Footer data={schoolData} currentTheme={currentTheme} />
      <Toaster />
      <BuyMeACoffeeModal 
        isOpen={isCoffeeModalOpen} 
        onClose={() => setIsCoffeeModalOpen(false)}
        paymentOptions={schoolData.developer.paymentOptions}
        developerName={schoolData.developer.name}
        currentTheme={currentTheme}
      />
      
      <motion.div 
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center"
      >
        <ThemeSwitcher currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <Button 
          className="rounded-full p-3 shadow-xl bg-gradient-to-br from-primary to-secondary hover:brightness-110 text-primary-foreground focus:ring-4 focus:ring-ring"
          onClick={() => setIsCoffeeModalOpen(true)}
          aria-label="Support the developer"
        >
          <Coffee size={24} />
        </Button>
        <Button 
          className="rounded-full p-3 shadow-xl bg-gradient-to-br from-accent to-muted hover:brightness-110 text-accent-foreground focus:ring-4 focus:ring-ring"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </Button>
      </motion.div>
    </div>
  );
}

export default App;