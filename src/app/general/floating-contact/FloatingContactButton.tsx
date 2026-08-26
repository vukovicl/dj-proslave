import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCommentDots, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end md:hidden" ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-4"
          >
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/385989582676" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-[#25D366]/40 hover:shadow-xl transition-all duration-300 group"
              title="Pošalji poruku na WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>
            
            {/* Direct Call Button */}
            <a 
              href="tel:+3850989582676" 
              className="md:hidden flex items-center gap-2 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black px-4 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-[color:var(--color-accent-gold)]/40 hover:shadow-xl transition-all duration-300 group"
              title="Nazovi direktno"
            >
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <span className="font-semibold text-sm">098 958 2676</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-center">
        {!isOpen && <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-accent-gold)] to-[#ffdf73] rounded-full animate-ping opacity-60"></div>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300 relative z-10"
          aria-label="Kontakt opcije"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faCommentDots} 
            className="text-2xl transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}

export default FloatingContactButton;
