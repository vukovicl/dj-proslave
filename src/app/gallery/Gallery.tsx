import React, { useEffect, useState, useCallback } from 'react';
import './Gallery.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faMaximize
} from '@fortawesome/free-solid-svg-icons';
import aboutHeroImg from '../../assets/images/closeup-dj-working-blue-light.webp'
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "galerija",
    "Galerija | DJ Proslave",
    "Pogledajte fotografije i video zapise s naših nastupa. Uhvaćeni trenuci vrhunske atmosfere s vjenčanja, korporativnih evenata i privatnih proslava.",
    "galerija, slike dj, video dj, nastupi, dj proslave"
  );
}

function Gallery() {
  const [listOfImages] = useState([
    { name: "gallery01", alt: 'Galerija 1' },
    { name: "gallery02", alt: 'Galerija 2' },
    { name: "gallery03", alt: 'Galerija 3' },
    { name: "gallery04", alt: 'Galerija 4' },
    { name: "gallery05", alt: 'Galerija 5' },
    { name: "gallery06", alt: 'Galerija 6' },
    { name: "gallery07", alt: 'Galerija 7' },
    { name: "gallery08", alt: 'Galerija 8' },
    { name: "gallery09", alt: 'Galerija 9' },
    { name: "gallery10", alt: 'Galerija 10' },
    { name: "gallery11", alt: 'Galerija 11' },
    { name: "gallery12", alt: 'Galerija 12' }
  ]);

  const [listOfVideos] = useState([
    { src: "https://www.youtube.com/embed/9lpM63Vg3U4" },
    { src: "https://www.youtube.com/embed/kAx9IMxXdbc" },
    { src: "https://www.youtube.com/embed/NwNC6rK1Lgs" }
  ]);

  const [hovered, setHovered] = useState('');
  
  // Lightbox State
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [activeZoomImg, setActiveZoomImg] = useState(0);

  const openLightbox = (index: number) => {
    setActiveZoomImg(index);
    setIsZoomActive(true);
  };

  const closeLightbox = () => {
    setIsZoomActive(false);
  };

  const nextLightboxImg = useCallback(() => {
    setActiveZoomImg((prev) => (prev === listOfImages.length - 1 ? 0 : prev + 1));
  }, [listOfImages.length]);

  const prevLightboxImg = useCallback(() => {
    setActiveZoomImg((prev) => (prev === 0 ? listOfImages.length - 1 : prev - 1));
  }, [listOfImages.length]);

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (isZoomActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isZoomActive]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomActive) return;
      if (e.key === 'ArrowRight') nextLightboxImg();
      if (e.key === 'ArrowLeft') prevLightboxImg();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomActive, nextLightboxImg, prevLightboxImg]);

  return (
    <div className="bg-[#050508] min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className='relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050508] z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${aboutHeroImg})` }}></div>
        </div>

        {/* Content */}
        <div className='container relative z-20 text-center pt-16'>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4'>
              Naš Rad
            </h4>
            <h1 className='text-5xl md:text-7xl font-light tracking-wide text-white mb-6 drop-shadow-xl'>
              Uhvaćeni <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Trenuci.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Photo Gallery (Masonry Grid) */}
      <section className='py-20 md:py-32 relative'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.03] blur-[120px] rounded-full z-0 pointer-events-none'></div>

        <div className='container relative z-10'>
          <div className='mb-12 md:mb-16 text-center md:text-left'>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
              Foto <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">Galerija</span>
            </h2>
            <div className='w-20 md:w-24 h-1 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-transparent rounded-full mx-auto md:mx-0'></div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {listOfImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5"
                onMouseEnter={() => setHovered(img.name)}
                onMouseLeave={() => setHovered('')}
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={new URL(`../../assets/images/gallery-optimized/${img.name}.webp`, import.meta.url).href} 
                  alt={img.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center ${hovered === img.name ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transform transition-transform duration-500 scale-50 group-hover:scale-100">
                     <FontAwesomeIcon icon={faMaximize} className='text-white text-lg' />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Video Gallery */}
      <section id="video" className='py-20 md:py-32 relative bg-[#0a0b10] border-t border-white/5'>
        <div className='container relative z-10'>
          <div className='mb-12 md:mb-16 text-center md:text-left'>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
              Video <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">Galerija</span>
            </h2>
            <div className='w-20 md:w-24 h-1 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-transparent rounded-full mx-auto md:mx-0'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            {listOfVideos.map((video, key) => (
              <motion.div 
                key={key} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: key * 0.2 }}
                className='w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group relative'
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent opacity-0 group-hover:opacity-20 blur transition duration-500 rounded-2xl"></div>
                
                <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center z-10">
                  <iframe
                    className="w-full h-full absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src={video.src}
                    title={`Video ${key + 1}`}
                  >
                  </iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Modern Lightbox / Carousel (Framer Motion) */}
      <AnimatePresence>
        {isZoomActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Close lightbox"
            >
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>

            {/* Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevLightboxImg(); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Previous image"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl md:text-3xl" />
            </button>

            {/* Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextLightboxImg(); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Next image"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl md:text-3xl" />
            </button>

            {/* Image Container with AnimatePresence for smooth transitions */}
            <div className="relative w-full max-w-[90vw] h-[85vh] flex items-center justify-center" onClick={closeLightbox}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeZoomImg}
                  src={new URL(`../../assets/images/gallery/${listOfImages[activeZoomImg].name}.jpg`, import.meta.url).href}
                  alt={listOfImages[activeZoomImg].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
              </AnimatePresence>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm tracking-widest">
              {activeZoomImg + 1} / {listOfImages.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default Gallery;
