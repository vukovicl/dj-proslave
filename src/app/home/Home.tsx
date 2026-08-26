import React, { useEffect, useState } from 'react';
import './Home.scss';
import { motion, MotionValue, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import aboutUsImg from '../../assets/images/closeup-dj-working-blue-light.webp';
import djProslaveImg from '../../assets/images/dj-proslave.webp';
import eventDjImg from '../../assets/images/event-dj.webp';
import heroImg from '../../assets/images/hero.webp';
import djVjencanjaImg from '../../assets/images/dj-vjencanja.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faMaximize,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "/",
    "DJ Proslave | Vrhunska Glazba za Vaše Događaje",
    "Pronađite profesionalnog DJ-a za vjenčanja, korporativne evente i privatne proslave. Vrhunska oprema i nezaboravna atmosfera u cijeloj Hrvatskoj.",
    "dj, dj proslave, dj za vjenčanja, dj za evente, najam dj-a"
  );
}
function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": `https://djproslave.com/#business`,
    "name": "DJ Proslave",
    "image": "https://djproslave.com/logo.png",
    "description": "Pronađite profesionalnog DJ-a za vjenčanja, korporativne evente i privatne proslave. Vrhunska oprema i nezaboravna atmosfera u cijeloj Hrvatskoj.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zagreb",
      "addressRegion": "Grad Zagreb",
      "addressCountry": "HR"
    },
    "priceRange": "$$",
    "url": "https://djproslave.com/",
    "sameAs": [
      "https://www.instagram.com/dj.proslave",
      "https://www.facebook.com/DJProslaveVjencanja/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@dj.proslave"
    ]
  };

  const [listOfImages] = useState([
    {
      name: "gallery01",
      alt: 'Galerija 1'
    },
    {
      name: "gallery02",
      alt: 'Galerija 2'
    },
    {
      name: "gallery03",
      alt: 'Galerija 3'
    },
    {
      name: "gallery04",
      alt: 'Galerija 4'
    },
    {
      name: "gallery05",
      alt: 'Galerija 5'
    },
    {
      name: "gallery06",
      alt: 'Galerija 6'
    }
  ]);

  const [hovered, setHovered] = useState('');

  const { scrollYProgress } = useScroll();

  function useParallax(value: MotionValue<number>) {
    return useTransform(value, [0, 1], ['0%', '50%']);
  }

  const y = useParallax(scrollYProgress);

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      <section className='relative h-screen w-full flex items-center bg-[#0a0b10] overflow-hidden'>

        {/* Background Image on Right with Gradient Mask */}
        <div className='absolute inset-0 z-0'>
          <div
            className='absolute top-0 right-0 w-full md:w-4/5 h-full bg-cover bg-center md:bg-right'
            style={{
              backgroundImage: `url(${heroImg})`,
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 85%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 85%, black 100%)'
            }}
          />
          {/* Subtle dark overlay for contrast on smaller screens */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#0a0b10] via-[#0a0b10]/90 md:via-[#0a0b10]/40 to-transparent z-10'></div>
        </div>

        {/* Content Container */}
        <div className='container relative z-20 pt-20 px-6 md:px-8'>
          <div className='max-w-2xl text-left'>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-[color:var(--color-accent-gold)] uppercase tracking-[0.15em] text-sm md:text-base font-semibold mb-4'
            >
              GLAZBA KOJA STVARA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className='text-5xl md:text-7xl lg:text-[5rem] font-light tracking-wide text-white leading-[1.1] mb-6 drop-shadow-xl uppercase'
            >
              Nezaboravne<br />
              <span className='font-semibold text-[color:var(--color-accent-gold)]'>Trenutke</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className='text-gray-300 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed drop-shadow-md'
            >
              Premium DJ usluge za vjenčanja, privatne proslave i korporativne događaje.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2'
            >
              <Link
                to='/kontakt'
                onClick={() => window.scrollTo(0, 0)}
                className='px-8 h-12 md:h-14 inline-flex items-center justify-center bg-[color:var(--color-accent-gold)] text-black font-bold uppercase tracking-widest text-sm hover:bg-[#ffdf73] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] leading-none pt-1'
              >
                Zatraži ponudu
              </Link>
              <Link
                to='/galerija'
                onClick={() => window.scrollTo(0, 0)}
                className='px-8 h-12 md:h-14 inline-flex items-center justify-center bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white transition-colors backdrop-blur-sm leading-none pt-1'
              >
                Pogledaj galeriju
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Intro Hook Section */}
      <section className='home-landing-section relative overflow-hidden py-32 md:py-48'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] bg-[color:var(--color-accent-gold)] opacity-[0.08] blur-[120px] rounded-full z-0 pointer-events-none'></div>

        <div className='container relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='max-w-4xl mx-auto text-center relative'
          >
            {/* Elegant large quote icon */}
            <div className='text-[color:var(--color-accent-gold)] opacity-20 text-8xl md:text-[12rem] font-serif absolute -top-16 md:-top-32 left-1/2 -translate-x-1/2 -z-10 select-none'>
              "
            </div>

            <h2 className='text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight mb-8 drop-shadow-lg'>
              Ključna stvar za stvaranje dobre zabave je <span className='italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>glazba</span>,
              <br className="hidden md:block" />
              <span className='block mt-4 text-2xl md:text-4xl text-gray-200'>uz naše DJ-eve to više nije problem.</span>
            </h2>

            <div className='w-24 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent mx-auto mb-8 opacity-70'></div>

            <p className='text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed'>
              Uz <strong className='text-white font-medium'>DJ Proslave</strong>, uživat ćete u glazbenim trenucima koji će oduševiti Vas i vaše goste. Dopustite nam da vaše želje pretvorimo u stvarnost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Usluge Section (MOVED UP) */}
      <section className='home-services-section relative py-24 md:py-40 overflow-hidden bg-[#0a0b10] border-t border-white/5'>
        {/* Glow */}
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-[color:var(--color-accent-gold)] opacity-[0.05] blur-[150px] rounded-full z-0 pointer-events-none'></div>

        <div className="container relative z-10">
          <div className='mb-16 md:mb-24 text-center flex flex-col items-center'>
            <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4 justify-center'>
              <span className='w-12 h-px bg-[color:var(--color-accent-gold)]'></span>
              Naše Usluge
              <span className='w-12 h-px bg-[color:var(--color-accent-gold)]'></span>
            </h4>
            <h3 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight'>
              Što nudimo za <br className="hidden md:block" />
              <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>
                vašu savršenu proslavu.
              </span>
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className='group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/5 bg-[#1e1e1e] flex flex-col justify-end'
            >
              <div className='absolute inset-0 z-0'>
                <img src={djProslaveImg} alt='DJ za Proslave' className='w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10'></div>
              </div>

              <div className='relative z-20 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                <h3 className='text-2xl md:text-3xl font-medium text-white mb-1'>DJ za Proslave</h3>
                <div className='max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-in-out overflow-hidden'>
                  <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                    Učinite svoju proslavu nezaboravnom uz naše talentirane DJ-eve, prilagođene glazbene setove i energičnu atmosferu.
                  </p>
                </div>
                <Link to='/dj-za-proslave' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-3 text-[color:var(--color-accent-gold)] font-medium uppercase tracking-wider text-xs group/link mt-2'>
                  Saznaj više
                  <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-300 group-hover/link:translate-x-1' />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/5 bg-[#1e1e1e] flex flex-col justify-end'
            >
              <div className='absolute inset-0 z-0'>
                <img src={eventDjImg} alt='DJ za Evente' className='w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10'></div>
              </div>
              <div className='relative z-20 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                <h3 className='text-2xl md:text-3xl font-medium text-white mb-1'>DJ za Evente</h3>
                <div className='max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-in-out overflow-hidden'>
                  <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                    Za bitne ceremonije i događaje osiguravamo širok glazbeni spektar i atmosferu koja podiže svaki event na višu razinu.
                  </p>
                </div>
                <Link to='/dj-za-korporativni-dogadaj' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-3 text-[color:var(--color-accent-gold)] font-medium uppercase tracking-wider text-xs group/link mt-2'>
                  Saznaj više
                  <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-300 group-hover/link:translate-x-1' />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className='group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/5 bg-[#1e1e1e] flex flex-col justify-end'
            >
              <div className='absolute inset-0 z-0'>
                <img src={djVjencanjaImg} alt='DJ za Svadbe' className='w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10'></div>
              </div>
              <div className='relative z-20 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                <h3 className='text-2xl md:text-3xl font-medium text-white mb-1'>DJ za Svadbe</h3>
                <div className='max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-in-out overflow-hidden'>
                  <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                    Dodajte dašak magije Vašem vjenčanju. Profesionalna glazbena kulisa za noć ispunjenu plesom i nezaboravnim trenucima.
                  </p>
                </div>
                <Link to='/dj-za-vjencanja' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-3 text-[color:var(--color-accent-gold)] font-medium uppercase tracking-wider text-xs group/link mt-2'>
                  Saznaj više
                  <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-300 group-hover/link:translate-x-1' />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className='mt-16 md:mt-24 flex justify-center'>
            <Link to='/usluge' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold group shadow-lg'>
              Pregledaj sve usluge
              <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-500 group-hover:translate-x-1.5' />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Marquee Section */}
      <section className='py-20 md:py-32 relative overflow-hidden bg-[#0a0b10] border-y border-white/5'>
        {/* Subtle background glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[150px] bg-[color:var(--color-accent-gold)] opacity-[0.04] blur-[80px] rounded-full z-0 pointer-events-none'></div>

        <div className='container mb-12 md:mb-20 relative z-10'>
          <h3 className='text-2xl md:text-4xl font-light tracking-wide text-gray-400 m-0 text-center uppercase drop-shadow-md'>
            Sviramo sve što <span className='text-white font-medium'>poželite</span>
          </h3>
          <div className='w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent mx-auto mt-6 rounded-full opacity-70'></div>
        </div>

        <div className='w-full overflow-hidden flex relative z-10' style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)' }}>
          <motion.div
            className='flex whitespace-nowrap'
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className='flex items-center'>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>EDM</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Narodno</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '2px var(--color-accent-gold)' }}>Trash</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Strani hitovi</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Domaće</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Opposite direction scroll row */}
        <div className='w-full overflow-hidden flex relative z-10 mt-6 md:mt-10' style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)' }}>
          <motion.div
            className='flex whitespace-nowrap'
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", repeat: Infinity, duration: 45 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className='flex items-center'>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Pop</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Rock</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '2px var(--color-accent-gold)' }}>RnB</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Balkan</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Latino</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. O Nama Section */}
      <section className='relative py-24 md:py-40 overflow-hidden bg-[#0a0b10] border-b border-white/5'>
        <div className='absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[color:var(--color-accent-gold)] opacity-[0.06] blur-[100px] md:blur-[150px] rounded-full z-0 pointer-events-none'></div>

        <div className="container relative z-10">
          <div className='flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24'>

            {/* Apple Style Text Area */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
              <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4'>
                <span className='w-12 h-px bg-[color:var(--color-accent-gold)]'></span>
                O Nama
              </h4>
              <h3 className='text-4xl md:text-5xl lg:text-6xl mb-8 font-light tracking-wide text-white leading-tight md:leading-tight'>
                Strastveni tim posvećen <br className="hidden md:block" />
                <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>
                  nezaboravnim trenucima.
                </span>
              </h3>

              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Dobrodošli na DJ Proslave! Mi smo strastveni tim DJ-eva posvećen stvaranju nezaboravnih glazbenih iskustava. Svaki član našeg tima ima jedinstveni stil, iskustvo i spreman je ispuniti svaku glazbenu želju.
                </p>
                <p>
                  Naš fokus je na beskompromisnoj kvaliteti i profesionalnosti. Razumijemo važnost personalizacije svakog događaja. Bilo da želite profinjen, mirniji ton ili energičnu zabavu do ranih jutarnjih sati, naš tim se brine da svaki detalj odgovara vašoj viziji proslave.
                </p>
              </div>

              <div className="mt-12">
                <Link to='/o-nama' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold group shadow-lg'>
                  Upoznaj nas
                  <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-500 group-hover:translate-x-1.5' />
                </Link>
              </div>
            </div>

            {/* Apple macOS Style Window */}
            <div className='w-full lg:w-1/2 relative mt-10 lg:mt-0'>
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-[color:var(--color-accent-gold)] to-blue-600/30 opacity-20 blur-3xl rounded-full z-0 transition-opacity duration-700 hover:opacity-30"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1e1e1e]/80 backdrop-blur-xl"
              >
                {/* macOS Title Bar */}
                <div className="h-10 md:h-12 bg-white/5 flex items-center px-4 md:px-6 border-b border-white/5">
                  <div className="flex gap-2 w-1/3">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] shadow-inner"></div>
                  </div>
                  <div className="w-1/3 text-center text-[10px] md:text-xs text-gray-500 font-medium tracking-wider flex justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faMinus} className="opacity-50 text-[8px]" />
                    <span>dj_proslave.webp</span>
                  </div>
                  <div className="w-1/3"></div>
                </div>

                {/* Content / Image inside the window */}
                <div className="relative overflow-hidden group bg-[#0a0b10]">
                  <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                  <img
                    src={aboutUsImg}
                    alt='DJ na poslu'
                    className='w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]'
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Galerija Section */}
      <section className='relative py-24 md:py-40 overflow-hidden bg-[#0a0b10] home-photo-gallery-section-bg'>
        {/* Glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[color:var(--color-accent-gold)] opacity-[0.05] blur-[150px] rounded-full z-0 pointer-events-none'></div>

        <div className='container relative z-10'>

          {/* Header */}
          <div className='flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8'>
            <div className='w-full md:w-2/3'>
              <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4'>
                <span className='w-12 h-px bg-[color:var(--color-accent-gold)]'></span>
                Naš Rad
              </h4>
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight'>
                Vizualni pregled <br className="hidden md:block" />
                <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>
                  Galerija.
                </span>
              </h3>
            </div>

            <div className='hidden md:block w-full md:w-1/3 text-right'>
              <Link to='/galerija' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold group shadow-lg'>
                Pogledajte sve
                <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-500 group-hover:translate-x-1.5' />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
            {listOfImages.map((img, key) => (
              <Link
                to='/galerija'
                onClick={() => window.scrollTo(0, 0)}
                key={key}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: key * 0.1, ease: "easeOut" }}
                  onMouseEnter={() => setHovered(img.name)}
                  onMouseLeave={() => setHovered('')}
                  className='relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/5 cursor-pointer group h-full'
                >
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] z-20 flex justify-center items-center transition-all duration-500 ${hovered === img.name ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="px-6 py-3 rounded-full bg-[color:var(--color-accent-gold)] text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center transform transition-transform duration-500 delay-75 scale-50 group-hover:scale-100 shadow-xl">
                      Pregledaj Galeriju
                    </div>
                  </div>

                  {/* Image */}
                  <div className='absolute inset-0 z-10'>
                    <img
                      className='w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]'
                      src={new URL(`../../assets/images/gallery-optimized/${img.name}.webp`, import.meta.url).href}
                      alt={img.alt}
                    />
                  </div>

                  {/* Subtle bottom gradient for depth */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15 pointer-events-none'></div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className='mt-12 md:hidden flex justify-center'>
            <Link to='/galerija' onClick={() => window.scrollTo(0, 0)} className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold group shadow-lg'>
              Pogledajte sve
              <FontAwesomeIcon icon={faChevronRight} className='transition-transform duration-500 group-hover:translate-x-1.5' />
            </Link>
          </div>


        </div>
      </section>

      {/* 7. NOVO: Call to Action sekcija */}
      <section className='relative py-24 md:py-32 overflow-hidden bg-[#0a0b10] border-t border-white/5'>
        <div className='absolute inset-0 bg-gradient-to-t from-[color:var(--color-accent-gold)]/10 via-transparent to-transparent pointer-events-none'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.1] blur-[100px] rounded-full z-0 pointer-events-none'></div>

        <div className='container relative z-10'>
          <div className='max-w-4xl mx-auto rounded-[2.5rem] p-8 md:p-16 border border-[color:var(--color-accent-gold)]/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] text-center relative overflow-hidden group'>
            {/* Hover shine effect */}
            <div className='absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] transition-all duration-1000 ease-out group-hover:translate-x-full pointer-events-none'></div>

            <h2 className='text-3xl md:text-5xl font-light tracking-wide text-white mb-6 drop-shadow-lg'>
              Spremni za nezaboravnu zabavu?
            </h2>
            <p className='text-gray-300 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed'>
              Ne prepuštajte atmosferu slučaju. Rezervirajte svoj termin na vrijeme i osigurajte glazbeni spektakl o kojem će vaši gosti dugo pričati.
            </p>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
              <a
                href='https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2B3850989582676&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0S84ZOxexEzRm-QqzdAJmF'
                target="_blank"
                rel="noreferrer"
                className='px-10 py-4 rounded-full bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center'
              >
                Rezervirajte odmah
              </a>
              <Link
                to='/kontakt'
                onClick={() => window.scrollTo(0, 0)}
                className='px-10 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center'
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
