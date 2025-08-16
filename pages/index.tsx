import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/school/Navbar";
import Hero from "@/components/school/Hero";
import About from "@/components/school/About";
import Facilities from "@/components/school/Facilities";
import Academics from "@/components/school/Academics";
import Staff from "@/components/school/Staff";
import News from "@/components/school/News";
import Admissions from "@/components/school/Admissions";
import Alumni from "@/components/school/Alumni";
import Gallery from "@/components/school/Gallery";
import Contact from "@/components/school/Contact";
import Footer from "@/components/school/Footer";
import BuyMeACoffeeModal from "@/components/school/BuyMeACoffeeModal";
import ThemeSwitcher from "@/components/school/ThemeSwitcher";
import { ChevronUp, Coffee } from "lucide-react";

interface ContactInfo {
  phone: string;
  contactPerson: string;
  email: string;
  address: string;
}

interface Facility {
  name: string;
  description: string;
}

interface Program {
  level: string;
  description: string;
}

interface AcademicsData {
  programs: Program[];
  features: string[];
}

interface Academics {
  programs: Program[];
  features: string[];
}

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

interface StaffMember {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  image: string;
}

interface NewsItem {
  title: string;
  date: string;
  description: string;
  image: string;
}

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

interface AlumniMember {
  name: string;
  graduation: string;
  achievement: string;
  image: string;
}

interface PaymentOptions {
  esewa: string;
  bank: {
    name: string;
    acc: string;
  };
  khalti: string;
}

interface Developer {
  name: string;
  title: string;
  email: string;
  phone: string;
  paymentOptions: PaymentOptions;
}

interface SchoolData {
  name: string;
  tagline: string;
  location: string;
  established: string;
  enrollment: string;
  levels: string;
  affiliation: string;
  contact: ContactInfo;
  mapUrl: string;
  logo: string;
  heroImage: string;
  facilities: Facility[];
  academics: AcademicsData;
  gallery: GalleryItem[];
  staff: StaffMember[];
  news: NewsItem[];
  admissions: AdmissionsData;
  alumni: AlumniMember[];
  developer: Developer;
}

const schoolData: SchoolData = {
  name: "Adarsha Secondary School",
  tagline: "Excellence in Education",
  location: "Sanothimi, Madhyapur Thimi Municipality, Bhaktapur, Nepal",
  established: "1960",
  enrollment: "825 students",
  levels: "Early Childhood Development (ECD) to Grade 12",
  affiliation: "National Examination Board (NEB)",
  contact: {
    phone: "9841832799",
    contactPerson: "Ishwor Kumar Shrestha",
    email: "info@adarshasecondarybhaktapur.edu.np",
    address: "Ward No. 2, Jatigaal, Madhyapur Thimi Municipality",
  },
  mapUrl: "https://g.co/kgs/sC5ktv2",
  logo: "/logo.png",
  heroImage: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/51c6f2f6615cf6ba3907064289a7cfbc.jpg",
  facilities: [
    { name: "Modern Classrooms", description: "Well-equipped classrooms with smart boards and interactive learning tools" },
    { name: "Science Labs", description: "Fully furnished physics, chemistry and biology labs with modern equipment" },
    { name: "Computer Lab", description: "Modern computer lab with high-speed internet and latest software" },
    { name: "Library", description: "Extensive library with over 5000 books and digital resources" },
    { name: "Sports Ground", description: "Large playground for football, volleyball, basketball and athletics" },
    { name: "Cafeteria", description: "Hygienic cafeteria serving nutritious meals and snacks" },
    { name: "Counseling Services", description: "Professional counseling for academic and career guidance" },
    { name: "Scholarship Programs", description: "Merit-based and need-based scholarship opportunities" }
  ],
  academics: {
    programs: [
      { level: "Early Childhood Development (ECD)", description: "Foundation years focusing on basic skills and creativity" },
      { level: "Primary Level (1-5)", description: "Core subjects with co-curricular activities and skill development" },
      { level: "Lower Secondary (6-8)", description: "Advanced subjects with practical learning and project work" },
      { level: "Secondary (9-10)", description: "Preparation for SEE with comprehensive career guidance" },
      { level: "Higher Secondary (11-12) - Management", description: "Business studies, economics, accounting and entrepreneurship" },
      { level: "Higher Secondary (11-12) - Humanities", description: "Social studies, literature, psychology and cultural studies" },
      { level: "Higher Secondary (11-12) - Education", description: "Teaching methodology, child psychology and educational theory" }
    ],
    features: [
      "Experienced faculty members with advanced degrees",
      "Small class sizes for personalized attention",
      "Regular assessments and progress tracking",
      "Extensive extra-curricular activities",
      "Professional career counseling",
      "Digital learning resources",
      "Practical learning approach"
    ]
  },
  gallery: [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/4428987fca76639fea5e98e5a6c2871c.jpg", alt: "School Logo", category: "Infrastructure" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/23f50b9b-3bcd-4f41-a441-8351c3cfd821/51c6f2f6615cf6ba3907064289a7cfbc.jpg", alt: "School Building", category: "Infrastructure" },
    { src: "/assembly.jpg", alt: "Morning Assembly", category: "Academic Activities" },
    { src: "/adarsha.png", alt: "School Campus", category: "Infrastructure" }
  ],
  staff: [
    {
      name: "Mr. Ishwor Kumar Shrestha",
      position: "Principal",
      qualification: "M.Ed. in Educational Leadership",
      experience: "15+ years in education",
      image: "/staff/principal.jpg"
    },
    {
      name: "Mrs. Sita Devi Maharjan",
      position: "Vice Principal",
      qualification: "M.A. in English Literature",
      experience: "12+ years in teaching",
      image: "/staff/vice-principal.jpg"
    },
    {
      name: "Mr. Ram Bahadur Tamang",
      position: "Head of Science Department",
      qualification: "M.Sc. in Physics",
      experience: "10+ years in science education",
      image: "/staff/science-head.jpg"
    }
  ],
  news: [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      description: "Students showcased their athletic talents in various sports competitions",
      image: "public/news/sports-day.jpg"
    },
    {
      title: "Science Exhibition Success",
      date: "February 28, 2024",
      description: "Our students won first prize in the district-level science exhibition",
      image: "public/news/science-exhibition.jpg"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "January 20, 2024",
      description: "State-of-the-art computer lab with 30 new computers inaugurated",
      image: "public/news/computer-lab.jpg"
    }
  ],
  admissions: {
    process: [
      "Fill out the admission form",
      "Submit required documents",
      "Attend entrance examination (for grades 6+)",
      "Interview with parents and student",
      "Fee payment and enrollment"
    ],
    requirements: {
      "ECD to Grade 5": ["Birth certificate", "Previous school records (if applicable)", "Passport size photos"],
      "Grade 6-8": ["Previous grade transcripts", "Character certificate", "Birth certificate", "Passport size photos"],
      "Grade 9-10": ["Grade 8 transcript", "Character certificate", "Birth certificate", "Passport size photos"],
      "Grade 11-12": ["SEE transcript", "Character certificate", "Birth certificate", "Passport size photos"]
    },
    deadlines: {
      "Regular Admission": "March 1 - April 30",
      "Late Admission": "May 1 - May 15 (with late fee)"
    }
  },
  alumni: [
    {
      name: "Dr. Rajesh Shrestha",
      graduation: "Class of 2005",
      achievement: "Renowned cardiologist at Tribhuvan University Teaching Hospital",
      image: "public/alumni/rajesh.jpg"
    },
    {
      name: "Ms. Priya Maharjan",
      graduation: "Class of 2008",
      achievement: "Software Engineer at Google, USA",
      image: "public/alumni/priya.jpg"
    },
    {
      name: "Mr. Suresh Tamang",
      graduation: "Class of 2010",
      achievement: "Successful entrepreneur and founder of Tech Solutions Nepal",
      image: "public/alumni/suresh.jpg"
    }
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

export default function Home() {
  const { toast } = useToast();
  const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  const handleContactSubmit = (formData: any) => {
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
        <Staff data={schoolData} currentTheme={currentTheme} />
        <News data={schoolData} currentTheme={currentTheme} />
        <Admissions data={schoolData} currentTheme={currentTheme} />
        <Alumni data={schoolData} currentTheme={currentTheme} />
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
