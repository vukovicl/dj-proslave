import React from 'react';
import './Services.scss';
import { motion } from 'framer-motion';
import eventsVideo from '../../assets/videos/events.mp4';
import privatePartiesVideo from '../../assets/videos/private-parties.mp4';
import weddingsVideo from '../../assets/videos/weddings.mp4';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';
import {
  FloatingEdgeVinyl,
  EdgeVuMeter,
  VinylEdgePeeker,
  FloatingHeadphones,
  FloatingMusicNote,
  EdgeSparkle,
  StageLaserBeams,
  AudioFrequencyWaveform
} from '../general/ambient-background/AmbientBackground';

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
            "name": "DJ za Proslave",
            "description": "Vrhunska atmosfera za rođendane i privatne tulume.",
            "url": "https://djproslave.com/dj-za-proslave/"
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
        }
      ]
    }
  };

  return (
    <div className="bg-[#050508]/40 backdrop-blur-sm min-h-screen pb-24 md:pb-32 overflow-x-hidden relative">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      
      {/* 1. Kompaktni, elegantni Hero Banner (optimizirana visina) */}
      <section className='relative pt-24 pb-8 md:pt-32 md:pb-10 flex flex-col items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Dynamic Concert Stage Laser Beams & Glow */}
        <StageLaserBeams />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,rgba(255,223,115,0.05)_50%,transparent_75%)] blur-[100px] rounded-full pointer-events-none animate-ambient-pulse'></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container relative z-10 text-center px-4"
        >
          <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[color:var(--color-accent-gold)] text-xs font-semibold tracking-widest uppercase mb-4'>
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] animate-pulse"></span>
            Glazbeni paketi & usluge
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white drop-shadow-xl mb-4'>
            Naše <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Usluge.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Pronađite idealan glazbeni pristup za Vaš događaj. Vrhunski zvuk, prilagođeni repertoar i nezaboravna atmosfera.
          </p>
        </motion.div>
      </section>

      {/* 2. Novi Grid Raspored Usluga: 2 stupca u prvom redu + 1 široki stupac s videom u drugom redu */}
      <section className="container mt-6 md:mt-10 px-4 md:px-6 relative">
        {/* Dynamic section glow & Audio Waveform */}
        <AudioFrequencyWaveform className="opacity-40" />
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(194,167,90,0.1)_0%,transparent_70%)] blur-[140px] pointer-events-none -z-10 animate-ambient-drift-1'></div>

        {/* In-section floating edge DJ elements */}
        <div className='hidden 2xl:flex absolute -left-20 top-1/3 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
          <EdgeVuMeter label="CH 1" channel={1} />
          <FloatingMusicNote type="clef" />
        </div>
        <div className='hidden 2xl:flex absolute -right-20 top-1/3 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingEdgeVinyl size={56} reverse />
          <EdgeSparkle size={18} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10">
          
          {/* Usluga 01 (PRVO MJESTO) - DJ za Vjenčanja */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col bg-[#101014] rounded-3xl overflow-hidden border border-white/10 hover:border-[color:var(--color-accent-gold)]/40 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group transition-all duration-500"
          >
            {/* Video s efektom i badgeom */}
            <div className="relative overflow-hidden aspect-[16/10] bg-black">
              <video 
                src={weddingsVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[color:var(--color-accent-gold)]/40 text-[color:var(--color-accent-gold)] text-xs font-bold tracking-wider uppercase">
                <span>01</span>
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent-gold)]"></span>
                <span>Najtraženije</span>
              </div>
            </div>
            
            {/* Tekst i detalji */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className='text-2xl md:text-3xl font-light text-white mb-3 tracking-wide'>
                DJ za <span className='font-semibold italic text-[color:var(--color-accent-gold)]'>Vjenčanja</span>
              </h3>
              
              <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Dodajte dašak magije Vašem najvažnijem danu. Prilagođeni setovi za obred, večeru i tulum koji drži plesni podij ispunjenim do jutra.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Glazba za ceremoniju, prijem i prvi ples</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Vrhunski razglas i ambijentalna rasvjeta</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Koordinacija s protokolom mladenaca</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                  to='/dj-za-vjencanja' 
                  onClick={() => window.scrollTo(0, 0)} 
                  className='inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 group/btn border border-white/10 hover:border-transparent'
                >
                  <span>Detalji za vjenčanja</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] group-hover/btn:text-black transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 02 - DJ za Proslave */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col bg-[#101014] rounded-3xl overflow-hidden border border-white/10 hover:border-[color:var(--color-accent-gold)]/40 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group transition-all duration-500"
          >
            {/* Video s efektom i badgeom */}
            <div className="relative overflow-hidden aspect-[16/10] bg-black">
              <video 
                src={privatePartiesVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gray-200 text-xs font-bold tracking-wider uppercase">
                <span>02</span>
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent-gold)]"></span>
                <span>Privatne proslave</span>
              </div>
            </div>
            
            {/* Tekst i detalji */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className='text-2xl md:text-3xl font-light text-white mb-3 tracking-wide'>
                DJ za <span className='font-semibold text-white'>Proslave</span>
              </h3>
              
              <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Učinite svoj rođendan, 18. rođendan ili privatni tulum događajem o kojem će se dugo pričati. Ritam i energija skrojeni prema vašem ukusu.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Rođendani, punoljetnosti i privatni tulumi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Miks najnovijih hitova i vječnih plesnih klasika</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Prilagodba glazbenih želja slavljenika i gostiju</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                  to='/dj-za-proslave' 
                  onClick={() => window.scrollTo(0, 0)} 
                  className='inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 group/btn border border-white/10 hover:border-transparent'
                >
                  <span>Detalji za proslave</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] group-hover/btn:text-black transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 03 (DRUGI RED - ŠIROKI STUPAC KROZ DVA STUPCA S VIDEOM) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col lg:flex-row bg-[#111116] rounded-3xl overflow-hidden border border-white/15 hover:border-[color:var(--color-accent-gold)]/50 shadow-[0_25px_50px_rgba(0,0,0,0.7)] group transition-all duration-500 relative"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-accent-gold)]/20 via-transparent to-[color:var(--color-accent-gold)]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

            {/* VIDEO Sekcija umjesto slike */}
            <div className="w-full lg:w-7/12 relative aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[420px] bg-black overflow-hidden flex items-center justify-center">
              <video 
                src={eventsVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Video Overlay sa statusom */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#111116]/90 z-10 pointer-events-none"></div>
              
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Video prezentacija</span>
              </div>
            </div>
            
            {/* Tekst i sadržaj za Evente */}
            <div className="w-full lg:w-5/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-20">
              <div className="flex items-center gap-3 text-[color:var(--color-accent-gold)] mb-4">
                <span className="font-bold text-sm tracking-widest uppercase">03</span>
                <span className="w-8 h-px bg-[color:var(--color-accent-gold)]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase">Korporativni Eventi</span>
              </div>
              
              <h3 className='text-3xl md:text-4xl font-light text-white mb-4 tracking-wide'>
                DJ za <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Evente & Domjenke</span>
              </h3>
              
              <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Pred vama je važan poslovni događaj ili gala večera? Osiguravamo vrhunsku glazbenu kulisu i profesionalnu audio/light tehniku koja podiže vaš brend i ostavlja besprijekoran dojam na partnere i uzvanike.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Korporativni domjenci, konferencije i kongresi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Modne revije, promocije i lansiranja brendova</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Kompletna tehnička podrška, mikrofoni i rasvjeta</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link 
                  to='/dj-za-korporativni-dogadaj' 
                  onClick={() => window.scrollTo(0, 0)} 
                  className='inline-flex items-center gap-4 px-8 py-4 rounded-xl bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02]'
                >
                  <span>Detalji za evente</span>
                  <FontAwesomeIcon icon={faArrowRight} />
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
