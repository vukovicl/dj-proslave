import React, { useEffect, useRef } from 'react';
import './WeddingDJ.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import djVjencanjaImg from '../../assets/images/dj-vjencanja.webp'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faMusic, faStar, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "dj-za-vjencanja",
    "DJ za Vjenčanja | Vaš Savršen Dan uz Najbolju Glazbu",
    "Profesionalni DJ za vjenčanja pruža nezaboravnu atmosferu, prilagođen glazbeni repertoar i vrhunsku rasvjetu za vaš poseban dan.",
    "dj za vjenčanje, glazba za svadbu, dj vjenčanja, dj rasvjeta"
  );
}

function WeddingDJ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://djproslave.com/dj-za-vjencanja/#service`,
    "name": "DJ za Vjenčanja",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `https://djproslave.com/#business`,
      "name": "DJ Proslave",
      "image": "https://djproslave.com/logo.png"
    },
    "description": "Profesionalni DJ za vjenčanja pruža nezaboravnu atmosferu i prilagođen glazbeni repertoar.",
    "areaServed": "Hrvatska",
    "url": "https://djproslave.com/dj-za-vjencanja/",
    "category": "Wedding Entertainment"
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
      {/* 1. HERO BANNER - VJENČANJA (Osobni pristup) */}
      <section ref={heroRef} className='relative pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Pozadinska slika s gradijentom */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url(${djVjencanjaImg})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508]/60 to-[#050508]"></div>
          {/* Romantični, topli glow */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37] opacity-[0.06] blur-[150px] rounded-full'></div>
        </motion.div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h4 className='text-[#d4af37] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 flex items-center justify-center gap-4'>
              <span className="w-12 h-px bg-[#d4af37]"></span>
              Vaš Najposebniji Dan
              <span className="w-12 h-px bg-[#d4af37]"></span>
            </h4>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white drop-shadow-2xl mb-8 leading-tight'>
              Vaša priča. <br className="hidden md:block"/>
              <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffdf73]'>Naš ritam.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Vi ste u centru pozornosti. Svaki ton, svaka pjesma i svaki prijelaz krojeni su isključivo prema Vašim željama kako bismo stvorili savršenu zvučnu kulisu za Vašu ljubavnu priču.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - Fokus na mladence */}
      <section className="py-24 md:py-32 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Kartica 1: Potpuno osobni pristup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faHeart} className="text-[#d4af37] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">1 na 1 Pristup</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Slušamo Vašu viziju. Prije velikog dana sjedamo zajedno i dogovaramo svaki detalj kako bismo osigurali da playlista savršeno odražava Vaš karakter i glazbeni ukus.
              </p>
            </motion.div>

            {/* Kartica 2: Nezaboravni trenutci */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faStar} className="text-[#d4af37] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Magični Trenuci</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Ulazak u salu, rezanje torte, prvi ples... Svaki od ovih ključnih trenutaka zaslužuje epsku glazbenu pozadinu. Mi ćemo se pobrinuti za savršen *tajming*.
              </p>
            </motion.div>

            {/* Kartica 3: Zabava za sve */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-10 rounded-3xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-colors duration-500 group shadow-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <FontAwesomeIcon icon={faMusic} className="text-[#d4af37] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Zabava za sve generacije</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-0 mt-auto relative z-10">
                Naš je cilj spojiti različite generacije na plesnom podiju. Bez obzira na godine Vaših uzvanika, kreiramo miks zbog kojeg nitko neće sjediti.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. TIMELINE VJENČANJA - Posebna pažnja svakom detalju */}
      <section className="py-24 bg-[#0a0b10] border-y border-white/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="w-full lg:w-5/12 relative">
              <div className="sticky top-32">
                <FontAwesomeIcon icon={faGlassCheers} className="text-[#d4af37] text-4xl mb-6 opacity-80" />
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug">Uz Vas od prvog <br/><span className="font-semibold italic text-[#d4af37]">do zadnjeg takta.</span></h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Vaš dan nije samo zabava – to je niz pažljivo isplaniranih trenutaka prepunih emocija. Naša uloga je osjetiti atmosferu u dvorani i isporučiti pravu pjesmu u pravom trenutku.
                </p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Znamo da ste uložili mjesece u planiranje. Prepustite nama glazbenu direkciju i dopustite si da napokon odahnete, plešete i uživate u svom danu iz snova.
                </p>
              </div>
            </div>

            {/* Timeline lista (Koraci) */}
            <div className="w-full lg:w-7/12 flex flex-col gap-10">
              {/* Korak 1 */}
              <div className="flex gap-6 border border-white/10 p-8 rounded-3xl bg-white/[0.02]">
                <div className="text-3xl font-black text-white/10 pt-1">01</div>
                <div>
                  <h4 className="text-xl text-white font-medium mb-2">Elegantno Okupljanje</h4>
                  <p className="text-gray-400 font-light">
                    Kroz uvodni dio večeri stvaramo opuštenu i profinjenu atmosferu. Suptilna pozadinska glazba uz koju Vaši gosti mogu razgovarati, nazdravljati i uživati u hrani.
                  </p>
                </div>
              </div>
              
              {/* Korak 2 */}
              <div className="flex gap-6 border border-[#d4af37]/20 p-8 rounded-3xl bg-gradient-to-r from-[#d4af37]/10 to-transparent relative overflow-hidden">
                <div className="text-3xl font-black text-[#d4af37]/30 pt-1">02</div>
                <div className="relative z-10">
                  <h4 className="text-xl text-[#d4af37] font-medium mb-2">Vaš Spektakularni Ulazak</h4>
                  <p className="text-gray-300 font-light">
                    Trenutak kada ulazite u salu kao vjenčani par mora biti besprijekoran. Tu dižemo energiju na maksimum i stvaramo trenutak za pamćenje prije Prvog plesa.
                  </p>
                </div>
              </div>

              {/* Korak 3 */}
              <div className="flex gap-6 border border-white/10 p-8 rounded-3xl bg-white/[0.02]">
                <div className="text-3xl font-black text-white/10 pt-1">03</div>
                <div>
                  <h4 className="text-xl text-white font-medium mb-2">Ludilo na Podiju</h4>
                  <p className="text-gray-400 font-light">
                    Kada formalnosti završe, pretvaramo Vašu salu u najbolji klub u gradu. Neprekidan miks omiljenih hitova prilagođen isključivo Vašim uputama drži podij punim do jutra.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. SNAŽAN CTA (Osobni kontakt) */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#d4af37] opacity-[0.08] blur-[120px] rounded-full z-0 pointer-events-none'></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <div className="max-w-4xl mx-auto border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Vaš datum je <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffdf73]">poseban.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
              Datumi se brzo pune. Javite nam se na vrijeme, rezervirajte svoj dan i krenimo zajedno planirati glazbu za Vaše vjenčanje iz snova.
            </p>
            <Link to='/kontakt' onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#ffdf73] text-black font-extrabold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] rounded-full">
              Provjerite Dostupnost
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default WeddingDJ;
