import React, { useEffect } from 'react';
import './About.scss';
import aboutImg from '../../assets/images/dj-playing-music-mixer.webp'
import aboutHeroImg from '../../assets/images/closeup-dj-working-blue-light.webp'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeadphones, faSliders, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "o-nama",
    "O nama | DJ Proslave",
    "Višegodišnje iskustvo u pružanju vrhunske glazbene zabave. Upoznajte naš tim profesionalnih DJ-eva za vaše vjenčanje ili event.",
    "o nama, dj proslave, iskustvo dj, profesionalni dj"
  );
}

function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://djproslave.com/o-nama/#person`,
    "name": "DJ Proslave Tim",
    "jobTitle": "Profesionalni DJ",
    "description": "Višegodišnje iskustvo u pružanju vrhunske glazbene zabave. Upoznajte naš tim profesionalnih DJ-eva za vaše vjenčanje ili event.",
    "url": "https://djproslave.com/o-nama/",
    "image": "https://djproslave.com/logo.png",
    "knowsAbout": ["DJ-iranje", "Zabava za vjenčanja", "Organizacija događaja", "Oblikovanje zvuka"],
    "sameAs": [
      "https://www.instagram.com/dj.proslave",
      "https://www.facebook.com/DJProslaveVjencanja/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@dj.proslave"
    ]
  };

  const { scrollYProgress } = useScroll();

  function useParallax(value: MotionValue<number>) {
    return useTransform(value, [0, 1], ['0%', '100%']);
  }

  const y = useParallax(scrollYProgress);
  
  return (
    <div className="bg-[#050508]">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      {/* 1. Editorial Hero Section */}
      <section className='relative min-h-[60vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5'>
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-30 md:opacity-40">
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-[#050508]/50 to-[#050508] z-10"></div>
           <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${aboutHeroImg})` }}></div>
        </div>
        
        <div className='container relative z-20 pt-12 md:pt-0'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='max-w-3xl'
          >
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-16 h-px bg-[color:var(--color-accent-gold)]'></div>
              <span className='text-[color:var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs font-semibold'>Upoznajte naš tim</span>
            </div>
            
            <h1 className='text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-wide text-white leading-[1.1] mb-8'>
              Kreatori <br />
              <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>savršene</span> <br />
              atmosfere.
            </h1>
            
            <p className='text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed'>
              Mi ne puštamo samo glazbu. Mi gradimo emocije, osjećaj pripadnosti i stvaramo uspomene koje traju cijeli život.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Asymmetric Story Section */}
      <section className='py-24 md:py-40 relative'>
        <div className="container">
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-0'>
            
            {/* Image Side */}
            <div className='w-full lg:w-7/12 relative z-10'>
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm relative"
               >
                 <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-700 hover:opacity-0 pointer-events-none"></div>
                 <img src={aboutImg} alt='DJ na poslu' className='w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700' />
               </motion.div>
               {/* Decorative accent */}
               <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[color:var(--color-accent-gold)] z-0 hidden md:block"></div>
            </div>

            {/* Text Overlapping Block */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='w-full lg:w-6/12 relative z-20 lg:-ml-24'
            >
              <div className='bg-[#0f1016] p-8 md:p-16 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden'>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent-gold)]/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <h3 className='text-3xl md:text-4xl mb-8 font-light tracking-wide text-white'>
                  Naša Priča
                </h3>

                <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  <p>
                    Dobrodošli na <strong className='text-white font-medium'>DJ Proslave!</strong> Mi smo strastveni tim DJ-eva posvećen stvaranju nezaboravnih glazbenih iskustava. Svaki član našeg tima ima jedinstveni stil, bogato iskustvo i spremnost ispuniti svaku vašu glazbenu želju.
                  </p>
                  <p>
                    Bez obzira na vrstu događaja, surađujemo s vama kako bismo osigurali da glazba bude upravo onakva kakvu ste zamislili. Pružamo potpunu fleksibilnost u odabiru glazbenih stilova i ključnih trenutaka koji su vam najvažniji.
                  </p>
                  <p>
                    Naš cilj je jasan: želimo da vaša publika uživa, pleše do ranih jutarnjih sati i sa sobom ponese prekrasne uspomene!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Minimalist Philosophy Section */}
      <section className='py-24 bg-[#0a0b10] border-t border-b border-white/5'>
        <div className="container">
          <div className='mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8'>
            <h3 className='text-4xl md:text-5xl font-light tracking-wide text-white leading-tight'>
              Zašto odabrati <br /> <span className='font-semibold text-[color:var(--color-accent-gold)]'>nas?</span>
            </h3>
            <p className='text-gray-400 font-light max-w-md'>
              Vjerujemo da je glazba temelj svakog događaja. Naš pristup se temelji na tri jednostavna, ali ključna stupa.
            </p>
          </div>

          <div className='flex flex-col gap-8'>
            {/* Row 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                01
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Kvaliteta</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Naš fokus je na beskompromisnoj kvaliteti, od vrhunske opreme do izbora glazbe. Svaki detalj zvuka i rasvjete pažljivo je podešen za savršen doživljaj.</p>
              </div>
              <FontAwesomeIcon icon={faStar} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                02
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Profesionalnost</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Poštujemo Vaše vrijeme i dogovore. Naš tim na svaku proslavu dolazi pripremljen, elegantan i spreman odgovoriti na sve tehničke i glazbene izazove.</p>
              </div>
              <FontAwesomeIcon icon={faHeadphones} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>

            {/* Row 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                03
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Personalizacija</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Svaka proslava je jedinstvena. Ne puštamo napamet naučene setove, već osluškujemo Vaše želje i puls publike, osiguravajući da atmosfera uvijek bude na vrhuncu.</p>
              </div>
              <FontAwesomeIcon icon={faSliders} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Full-width Solid Gold CTA */}
      <section className='py-24 md:py-32 bg-[#050508]'>
        <div className='container'>
          <div className='flex flex-col md:flex-row justify-between items-center bg-[color:var(--color-accent-gold)] p-12 md:p-16 rounded-sm relative overflow-hidden'>
            <div className="absolute right-0 top-0 w-[60%] h-full bg-white opacity-20 skew-x-[30deg] translate-x-20 pointer-events-none hidden md:block"></div>
            
            <div className='relative z-10 mb-10 md:mb-0 text-center md:text-left'>
              <h2 className='text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight'>
                Spremni za <br className="hidden md:block" />savršenu zabavu?
              </h2>
              <p className='text-black/80 text-lg md:text-xl font-medium max-w-md'>
                Kontaktirajte nas danas i osigurajte vrhunskog DJ-a.
              </p>
            </div>
            
            <div className='relative z-10 flex gap-4 w-full md:w-auto flex-col sm:flex-row'>
              <Link 
                to='/kontakt'
                onClick={() => window.scrollTo(0, 0)} 
                className='px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-4 group shadow-2xl'
              >
                Kontaktirajte nas <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
