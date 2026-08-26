import React, { useEffect, useRef } from 'react';
import './EventDJ.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import eventDjImg from '../../assets/images/event-dj.webp'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBuilding, faUsers, faMusic, faSliders } from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "dj-za-korporativni-dogadaj",
    "DJ za Korporativne Događaje | Glazba za Evente | DJ Proslave",
    "Profesionalna glazba, razglas i rasvjeta za vaš korporativni event, teambuilding ili poslovnu zabavu. Stvorite ugodnu atmosferu za vaše partnere i zaposlenike.",
    "dj za evente, korporativni dj, glazba za teambuilding, dj za poslovni domjenak"
  );
}

function EventDJ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://djproslave.com/dj-za-korporativni-dogadaj/#service`,
    "name": "DJ za Korporativne Događaje",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `https://djproslave.com/#business`,
      "name": "DJ Proslave",
      "image": "https://djproslave.com/logo.png"
    },
    "description": "Profesionalna glazba, razglas i rasvjeta za vaš korporativni event ili poslovnu zabavu.",
    "areaServed": "Hrvatska",
    "url": "https://djproslave.com/dj-za-korporativni-dogadaj/",
    "category": "Corporate Event Entertainment"
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-[#050508] min-h-screen">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      {/* 1. KORPORATIVNI HERO BANNER */}
      <section ref={heroRef} className='relative pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Pozadinska slika s gradijentom */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: `url(${eventDjImg})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508]/60 to-[#050508]"></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[color:var(--color-accent-gold)] opacity-[0.05] blur-[150px] rounded-full'></div>
        </motion.div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h4 className='text-[color:var(--color-accent-gold)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4'>
              <span className="w-12 h-px bg-[color:var(--color-accent-gold)]"></span>
              Corporate & B2B
            </h4>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white drop-shadow-2xl mb-8 leading-tight'>
              Ekskluzivna glazbena <br className="hidden md:block"/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>kulisa za Vaše događaje.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Svaki korporativni event zahtijeva savršenu koordinaciju i atmosferu. Mi osiguravamo profesionalni glazbeni pečat koji Vaš brend zaslužuje.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - Ključne Prednosti */}
      <section className="py-24 md:py-32 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Kartica 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faUsers} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Prilagodljivost Publici</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Naš DJ ima bogato iskustvo u radu s raznovrsnom publikom. Razumijemo dinamiku različitih događanja i prilagođavamo se energiji prostorije na licu mjesta.
              </p>
            </motion.div>

            {/* Kartica 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faSliders} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Vrhunska Oprema</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Koristimo isključivo profesionalnu opremu i tehničke sustave visoke klase kako bismo osigurali besprijekornu i čistu zvučnu izvedbu bez tehničkih poteškoća.
              </p>
            </motion.div>

            {/* Kartica 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-10 rounded-3xl border border-[color:var(--color-accent-gold)]/20 hover:border-[color:var(--color-accent-gold)]/50 transition-colors duration-500 group shadow-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent-gold)]/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <FontAwesomeIcon icon={faMusic} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Glazbeni Identitet</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-0 mt-auto relative z-10">
                Kombinirajući glazbu koja točno odgovara tonu vašeg eventa i viziji Vašeg brenda, osiguravamo neprekidno zadovoljstvo i profesionalan dojam kod Vaših gostiju.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VRSTE EVENTA - Velika tipografska traka */}
      <section className="py-24 bg-[#0a0b10] border-y border-white/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            
            <div className="w-full md:w-1/3">
              <FontAwesomeIcon icon={faBuilding} className="text-[color:var(--color-accent-gold)] text-4xl mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Za koje evente <br/><span className="font-semibold text-[color:var(--color-accent-gold)]">sviramo?</span></h2>
              <p className="text-gray-400 font-light">
                Neovisno o veličini Vašeg poduzeća ili vrsti okupljanja, prilagođavamo se svakom formatu poslovnog događaja.
              </p>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">01</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Gala večere i domjenci</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">02</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Korporativni partyji</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">03</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Promocije brendova</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">04</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Team building</h4>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. SNAŽAN CTA (Call to Action) */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.08] blur-[120px] rounded-full z-0 pointer-events-none'></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <div className="max-w-4xl mx-auto border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Spremni za <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">surađivati?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
              Zatražite informativnu ponudu za Vaš sljedeći korporativni događaj. Kontaktirajte nas danas i osigurajte vrhunsku atmosferu za Vaše uzvanike.
            </p>
            <Link to='/kontakt' onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-extrabold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] rounded-full">
              Zatražite Ponudu
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default EventDJ;
