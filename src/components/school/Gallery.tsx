import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

interface SchoolData {
  gallery: GalleryItem[];
}

interface GalleryProps {
  data: SchoolData;
  currentTheme?: string;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const galleryImages = [
    { src: "/adarsha.png", alt: "School campus view" },
    { src: "/kabaddi.jpg", alt: "Students in graduation gowns" },
    { src: "/kabaddi2.jpg", alt: "University lecture hall" },
    { src: "/kabaddi3.jpg", alt: "Classroom with students" },
    { src: "/karate.jpg", alt: "Students working in a library" },

    { src: "/school1.jpg", alt: "Students working in a library" },
    { src: "/picnic.jpg", alt: "Students working in a library" },
    { src: "/kabaddi1.jpg", alt: "Students working in a library" },
    ...data.gallery
  ];


  return (
    <section id="gallery" className="py-20 bg-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">School Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into life at Adarsha Secondary School.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper w-full h-[300px] md:h-[500px]"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="bg-center bg-cover w-[250px] md:w-[400px] rounded-xl overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
