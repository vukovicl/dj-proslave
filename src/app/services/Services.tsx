import React, { useEffect } from 'react';
import './Services.scss';
import { motion } from 'framer-motion';
import djProslaveImg from '../../assets/images/dj-proslave.webp'
import eventDjImg from '../../assets/images/event-dj.webp'
import djVjencanjaImg from '../../assets/images/dj-vjencanja.webp'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "usluge",
    "Usluge | DJ Proslave",
    "Nudimo profesionalne DJ usluge za vjenčanja, korporativne evente i privatne proslave. Prilagođeni glazbeni repertoar i vrhunska oprema.",
    "dj usluge, dj za vjenčanja, dj za evente, glazba za proslave"
  );
}

function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Profesionalne DJ Usluge",
    "serviceType": "Zabavne i glazbene usluge za razne događaje",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://djproslave.com/#business",
      "name": "DJ Proslave",
      "url": "https://djproslave.com/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Naše Usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Vjenčanja",
            "description": "Profesionalni DJ i rasvjeta za vaš poseban dan.",
            "url": "https://djproslave.com/dj-za-vjencanja/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Evente",
            "description": "Glazbena podloga i zabava za korporativne događaje.",
            "url": "https://djproslave.com/dj-za-korporativni-dogadaj/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Proslave",
            "description": "Vrhunska atmosfera za rođendane i privatne tulume.",
            "url": "https://djproslave.com/dj-za-proslave/"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-[#050508] min-h-screen pb-32">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      
      {/* 1. Čisti, elegantni Hero Banner */}
      <section className='relative pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Blagi pozadinski glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[color:var(--color-accent-gold)] opacity-[0.08] blur-[150px] rounded-full'></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container relative z-10 text-center px-4"
        >
          <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.4em] uppercase text-xs md:text-sm mb-6 flex items-center justify-center gap-4'>
            <span className="w-12 h-px bg-[color:var(--color-accent-gold)]"></span>
            Što nudimo
            <span className="w-12 h-px bg-[color:var(--color-accent-gold)]"></span>
          </h4>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white drop-shadow-2xl mb-8'>
            Naše <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Usluge.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Pronađite idealan glazbeni pristup za Vaš događaj. Od intimnih proslava do velikih svadbenih svečanosti.
          </p>
        </motion.div>
      </section>

      {/* 2. Lista Usluga (Editorial Style) */}
      <section className="container mt-20 md:mt-32">
        <div className="flex flex-col gap-16 md:gap-32">
          
          {/* Usluga 01 - DJ za Proslave */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row bg-[#111111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group"
          >
            {/* Slika */}
            <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[500px]">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
              <img 
                src={djProslaveImg} 
                alt="DJ za Proslave" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Tekst / Sadržaj */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
              {/* Orijentacijski broj */}
              <div className="flex items-center gap-3 text-[color:var(--color-accent-gold)] mb-6 opacity-80">
                <span className="font-bold text-xl">01</span>
                <span className="w-8 h-px bg-[color:var(--color-accent-gold)]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase">Klupski stil</span>
              </div>
              
              <h3 className='text-3xl md:text-5xl font-light text-white mb-6 tracking-wide'>
                DJ za <span className='font-semibold'>Proslave</span>
              </h3>
              
              <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light'>
                Učinite svoju proslavu nezaboravnom uz naše talentirane DJ-eve. S bogatim glazbenim izborom i prilagođenim setovima, stvaramo energičnu atmosferu koja će oživjeti vašu proslavu. Prepustite nam glazbu i oslobodite se brige, dok mi stvaramo ritam koji će vaše goste držati na podiju cijelu noć.
              </p>
              
              <div className="mt-auto">
                <Link to='/dj-za-proslave' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group/btn'>
                  <span className="border-b border-[color:var(--color-accent-gold)] pb-1 transition-colors duration-300 group-hover/btn:text-[color:var(--color-accent-gold)]">
                    Saznajte više
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] transition-transform duration-300 group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 02 - DJ za Evente (Slika desno) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col lg:flex-row-reverse bg-[#111111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group"
          >
            {/* Slika */}
            <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[500px]">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
              <img 
                src={eventDjImg} 
                alt="DJ za Evente" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Tekst / Sadržaj */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
              {/* Orijentacijski broj */}
              <div className="flex items-center gap-3 text-[color:var(--color-accent-gold)] mb-6 opacity-80">
                <span className="font-bold text-xl">02</span>
                <span className="w-8 h-px bg-[color:var(--color-accent-gold)]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase">Korporativni</span>
              </div>
              
              <h3 className='text-3xl md:text-5xl font-light text-white mb-6 tracking-wide'>
                DJ za <span className='font-semibold'>Evente</span>
              </h3>
              
              <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light'>
                Pred Vama je bitna ceremoija ili događaj? Sa širokim glazbenim spektrom i prilagodljivim setovima, stvaramo atmosferu koja će podići svaki događaj na novu razinu. Prepustite nam glazbene izbore i oslobodite se briga, dok mi osiguravamo ritam koji će vaše goste držati u pokretu cijelu noć!
              </p>
              
              <div className="mt-auto">
                <Link to='/dj-za-korporativni-dogadaj' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group/btn'>
                  <span className="border-b border-[color:var(--color-accent-gold)] pb-1 transition-colors duration-300 group-hover/btn:text-[color:var(--color-accent-gold)]">
                    Saznajte više
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] transition-transform duration-300 group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 03 - DJ za Vjenčanja */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col lg:flex-row bg-[#111111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group"
          >
            {/* Slika */}
            <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[500px]">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
              <img 
                src={djVjencanjaImg} 
                alt="DJ za Vjenčanja" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Tekst / Sadržaj */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
              {/* Zlatni glow iza vjenčanja za dodatnu eleganciju */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[color:var(--color-accent-gold)]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
              
              {/* Orijentacijski broj */}
              <div className="flex items-center gap-3 text-[color:var(--color-accent-gold)] mb-6 opacity-80 relative z-10">
                <span className="font-bold text-xl">03</span>
                <span className="w-8 h-px bg-[color:var(--color-accent-gold)]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase">Ekskluzivno</span>
              </div>
              
              <h3 className='text-3xl md:text-5xl font-light text-white mb-6 tracking-wide relative z-10'>
                DJ za <span className='font-semibold italic'>Vjenčanja</span>
              </h3>
              
              <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light relative z-10'>
                Dodajte dašak magije Vašem vjenčanju uz naše profesionalne DJ-eve. Sa širokim repertoarom glazbe i prilagođenim setovima, stvaramo atmosferu koja će Vas i vaše goste držati na plesnom podiju cijelu noć.
              </p>
              
              <div className="mt-auto relative z-10">
                <Link to='/dj-za-vjencanja' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group/btn'>
                  <span className="border-b border-[color:var(--color-accent-gold)] pb-1 transition-colors duration-300 group-hover/btn:text-[color:var(--color-accent-gold)]">
                    Rezervirajte Vaš Dan
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] transition-transform duration-300 group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Services;
